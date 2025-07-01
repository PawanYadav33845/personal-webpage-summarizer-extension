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
2. Open Google Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode** (toggle in top right).
4. Click **Load unpacked**.
5. Select the folder containing `manifest.json`.

## 🛠️ Usage

1. Click on the **Webpage Summarizer** icon in the Chrome toolbar.
2. It will fetch and display a summary of the current page.
3. You can copy or save the summary for later use.

## 🛡️ Permissions

This extension may request:
- `activeTab` - to access the current webpage content
- `storage` - to save settings or cached summaries

## 📚 Tech Stack

- JavaScript / HTML / CSS
- Chrome Extensions API
- Gemini API
