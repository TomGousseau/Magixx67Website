"""
Download magixx images using Playwright - Direct browser save
"""
from playwright.sync_api import sync_playwright
import os
import time
import base64
import hashlib

OUTPUT_DIR = r"c:\Users\test\random project\sigma-hackor\public\magixx"
hashes = set()
count = 22  # Start from 22

def save_from_src(page, src, idx):
    """Download image through browser and save"""
    global count, hashes
    if count >= 67:
        return
    
    try:
        # Use browser to fetch
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
                }} catch(e) {{
                    return null;
                }}
            }}
        """)
        
        if result and ',' in result:
            # Extract base64 data
            b64data = result.split(',')[1]
            img_bytes = base64.b64decode(b64data)
            
            if len(img_bytes) > 5000:
                img_hash = hashlib.md5(img_bytes).hexdigest()
                if img_hash not in hashes:
                    hashes.add(img_hash)
                    count += 1
                    filepath = os.path.join(OUTPUT_DIR, f"{count}.png")
                    with open(filepath, 'wb') as f:
                        f.write(img_bytes)
                    print(f"[{count}/67] Saved ({len(img_bytes)} bytes)")
    except Exception as e:
        pass

def main():
    global count
    
    print("=" * 50)
    print("  MAGIXX IMAGE DOWNLOADER v2")
    print("=" * 50)
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(viewport={'width': 1920, 'height': 1080})
        page = context.new_page()
        
        # HLTV
        print("\n=== HLTV ===")
        try:
            page.goto("https://www.hltv.org/player/18656/magixx", timeout=30000)
            page.wait_for_timeout(3000)
            
            imgs = page.query_selector_all("img")
            for i, img in enumerate(imgs):
                src = img.get_attribute('src')
                if src and src.startswith('http') and ('cdn' in src or 'img' in src):
                    save_from_src(page, src, i)
        except Exception as e:
            print(f"  HLTV error: {e}")
        
        # Google Images - main source
        searches = [
            "magixx cs2 player photo",
            "magixx team spirit photo",
            "magixx esports photo",
            "magixx counter strike 2",
            "magixx major tournament",
            "magixx katowice 2024",
            "magixx blast premier 2024",
            "magixx iem cologne",
            "magixx dreamhack",
            "magixx pro player",
            "magixx russian cs2",
            "magixx spirit gaming",
            "magixx headshot",
            "magixx award ceremony",
            "magixx trophy",
            "magixx interview"
        ]
        
        for query in searches:
            if count >= 67:
                break
            
            print(f"\n=== Google: {query} ===")
            try:
                page.goto(f"https://www.google.com/search?q={query.replace(' ', '+')}&tbm=isch", timeout=20000)
                page.wait_for_timeout(2000)
                
                # Scroll
                for _ in range(3):
                    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    page.wait_for_timeout(500)
                
                thumbs = page.query_selector_all("img.Q4LuWd, img.rg_i")[:30]
                
                for thumb in thumbs:
                    if count >= 67:
                        break
                    try:
                        thumb.click()
                        page.wait_for_timeout(600)
                        
                        # Get full size
                        large = page.query_selector_all("img.sFlh5c.pT0Scc, img.n3VNCb, img.iPVvYb.pT0Scc")
                        for lg in large:
                            src = lg.get_attribute('src')
                            if src and src.startswith('http') and 'gstatic' not in src and 'google' not in src:
                                save_from_src(page, src, 0)
                                break
                    except:
                        pass
            except Exception as e:
                print(f"  Error: {e}")
        
        # Bing Images backup
        if count < 67:
            print("\n=== Bing Images ===")
            try:
                page.goto("https://www.bing.com/images/search?q=magixx+cs2+player&form=HDRSC2", timeout=20000)
                page.wait_for_timeout(2000)
                
                imgs = page.query_selector_all(".mimg")[:50]
                for img in imgs:
                    if count >= 67:
                        break
                    src = img.get_attribute('src')
                    if src and src.startswith('http'):
                        save_from_src(page, src, 0)
            except:
                pass
        
        browser.close()
    
    print(f"\n{'='*50}")
    print(f"  Downloaded {count}/67 unique images")
    print(f"{'='*50}")

if __name__ == "__main__":
    main()
