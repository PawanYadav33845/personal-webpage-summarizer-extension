# personal-webpage-summarizer-extension
# 📝 Webpage Summarizer - Chrome Extension

**Webpage Summarizer** is a simple and efficient Chrome extension that extracts and summarizes the key content from any webpage. Save time by getting concise summaries without reading the entire page.

![Icon](icon.png)

## 🚀 Features

- 🔍 One-click summarization of any webpage
- 🧠 AI-powered content understanding
- 🧩 Lightweight and easy-to-use interface
- 📄 Supports most websites with readable content
- 🌐 Works offline (if using local summarizer logic) or with external APIs

## 📦 Installation

### From Source (for Development)

1. Download or clone this repository.
2. Unzip the contents if necessary.
3. Open Google Chrome and go to `chrome://extensions/`
4. Enable **Developer Mode** (toggle in top right).
5. Click **Load unpacked**.
6. Select the extracted folder containing `manifest.json`.

### From Chrome Web Store (Coming Soon)
> Stay tuned! We'll publish the extension soon.

## 🛠️ Usage

1. Click on the **Webpage Summarizer** icon in the Chrome toolbar.
2. It will fetch and display a summary of the current page.
3. You can copy or save the summary for later use.

## 🧾 Files

- `manifest.json`: Extension manifest defining permissions and structure
- `popup.html`: UI layout for the popup
- `popup.js`: Handles summarization logic and user interaction
- `style.css`: Styles the popup interface
- `icon.png`: Extension icon (used in toolbar and listing)
- `content.js` *(if applicable)*: Runs in the context of the webpage to extract content

## 🛡️ Permissions

This extension may request:
- `activeTab` - to access the current webpage content
- `storage` - to save settings or cached summaries

## 📚 Tech Stack

- JavaScript / HTML / CSS
- Chrome Extensions API
- Optional: OpenAI / local NLP model for summarization

## 🧑‍💻 Developer Notes

To customize the summarization logic:
- Modify `popup.js` to implement your preferred algorithm or connect to an external summarization API.

## 📃 License

MIT License - Free to use and modify.

---

Made with ❤️ to save your reading time.
