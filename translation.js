var translations = translations_en;

function translateElements() {
    var elements = document.querySelectorAll("[data-translate-key]");
    
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var translateKey = element.getAttribute("data-translate-key");
        
        if (translations.hasOwnProperty(translateKey)) {
            element.textContent = translations[translateKey];
        }
    }
}

function changeLanguage() {
    var languageSwitcher = document.getElementById("language-switcher");
    var button = languageSwitcher.querySelector("button");
    var currentLanguage = button.textContent;

    if (currentLanguage === "Português") {
        // Change text to English
        button.textContent = "Português";
        translations = translations_en;
    } else {
        // Change text to Portuguese
        button.textContent = "English";
        translations = translations_pt;
    }

    translateElements();
}

document.addEventListener("DOMContentLoaded", function() {
    // Set default language to English
    changeLanguage();
});