chrome.runtime.onMessage.addListener((message, sender, response) => {
  if(message == "show_subtitle") {
    let player = document.getElementById("player-wrapper")
    if(!player) return
    let subElement = player.querySelector(".text-track")
    if(!subElement) return
    response(subElement.innerText)
  }
})