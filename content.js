function getArticleText(){
    const article = document.querySelector("article");
    if(article) return article.innerText;

    const paragraphs= Array.from(document.querySelectorAll("p"));
    return paragraphs.maps((p) => p.innerText).join("\n");
}

chrome.runtime.onMessage.addListener((req, _sender, sendResponse)=>{
    if ((req.type = "Get_Article_Text")){
        const text = getArticleText();
        sendResponse({ text})
    }
});