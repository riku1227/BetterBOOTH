const BBUtil = {
    insertCSS: function(filePath) {
        const cssLink = document.createElement("link");
        cssLink.href = filePath;
        cssLink.type = "text/css";
        cssLink.rel = "stylesheet"
        document.getElementsByTagName("head")[0].appendChild(cssLink)
    },
    getStorageValue: function (key, callback) {
        chrome.runtime.sendMessage({
            message: "read_storage",
            key: key
        },(value) => {
            callback(value);
        });
    }
}

window.addEventListener("load", () => {
    BBUtil.getStorageValue("is_column_layout_library", (value) => {
        if(value) {
            const cssPath = chrome.extension.getURL("library/better_booth_library.css");
            BBUtil.insertCSS(cssPath);
        }
    });
}, false);