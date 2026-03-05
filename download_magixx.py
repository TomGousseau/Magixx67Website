"""
67 Magixx Image Downloader - Undetected Browser Edition
Uses undetected-chromedriver to bypass bot detection
"""
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
import os
import time
import hashlib

OUTPUT_DIR = r"c:\Users\test\random project\sigma-hackor\public\magixx"
DOWNLOADED = []

def get_hash(filepath):
    """Get file hash to avoid duplicates"""
    with open(filepath, 'rb') as f:
        return hashlib.md5(f.read()).hexdigest()

def download_image(url, filename, session):
    """Download image with session cookies"""
    try:
        resp = session.get(url, timeout=15)
        if resp.status_code == 200 and len(resp.content) > 5000:
            filepath = os.path.join(OUTPUT_DIR, filename)
            with open(filepath, 'wb') as f:
                f.write(resp.content)
            print(f"[+] Downloaded: {filename} ({len(resp.content)} bytes)")
            return True
    except Exception as e:
        print(f"[-] Failed {filename}: {e}")
    return False

def scrape_hltv(driver, session):
    """Scrape magixx images from HLTV"""
    print("\n=== Scraping HLTV ===")
    driver.get("https://www.hltv.org/player/18656/magixx")
    time.sleep(3)
    
    # Get cookies for requests
    for cookie in driver.get_cookies():
        session.cookies.set(cookie['name'], cookie['value'])
    
    images = []
    try:
        # Player image
        img = driver.find_element(By.CSS_SELECTOR, ".playerBodyshot img, .playerImage img, .bodyshot-img")
        if img:
            src = img.get_attribute('src')
            if src:
                images.append(src)
                print(f"Found HLTV player image: {src[:80]}...")
    except:
        pass
    
    # Try gallery
    try:
        gallery_imgs = driver.find_elements(By.CSS_SELECTOR, ".gallery img, .image-gallery img")
        for img in gallery_imgs[:10]:
            src = img.get_attribute('src')
            if src and 'magixx' in src.lower():
                images.append(src)
    except:
        pass
    
    return images

def scrape_liquipedia(driver, session):
    """Scrape magixx images from Liquipedia"""
    print("\n=== Scraping Liquipedia ===")
    driver.get("https://liquipedia.net/counterstrike/Magixx")
    time.sleep(3)
    
    for cookie in driver.get_cookies():
        session.cookies.set(cookie['name'], cookie['value'])
    
    images = []
    try:
        # Main infobox image
        infobox = driver.find_elements(By.CSS_SELECTOR, ".infobox-image img, .infobox img")
        for img in infobox:
            src = img.get_attribute('src')
            if src and ('magixx' in src.lower() or 'liquipedia' in src):
                images.append(src)
                print(f"Found infobox image")
    except:
        pass
    
    # Gallery section
    try:
        gallery = driver.find_elements(By.CSS_SELECTOR, ".wikitable img, .gallery img, .image img")
        for img in gallery:
            src = img.get_attribute('src')
            if src:
                images.append(src)
    except:
        pass
    
    # Expand thumbnails to full size
    full_images = []
    for img in images:
        if '/thumb/' in img:
            # Convert thumbnail to full image
            parts = img.split('/thumb/')
            if len(parts) == 2:
                base = parts[0]
                rest = parts[1]
                # Remove the last part (thumbnail size)
                full_path = '/'.join(rest.split('/')[:-1])
                full_url = f"{base}/{full_path}"
                full_images.append(full_url)
        else:
            full_images.append(img)
    
    return full_images

def scrape_google_images(driver, session):
    """Search Google Images for magixx cs2"""
    print("\n=== Scraping Google Images ===")
    driver.get("https://www.google.com/search?q=magixx+cs2+player&tbm=isch")
    time.sleep(3)
    
    # Scroll to load more
    for _ in range(3):
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(1)
    
    images = []
    try:
        thumbnails = driver.find_elements(By.CSS_SELECTOR, "img.rg_i, img.Q4LuWd")
        print(f"Found {len(thumbnails)} thumbnails")
        
        for thumb in thumbnails[:30]:
            try:
                thumb.click()
                time.sleep(0.5)
                # Get full size image
                full_imgs = driver.find_elements(By.CSS_SELECTOR, "img.n3VNCb, img.iPVvYb")
                for fi in full_imgs:
                    src = fi.get_attribute('src')
                    if src and src.startswith('http') and 'gstatic' not in src:
                        images.append(src)
                        break
            except:
                pass
    except Exception as e:
        print(f"Google scrape error: {e}")
    
    return images

def scrape_esports_sites(driver, session):
    """Scrape various esports sites"""
    print("\n=== Scraping Esports Sites ===")
    images = []
    
    sites = [
        "https://www.dust2.us/player/Magixx",
        "https://bo3.gg/players/magixx",
        "https://prosettings.net/players/magixx/",
    ]
    
    for site in sites:
        try:
            print(f"Trying: {site}")
            driver.get(site)
            time.sleep(2)
            
            for cookie in driver.get_cookies():
                session.cookies.set(cookie['name'], cookie['value'])
            
            imgs = driver.find_elements(By.CSS_SELECTOR, "img")
            for img in imgs:
                src = img.get_attribute('src')
                if src and ('magixx' in src.lower() or 'player' in src.lower()):
                    images.append(src)
                    print(f"  Found: {src[:60]}...")
        except Exception as e:
            print(f"  Error: {e}")
    
    return images

def main():
    print("=" * 50)
    print("  67 MAGIXX IMAGE DOWNLOADER")
    print("  Undetected Browser Edition")
    print("=" * 50)
    
    # Setup undetected chrome
    options = uc.ChromeOptions()
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    # options.add_argument('--headless')  # Uncomment for headless
    
    print("\nStarting undetected Chrome...")
    driver = uc.Chrome(options=options)
    driver.set_window_size(1920, 1080)
    
    # Session for downloading with cookies
    session = requests.Session()
    session.headers.update({
        'User-Agent': driver.execute_script("return navigator.userAgent")
    })
    
    all_images = []
    
    # Scrape from multiple sources
    try:
        all_images.extend(scrape_hltv(driver, session))
        all_images.extend(scrape_liquipedia(driver, session))
        all_images.extend(scrape_google_images(driver, session))
        all_images.extend(scrape_esports_sites(driver, session))
    except Exception as e:
        print(f"Scraping error: {e}")
    
    # Remove duplicates
    all_images = list(set(all_images))
    print(f"\n=== Total unique images found: {len(all_images)} ===")
    
    # Download images
    count = 0
    hashes_seen = set()
    
    for i, url in enumerate(all_images):
        if count >= 67:
            break
        
        filename = f"{count + 1}.png"
        filepath = os.path.join(OUTPUT_DIR, filename)
        
        try:
            resp = session.get(url, timeout=15)
            if resp.status_code == 200 and len(resp.content) > 5000:
                # Check for duplicates
                img_hash = hashlib.md5(resp.content).hexdigest()
                if img_hash not in hashes_seen:
                    hashes_seen.add(img_hash)
                    with open(filepath, 'wb') as f:
                        f.write(resp.content)
                    print(f"[{count+1}/67] Saved: {filename} ({len(resp.content)} bytes)")
                    count += 1
        except Exception as e:
            pass
    
    print(f"\n=== Downloaded {count} unique images ===")
    
    driver.quit()
    print("Done!")

if __name__ == "__main__":
    main()
