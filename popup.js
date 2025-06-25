(async () => {
  // find current tab
  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true }
    let [tab] = await chrome.tabs.query(queryOptions)
    return tab
  }
  let tab = await getCurrentTab()
  if(!tab) return
  // get and display sub
  let resp = await chrome.tabs.sendMessage(tab.id, "show_subtitle")
  document.body.innerHTML = resp.replace("\n", "<br/>")
})();