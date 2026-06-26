// Cloudflare Pages Function — receives the contact form (same-origin, no CORS)
// and forwards it to the OJI DIGITAL n8n send-email webhook server-side.
const N8N = "https://ojidigital.app.n8n.cloud/webhook/send-email";
const esc = s => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } });
}

export async function onRequestPost({ request }) {
  let d;
  try { d = await request.json(); } catch (e) { return json({ ok: false, error: "bad-json" }, 400); }

  // honeypot: bots fill the hidden field — silently accept and drop
  if (d.hp) return json({ ok: true });

  const name = String(d.name || "").trim().slice(0, 200);
  const email = String(d.email || "").trim().slice(0, 200);
  const company = String(d.company || "").trim().slice(0, 200);
  const message = String(d.message || "").trim().slice(0, 5000);
  const lang = String(d.lang || "en").trim().slice(0, 5);

  if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    return json({ ok: false, error: "missing-fields" }, 400);

  const html =
    `<h2>New automation enquiry</h2>` +
    `<p><b>Name:</b> ${esc(name)}</p>` +
    `<p><b>Email:</b> ${esc(email)}</p>` +
    `<p><b>Company:</b> ${esc(company) || "—"}</p>` +
    `<p><b>Language:</b> ${esc(lang)}</p>` +
    `<p><b>Message:</b><br>${esc(message).replace(/\n/g, "<br>")}</p>` +
    `<hr><p style="color:#888;font-size:12px">via automate.ojidigital.com contact form</p>`;

  try {
    const r = await fetch(N8N, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "hello@ojidigital.com",
        subject: `Automation enquiry — ${name}`,
        replyTo: email,
        html,
      }),
    });
    if (!r.ok) return json({ ok: false, error: "upstream" }, 502);
    return json({ ok: true });
  } catch (e) {
    return json({ ok: false, error: "send-failed" }, 502);
  }
}
