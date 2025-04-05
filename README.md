# YouTube Shorts & Ads Remover

A simple Chrome extension to enhance your YouTube experience by:

✅ Hiding **YouTube Shorts**
✅ Removing **ads** (including promoted videos and player ads)
✅ Redirecting from **Shorts URLs** back to the homepage
✅ Cleaning up the **sidebar Shorts button**

---

## 📦 Features

- Remove Shorts from:
  - Homepage feed
  - Search results
  - Video recommendations
  - Sidebar
- Redirect `/shorts/*` URLs to `/`
- Remove common YouTube ad elements
- Works automatically when browsing YouTube

---

## 🧰 Installation

1. Clone or download this repo.
2. Open [chrome://extensions/](chrome://extensions/) in your Chrome browser.
3. Enable **Developer Mode** (top right).
4. Click **Load unpacked**.
5. Select the folder where you saved the extension files.

---

## 🗂 File Structure

```
youtube-cleaner/
├── manifest.json
├── content.js
├── style.css
```

> Note: The icons folder is optional and used for extension branding.

---

## 🧠 How It Works

- Injects a content script on YouTube pages.
- Uses `MutationObserver` to continuously monitor the DOM.
- Removes Shorts and ads even when YouTube dynamically updates the page.
- Prevents access to sandboxed or `about:blank` pages to avoid console errors.

---

## 🛠 Customization

Want to also hide comments, live chat, or anything else?
Open `content.js` and add your own selectors!

Need a toggle on/off button? Let me know — happy to help you add a UI popup.

---

## 📄 License

MIT License — free to use, modify, and share.
