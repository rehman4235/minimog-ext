console.log('Hello world hehe', window)
window.addEventListener("load", function() {
  console.log('Window loaded')
  this.document.querySelector("button").addEventListener("click", function() {
    const notiOpts = {
      type: "basic",
      iconUrl: "logo.png",
      title: "Hey",
      message: "This is the message"
    }

    chrome.notifications.create("1", notiOpts, () => { console.log("Pushed a noti") })
  })
})


