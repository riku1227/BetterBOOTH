chrome.runtime.onConnect.addListener(function(port) {
    if(port.name == "better_booth"){
         port.onMessage.addListener(function(msg) {
              switch (msg.msMessage) {
                   case "open_settings":
                    chrome.tabs.create({ url: "options/options.html" });
                   break;
              }
         });
    }
});