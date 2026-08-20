from pathlib import Path
p=Path('index.html')
s=p.read_text(encoding='utf-8')
if 'rel="manifest"' not in s:
    s=s.replace('<title>MoneyTalks</title>','<title>MoneyTalks</title><meta name="description" content="MoneyTalks · ניהול כסף, תקציב, חיסכון והלוואות"><meta property="og:title" content="MoneyTalks"><meta property="og:description" content="הכסף שלך, ברור במבט אחד"><meta property="og:type" content="website"><meta name="twitter:card" content="summary"><link rel="manifest" href="manifest.json"><link rel="icon" href="icon.svg" type="image/svg+xml">')
if "serviceWorker.register('sw.js')" not in s:
    s=s.replace('</script></body></html>',"</script><script>if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}))}</script></body></html>")
p.write_text(s,encoding='utf-8')
