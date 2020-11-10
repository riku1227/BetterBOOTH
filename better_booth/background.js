chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
     switch (msg.message) {
          case "open_settings":
           chrome.tabs.create({ url: "options/options.html" });
          break;
          case "read_storage":
               chrome.storage.local.get(msg.key, (result) => {
                    const value = result[msg.key];
                    console.log(msg);
                    callback(value);
                })
          break;
          case "write_storage":
               chrome.storage.local.set({
                    [msg.key]: msg.value
               })
          break;
     }
     return true;
});