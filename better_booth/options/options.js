const getByID = function(id) {
    return document.getElementById(id);
}
class BBOptions {
    constructor (inputId, storageKey) {
        this.key = storageKey;
        const inputNode = getByID(inputId);
        chrome.runtime.sendMessage({message: "read_storage", key: storageKey}, function (value) {
            this.value = value;
            if(value === undefined || value === null) {
                inputNode.checked = false;
            } else {
                inputNode.checked = value;
            }
        })

        inputNode.addEventListener("change", (event) => {
            this.value = event.target.checked;
            chrome.runtime.sendMessage({
                message: "write_storage",
                key: storageKey,
                value: event.target.checked
            })
        });
    }
}

const isColumnLayoutLibrary = new BBOptions("is_column_layout_library", "is_column_layout_library");