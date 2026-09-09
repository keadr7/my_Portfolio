import urllib.request
import sys

urls = [
    'http://localhost:5173/index.html',
    'http://localhost:5173/css/style.css',
    'http://localhost:5173/js/app.js',
    'http://localhost:5173/js/charts.js',
    'http://localhost:5173/assets/images/car-rental.jpg',
    'http://localhost:5173/assets/images/sales-dashboard.jpg',
    'http://localhost:5173/assets/images/churn-prediction.jpg',
    'http://localhost:5173/assets/images/covid-tableau.jpg',
    'http://localhost:5173/assets/images/kaivalya-avatar.jpg'
]

all_passed = True
for u in urls:
    try:
        req = urllib.request.Request(u, method='GET')
        with urllib.request.urlopen(req) as resp:
            content = resp.read()
            print(f"[OK] {u} -> Status: {resp.status}, Size: {len(content):,} bytes")
    except Exception as e:
        print(f"[FAIL] {u} -> Error: {e}")
        all_passed = False

if all_passed:
    print("\n>>> ALL 9 ASSETS AND PAGES DELIVERED PERFECTLY (HTTP 200) <<<")
else:
    sys.exit(1)
