"""
67 Magixx Image Downloader - Playwright Edition
Uses Playwright's bundled Chromium to avoid version issues
"""
from playwright.sync_api import sync_playwright
import requests
import os
import time
import hashlib

OUTPUT_DIR = r"c:\Users\test\random project\sigma-hackor\public\magixx"
downloaded_hashes = set()
image_count = 0

def save_image(url, session):
    """Download and save image, return True if successful new image"""
    global image_count, downloaded_hashes
    
    if image_count >= 67:
        return False
    
    try:
        resp = session.get(url, timeout=15)
        if resp.status_code == 200 and len(resp.content) > 5000:
            img_hash = hashlib.md5(resp.content).hexdigest()
            if img_hash not in downloaded_hashes:
                downloaded_hashes.add(img_hash)
                image_count += 1
                filepath = os.path.join(OUTPUT_DIR, f"{image_count}.png")
                with open(filepath, 'wb') as f:
                    f.write(resp.content)
                print(f"[{image_count}/67] Saved ({len(resp.content)} bytes)")
                return True
    except Exception as e:
        pass
    return False

def scrape_hltv(page, session):
    """Scrape HLTV player page"""
    print("\n=== HLTV ===")
    try:
        page.goto("https://www.hltv.org/player/18656/magixx", timeout=15000)
        page.wait_for_timeout(3000)
        
        # Get cookies
        for cookie in page.context.cookies():
            session.cookies.set(cookie['name'], cookie['value'])
        
        # Find player images
        imgs = page.query_selector_all("img")
        for img in imgs:
            try:
                src = img.get_attribute('src')
                if src and ('player' in src or 'hltv' in src or 'cdn' in src):
                    print(f"  Found: {src[:60]}...")
                    save_image(src, session)
            except:
                pass
    except Exception as e:
        print(f"  Skipped (blocked): {str(e)[:50]}")

def scrape_liquipedia(page, session):
    """Scrape Liquipedia"""
    print("\n=== Liquipedia ===")
    try:
        page.goto("https://liquipedia.net/counterstrike/Magixx", timeout=20000)
        page.wait_for_timeout(3000)
        
        for cookie in page.context.cookies():
            session.cookies.set(cookie['name'], cookie['value'])
        
        # Get all images on page
        imgs = page.query_selector_all("img")
        for img in imgs:
            try:
                src = img.get_attribute('src')
                if src:
                    # Convert thumbnail to full size
                    if '/thumb/' in src:
                        parts = src.split('/thumb/')
                        if len(parts) == 2:
                            full_path = '/'.join(parts[1].split('/')[:-1])
                            src = f"{parts[0]}/{full_path}"
                    
                    if 'magixx' in src.lower() or 'Magixx' in src:
                        print(f"  Found: {src[:60]}...")
                        save_image(src, session)
            except:
                pass
    except Exception as e:
        print(f"  Skipped: {str(e)[:50]}")

def scrape_google(page, session):
    """Scrape Google Images"""
    print("\n=== Google Images ===")
    try:
        page.goto("https://www.google.com/search?q=magixx+cs2+esports+player&tbm=isch", timeout=30000)
        page.wait_for_timeout(3000)
        
        # Scroll down
        for _ in range(5):
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            page.wait_for_timeout(1000)
        
        # Click on thumbnails to get full images
        thumbs = page.query_selector_all("img.Q4LuWd, img.rg_i")
        print(f"  Found {len(thumbs)} thumbnails")
        
        urls_found = []
        for i, thumb in enumerate(thumbs[:40]):
            try:
                thumb.click()
                page.wait_for_timeout(500)
                
                # Get the large image
                large_imgs = page.query_selector_all("img.sFlh5c, img.n3VNCb, img.iPVvYb, img.r48jcc")
                for large in large_imgs:
                    src = large.get_attribute('src')
                    if src and src.startswith('http') and 'gstatic' not in src and 'google' not in src:
                        if src not in urls_found:
                            urls_found.append(src)
                            print(f"  [{i+1}] Found full image")
                            save_image(src, session)
                            if image_count >= 67:
                                return
            except:
                pass
    except Exception as e:
        print(f"  Error: {e}")

def scrape_esports(page, session):
    """Scrape esports sites"""
    print("\n=== Esports Sites ===")
    
    sites = [
        ("https://prosettings.net/players/magixx/", "prosettings"),
        ("https://www.dust2.us/Players/16423-magixx", "dust2"),
        ("https://bo3.gg/players/magixx", "bo3"),
    ]
    
    for url, name in sites:
        try:
            print(f"  Trying {name}...")
            page.goto(url, wait_until="networkidle", timeout=20000)
            page.wait_for_timeout(2000)
            
            for cookie in page.context.cookies():
                session.cookies.set(cookie['name'], cookie['value'])
            
            imgs = page.query_selector_all("img")
            for img in imgs:
                src = img.get_attribute('src')
                if src and 'magixx' in src.lower():
                    print(f"    Found: {src[:50]}...")
                    save_image(src, session)
        except Exception as e:
            print(f"    Error: {e}")

def scrape_more_google(page, session):
    """More Google searches if we need more images"""
    searches = [
        "magixx spirit cs2",
        "magixx team spirit",
        "magixx major",
        "magixx katowice",
        "magixx blast",
        "magixx iem"
    ]
    
    for query in searches:
        if image_count >= 67:
            break
        print(f"\n=== Google: {query} ===")
        try:
            page.goto(f"https://www.google.com/search?q={query.replace(' ', '+')}&tbm=isch", timeout=30000)
            page.wait_for_timeout(2000)
            
            for _ in range(3):
                page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                page.wait_for_timeout(500)
            
            thumbs = page.query_selector_all("img.Q4LuWd, img.rg_i")
            for thumb in thumbs[:20]:
                try:
                    thumb.click()
                    page.wait_for_timeout(400)
                    large_imgs = page.query_selector_all("img.sFlh5c, img.n3VNCb, img.iPVvYb")
                    for large in large_imgs:
                        src = large.get_attribute('src')
                        if src and src.startswith('http') and 'gstatic' not in src:
                            save_image(src, session)
                            if image_count >= 67:
                                return
                            break
                except:
                    pass
        except:
            pass

def main():
    global image_count
    
    print("=" * 50)
    print("  67 MAGIXX IMAGE DOWNLOADER")
    print("  Playwright Chromium Edition")
    print("=" * 50)
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)  # Set True for headless
        context = browser.new_context(
            viewport={'width': 1920, 'height': 1080},
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        )
        page = context.new_page()
        
        session = requests.Session()
        session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
        
        # Scrape from sources
        scrape_hltv(page, session)
        scrape_liquipedia(page, session)
        scrape_esports(page, session)
        scrape_google(page, session)
        
        if image_count < 67:
            scrape_more_google(page, session)
        
        browser.close()
    
    print(f"\n{'='*50}")
    print(f"  COMPLETE: Downloaded {image_count} unique magixx images")
    print(f"{'='*50}")

if __name__ == "__main__":
    main()
