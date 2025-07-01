chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.get(["geminiApiKey"],(result)=>{
        if (!result.geminiAPIKey){
            chrome.tabs.create({url:"options.html"});
        }
    });
});