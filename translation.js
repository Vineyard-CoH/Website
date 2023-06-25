function changeLanguage() {
  var languageSwitcher = document.getElementById("language-switcher");
  var button = languageSwitcher.querySelector("button");
  var currentLanguage = button.textContent;

  var foodLink = document.querySelector("#navigation a[href='food.html']");
  var helpLink = document.querySelector("#navigation a[href='help.html']");
  var whoLink = document.querySelector("#navigation a[href='who.html']");
  var footerText = document.querySelector("footer");

  var translations;

  if (currentLanguage === "Português") {
      // Change text to Portuguese
      button.textContent = "English";
      translations = translations_pt;
  } else {
      // Change text to English
      button.textContent = "Português";
      translations = translations_en;
  }

  foodLink.textContent = translations["I Need Food"];
  helpLink.textContent = translations["I Want to Help"];
  whoLink.textContent = translations["Who We Are"];
}
