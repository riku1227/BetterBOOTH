const DOM = {
    getByClass: function(className) {
        return document.getElementsByClassName(className);
    },

    getById: function(id) {
        return document.getElementById(id);
    },

    createDiv: function() {
        return document.createElement("div");
    },

    createSpan: function() {
        return document.createElement("span");
    },

    createA: function() {
        return document.createElement("a");
    }
}

const BOOTHDOM = {
    createPullDownMenuGroup: function () {
        const groupDiv = DOM.createDiv();
        groupDiv.classList.add("account-menu-group");
        return groupDiv;
    },

    createPullDownMenuGroupHeader: function(headerText) {
        const headerDiv = DOM.createDiv();
        headerDiv.classList.add("account-menu-group-heading");

        const headerSpan =  DOM.createSpan();
        headerSpan.classList.add("shop-name");
        headerSpan.textContent = headerText;

        headerDiv.appendChild(headerSpan);
        return headerDiv;
    },

    createPullDownMenu: function(text) {
        const menuA = DOM.createA();
        menuA.classList.add("text-ui");
        menuA.textContent = text;
        menuA.style.color = "#171d26";

        return menuA;
    }
}

const BetterBOOTH = {
    openSettings: function() {
        chrome.runtime.sendMessage({message: "open_settings"});
    }
}

const displaySettings = function() {
    if(DOM.getById("better-booth-settings-bg") == undefined) {
        const background = DOM.createDiv();
        background.classList.add("better-booth-settings-bg");
        background.id = "better-booth-settings-bg";

        document.body.appendChild(background);
    }
}

const initialDOM = function() {
    const pullDownMenu = DOM.getByClass("pulldown-menu")[0];

    const betterBOOTHMenuGroup = BOOTHDOM.createPullDownMenuGroup();
    betterBOOTHMenuGroup.appendChild( BOOTHDOM.createPullDownMenuGroupHeader("Better BOOTH") );

    const betterBOOTHMenuSettings = BOOTHDOM.createPullDownMenu("設定 / Settings");
    betterBOOTHMenuGroup.appendChild(betterBOOTHMenuSettings);

    betterBOOTHMenuSettings.addEventListener("click", () => {
        BetterBOOTH.openSettings();
    });

    pullDownMenu.appendChild(betterBOOTHMenuGroup);
}

window.addEventListener("load", () => {
    initialDOM();
}, false);