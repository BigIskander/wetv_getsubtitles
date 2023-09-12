let subUrl = ""

const openSub = (url) => {
  const WeTVregexp = /^(?:https:\/\/wetv\.vip\/*)/
  if(!document.URL.match(WeTVregexp)) return; 
  if(url != "") {
    window.open(url)
  } else {
    alert("WeTV subtitles not found")
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    args: [subUrl],
    target: {tabId: tab.id},
    func: openSub
  });
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const subRegexp = /^(?:https:\/\/cffaws\.wetvinfo\.com\/).*(?:\.vtt(?:\?.*)?)$/
    var url = details.url
    if(url.match(subRegexp)) {
      subUrl = url
    } 
  },
  {urls: ["https://cffaws.wetvinfo.com/*"]}
)