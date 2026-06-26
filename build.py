#!/usr/bin/env python3
"""Static blog generator for automate.ojidigital.com.

Reads each post from blog/_src/<slug>/  (meta.json + en.html + ja.html + fr.html)
and emits per-language static pages with hreflang + OG:
  EN: /blog/index.html , /blog/<slug>.html
  JA: /blog/ja/index.html , /blog/ja/<slug>.html
  FR: /blog/fr/index.html , /blog/fr/<slug>.html
Also regenerates /sitemap.xml (landing + all blog URLs).

Run:  python3 build.py   (then commit & push — Cloudflare Pages auto-deploys)
The article HTML lives in en/ja/fr.html so there's no JSON-escaping of long bodies.
"""
import json, pathlib, html, re

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / "blog" / "_src"
BASE = "https://automate.ojidigital.com"
LANGS = ["en", "ja", "fr"]

UI = {
 "en": {"blog": "Blog", "allposts": "All articles", "back": "← All articles",
        "home": "AI & Automation", "contact": "Get in touch",
        "index_h": "The OJI DIGITAL automation blog",
        "index_sub": "Practical, no-nonsense notes on automating real business processes — written from our build desk in Tokyo.",
        "cta_h": "Ready to automate the busywork?",
        "cta_p": "Book a free automation audit — we'll find the one or two processes with the fastest payback. No obligation, and you keep the plan.",
        "cta_btn": "Book a free audit", "min": "min read", "foot": "OJI DIGITAL · Vegan Oji Inc. · AI & business-process automation"},
 "ja": {"blog": "ブログ", "allposts": "記事一覧", "back": "← 記事一覧へ",
        "home": "AI・業務自動化", "contact": "お問い合わせ",
        "index_h": "OJI DIGITAL 自動化ブログ",
        "index_sub": "実際の業務自動化についての、実践的で率直なノート。東京の開発現場から。",
        "cta_h": "面倒な繰り返し作業、自動化しませんか？",
        "cta_p": "無料の自動化診断を予約する — 最も投資回収の早い業務を1〜2件お見つけします。ご相談だけでも歓迎、計画はそのままお持ち帰りいただけます。",
        "cta_btn": "無料診断を予約する", "min": "分で読めます", "foot": "OJI DIGITAL · ビーガン王子株式会社 · AI・業務自動化"},
 "fr": {"blog": "Blog", "allposts": "Tous les articles", "back": "← Tous les articles",
        "home": "IA & Automatisation", "contact": "Nous contacter",
        "index_h": "Le blog automatisation d'OJI DIGITAL",
        "index_sub": "Des notes pratiques et sans détour sur l'automatisation de vrais processus métier — depuis notre atelier à Tokyo.",
        "cta_h": "Prêt à automatiser les tâches répétitives ?",
        "cta_p": "Réservez un audit d'automatisation gratuit — nous trouvons les 1 à 2 processus au retour le plus rapide. Sans engagement, et vous repartez avec le plan.",
        "cta_btn": "Réserver un audit gratuit", "min": "min de lecture", "foot": "OJI DIGITAL · Vegan Oji Inc. · IA & automatisation des processus"},
}
MONTHS = {
 "en": ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
 "fr": ["", "janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
}

def landing(lang):
    return "/" if lang == "en" else f"/{lang}/"

def blog_index_url(lang):
    return "/blog/" if lang == "en" else f"/blog/{lang}/"

def post_url(lang, slug):
    return (f"/blog/{slug}" if lang == "en" else f"/blog/{lang}/{slug}")

def out_dir(lang):
    return ROOT / "blog" if lang == "en" else ROOT / "blog" / lang

def fmt_date(d, lang):
    y, m, da = d.split("-")
    mi = int(m); dd = int(da)
    if lang == "ja":
        return f"{y}年{mi}月{dd}日"
    return f"{MONTHS[lang][mi]} {dd}, {y}" if lang == "en" else f"{dd} {MONTHS[lang][mi]} {y}"

def read_time(body, lang):
    text = re.sub(r"<[^>]+>", "", body)
    if lang == "ja":
        n = len(re.sub(r"\s", "", text)); return max(1, round(n / 500))
    n = len(text.split()); return max(1, round(n / 200))

HEAD_ASSETS = """<script src="https://cdn.tailwindcss.com"></script>
<script>tailwind.config={theme:{extend:{colors:{navy:{DEFAULT:'#1a2042',600:'#252c54',50:'#eef0f6'},red:{DEFAULT:'#dc1915',600:'#c1130f',50:'#fdecec'},paper:'#fbf7f7',muted:'#6b7088'},fontFamily:{sans:['Inter','Noto Sans JP','sans-serif']}}}}</script>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/style.css">"""

def head(lang, title, desc, canonical, alts, og_type="website"):
    hl = "".join(f'\n<link rel="alternate" hreflang="{l}" href="{BASE}{u}">' for l, u in alts.items())
    hl += f'\n<link rel="alternate" hreflang="x-default" href="{BASE}{alts["en"]}">'
    t = html.escape(title); d = html.escape(desc)
    return f"""<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{t}</title>
<meta name="description" content="{d}">
<link rel="canonical" href="{BASE}{canonical}">{hl}
<meta property="og:type" content="{og_type}">
<meta property="og:title" content="{t}">
<meta property="og:description" content="{d}">
<meta property="og:image" content="{BASE}/hero.webp">
<meta property="og:url" content="{BASE}{canonical}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.png">
{HEAD_ASSETS}
</head>"""

def header(lang, alts):
    u = UI[lang]
    names = {"en": "English", "ja": "日本語", "fr": "FR"}
    langlinks = " ".join(
        (f'<span class="text-navy font-bold">{names[l]}</span>' if l == lang
         else f'<a href="{alts[l]}" class="text-muted hover:text-navy">{names[l]}</a>')
        for l in LANGS)
    return f"""<body class="font-sans">
<header class="sticky top-0 z-30 bg-paper/90 backdrop-blur border-b border-navy/10">
  <div class="max-w-6xl mx-auto px-5 h-[64px] flex items-center justify-between gap-3">
    <div class="flex items-center gap-3 min-w-0">
      <a href="{landing(lang)}" class="flex items-center"><img src="/logo.svg" alt="OJI DIGITAL" class="h-5 sm:h-6 w-auto"></a>
      <span class="hidden sm:block w-px h-7 bg-navy/15"></span>
      <a href="{blog_index_url(lang)}" class="text-[13px] font-bold text-navy">{u['blog']}</a>
    </div>
    <div class="flex items-center gap-3 shrink-0 text-[12.5px] font-semibold">
      <div class="flex items-center gap-2">{langlinks}</div>
      <a href="{landing(lang)}#contact" class="btn btn-ghost !py-2 !px-3 !text-sm">{u['contact']}</a>
    </div>
  </div>
</header>"""

def cta_card(lang):
    u = UI[lang]
    return f"""<div class="card p-7 sm:p-9 mt-12 text-center" style="background:linear-gradient(135deg,#1a2042,#2a3160);color:#fff">
  <h3 class="text-xl sm:text-2xl font-extrabold leading-tight">{u['cta_h']}</h3>
  <p class="mt-3 text-white/80 leading-relaxed max-w-xl mx-auto text-[15px]">{u['cta_p']}</p>
  <div class="mt-6"><a class="btn btn-red" href="{landing(lang)}#contact">{u['cta_btn']} →</a></div>
</div>"""

def footer(lang):
    u = UI[lang]
    return f"""<footer class="border-t border-navy/10 py-8 text-center text-xs text-muted">
  <img src="/logo.svg" alt="OJI DIGITAL" class="h-3.5 w-auto mx-auto opacity-60 mb-2">{u['foot']}
</footer>
</body>
</html>"""

def render_post(post, lang):
    u = UI[lang]
    title = post["title"][lang]; desc = post["description"][lang]; tag = post["tag"][lang]
    body = post["body"][lang]
    slug = post["slug"]
    alts = {l: post_url(l, slug) for l in LANGS}
    rt = read_time(body, lang)
    h = head(lang, f"{title} · OJI DIGITAL", desc, post_url(lang, slug), alts, og_type="article")
    hdr = header(lang, alts)
    article = f"""
<main class="max-w-3xl mx-auto px-5 py-12 sm:py-16">
  <a href="{blog_index_url(lang)}" class="text-[13px] font-bold text-muted hover:text-navy">{u['back']}</a>
  <div class="mt-5 mb-2"><span class="tagpill">{html.escape(tag)}</span></div>
  <h1 class="text-3xl sm:text-[40px] font-extrabold text-navy leading-[1.12]">{html.escape(title)}</h1>
  <div class="text-[13px] text-muted mt-4 mb-8 flex items-center gap-2">
    <span>{fmt_date(post['date'], lang)}</span><span>·</span><span>{rt} {u['min']}</span>
  </div>
  <article class="prose">{body}</article>
  {cta_card(lang)}
  <div class="mt-10"><a href="{blog_index_url(lang)}" class="text-[13px] font-bold text-muted hover:text-navy">{u['back']}</a></div>
</main>"""
    return h + hdr + article + footer(lang)

def render_index(posts, lang):
    u = UI[lang]
    alts = {l: blog_index_url(l) for l in LANGS}
    h = head(lang, f"{u['index_h']} · OJI DIGITAL", u["index_sub"], blog_index_url(lang), alts)
    hdr = header(lang, alts)
    cards = ""
    for p in posts:
        cards += f"""
    <a href="{post_url(lang, p['slug'])}" class="postcard">
      <div class="p-6">
        <span class="tagpill">{html.escape(p['tag'][lang])}</span>
        <h2 class="text-xl font-extrabold text-navy leading-snug mt-3">{html.escape(p['title'][lang])}</h2>
        <p class="text-sm text-muted mt-2 leading-relaxed">{html.escape(p['description'][lang])}</p>
        <div class="text-[12px] text-muted mt-4">{fmt_date(p['date'], lang)} · {read_time(p['body'][lang], lang)} {u['min']}</div>
      </div>
    </a>"""
    body = f"""
<section class="hero text-white">
  <div class="max-w-5xl mx-auto px-5 py-14 sm:py-16">
    <div class="eyebrow mb-3" style="color:#ff9b97">{u['blog']}</div>
    <h1 class="text-3xl sm:text-[42px] font-extrabold leading-tight">{html.escape(u['index_h'])}</h1>
    <p class="mt-4 text-white/80 leading-relaxed max-w-2xl">{html.escape(u['index_sub'])}</p>
  </div>
</section>
<main class="max-w-5xl mx-auto px-5 py-12 sm:py-16">
  <div class="grid sm:grid-cols-2 gap-5">{cards}
  </div>
  {cta_card(lang)}
</main>"""
    return h + hdr + body + footer(lang)

def write_sitemap(posts):
    urls = []
    # landing
    urls.append((f"{BASE}/", {"en": "/", "ja": "/ja/", "fr": "/fr/"}))
    urls.append((f"{BASE}/ja/", None)); urls.append((f"{BASE}/fr/", None))
    # blog indexes
    urls.append((f"{BASE}/blog/", {"en": "/blog/", "ja": "/blog/ja/", "fr": "/blog/fr/"}))
    urls.append((f"{BASE}/blog/ja/", None)); urls.append((f"{BASE}/blog/fr/", None))
    # posts
    for p in posts:
        urls.append((f"{BASE}{post_url('en', p['slug'])}", {l: post_url(l, p['slug']) for l in LANGS}))
        urls.append((f"{BASE}{post_url('ja', p['slug'])}", None))
        urls.append((f"{BASE}{post_url('fr', p['slug'])}", None))
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for loc, alts in urls:
        out.append("  <url>")
        out.append(f"    <loc>{loc}</loc>")
        if alts:
            for l, u in alts.items():
                out.append(f'    <xhtml:link rel="alternate" hreflang="{l}" href="{BASE}{u}"/>')
            out.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{BASE}{alts["en"]}"/>')
        out.append("    <changefreq>monthly</changefreq>")
        out.append("  </url>")
    out.append("</urlset>")
    (ROOT / "sitemap.xml").write_text("\n".join(out) + "\n", encoding="utf-8")

def load_posts():
    posts = []
    if not SRC.exists():
        return posts
    for meta_path in SRC.glob("*/meta.json"):
        d = meta_path.parent
        try:
            meta = json.loads(meta_path.read_text(encoding="utf-8"))
            meta["body"] = {l: (d / f"{l}.html").read_text(encoding="utf-8").strip() for l in LANGS}
            posts.append(meta)
        except Exception as e:
            print(f"  ! skip {d.name}: {e}")
    posts.sort(key=lambda p: (p.get("order", 999), p["slug"]))
    return posts

def main():
    posts = load_posts()
    print(f"Loaded {len(posts)} post(s)")
    for lang in LANGS:
        od = out_dir(lang); od.mkdir(parents=True, exist_ok=True)
        for p in posts:
            (od / f"{p['slug']}.html").write_text(render_post(p, lang), encoding="utf-8")
        (od / "index.html").write_text(render_index(posts, lang), encoding="utf-8")
        print(f"  {lang}: index + {len(posts)} posts → {od.relative_to(ROOT)}")
    write_sitemap(posts)
    print("  sitemap.xml regenerated")

if __name__ == "__main__":
    main()
