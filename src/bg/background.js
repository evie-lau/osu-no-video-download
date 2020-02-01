// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var filter = {urls: ["*://osu.ppy.sh/beatmapsets/*/download"]};

chrome.webRequest.onBeforeRequest.addListener(
  function(details){
    console.log("Beatmap DL URL: " + details.url)
    var noVidLink = details.url + "?noVideo=1";
    console.log("no vid link: " + noVidLink);
    return {redirectUrl: noVidLink};
  },
  filter,
  ["blocking"]
);