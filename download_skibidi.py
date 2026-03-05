"""
Download skibidi toilet meme images using Playwright
"""
from playwright.sync_api import sync_playwright
import os
import base64
import hashlib

OUTPUT_DIR = r"c:\Users\test\random project\sigma-hackor\public\skibidi"
hashes = set()
count = 0
TARGET = 67

def save_from_src(page, src):
    global count, hashes
    if count >= TARGET:
        return
    try:
        result = page.evaluate(f"""
            async () => {{
                try {{
                    const response = await fetch("{src}");
                    const blob = await response.blob();
                    return new Promise((resolve) => {{
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result);
                        reader.readAsDataURL(blob);
                    }});
                }} catch(e) {{ return null; }}
            }}
        """)
        if result and ',' in result:
            b64data = result.split(',')[1]
            img_bytes = base64.b64decode(b64data)
            if len(img_bytes) > 3000:
                img_hash = hashlib.md5(img_bytes).hexdigest()
                if img_hash not in hashes:
                    hashes.add(img_hash)
                    count += 1
                    filepath = os.path.join(OUTPUT_DIR, f"{count}.png")
                    with open(filepath, 'wb') as f:
                        f.write(img_bytes)
                    print(f"[{count}/{TARGET}] Saved ({len(img_bytes)} bytes)")
    except:
        pass

def main():
    global count
    print("="*50)
    print("  SKIBIDI TOILET MEME DOWNLOADER")
    print("="*50)
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(viewport={'width': 1920, 'height': 1080})
        page = context.new_page()
        
        searches = [
            "skibidi toilet meme",
            "skibidi toilet funny",
            "skibidi dop dop yes yes",
            "skibidi toilet dog",
            "skibidi sigma",
            "skibidi toilet derp",
            "skibidi brainrot meme",
            "gen alpha meme skibidi",
            "skibidi ohio meme",
            "skibidi toilet cursed",
            "skibidi toilet fan art funny",
            "skibidi toilet png transparent",
            "funny dog meme derp",
            "autistic dog meme",
            "sigma dog meme",
            "derpy dog meme funny",
            "cursed dog images funny",
            "dog looking weird meme",
        ]
        
        for query in searches:
            if count >= TARGET:
                break
            print(f"\n=== Google: {query} ===")
            try:
                page.goto(f"https://www.google.com/search?q={query.replace(' ', '+')}&tbm=isch", timeout=20000)
                page.wait_for_timeout(2000)
                
                for _ in range(3):
                    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    page.wait_for_timeout(500)
                
                thumbs = page.query_selector_all("img.Q4LuWd, img.rg_i")[:25]
                for thumb in thumbs:
                    if count >= TARGET:
                        break
                    try:
                        thumb.click()
                        page.wait_for_timeout(500)
                        large = page.query_selector_all("img.sFlh5c.pT0Scc, img.n3VNCb, img.iPVvYb.pT0Scc")
                        for lg in large:
                            src = lg.get_attribute('src')
                            if src and src.startswith('http') and 'gstatic' not in src and 'google' not in src:
                                save_from_src(page, src)
                                break
                    except:
                        pass
            except Exception as e:
                print(f"  Error: {e}")
        
        browser.close()
    
    print(f"\n{'='*50}")
    print(f"  Downloaded {count}/{TARGET} skibidi images")
    print(f"{'='*50}")

if __name__ == "__main__":
    main()
