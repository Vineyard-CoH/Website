document.addEventListener("DOMContentLoaded", function() {
  // Set default language to English
  changeLanguage();
});

function changeLanguage() {
  var languageSwitcher = document.getElementById("language-switcher");
  var button = languageSwitcher.querySelector("button");
  var currentLanguage = button.textContent;

  var foodLink = document.querySelector("#navigation a[href='food.php']");
  var helpLink = document.querySelector("#navigation a[href='help.php']");
  var whoLink = document.querySelector("#navigation a[href='who.php']");
  var footerText = document.querySelector("footer");

  if (currentLanguage === "Português") {
    // Change text to Portuguese
    button.textContent = "English";
    foodLink.textContent = "Eu Preciso de Comida";
    helpLink.textContent = "Eu Quero Ajudar";
    whoLink.textContent = "Quem Somos";
    footerText.innerHTML = "&copy; 2023 Vineyard Committee on Hunger. Entre em contato com o webmaster em webmaster@vineyardhunger.org";
  } else {
    // Change text to English
    button.textContent = "Português";
    foodLink.textContent = "I Need Food";
    helpLink.textContent = "I Want to Help";
    whoLink.textContent = "Who We Are";
    footerText.innerHTML = "&copy; 2023 Vineyard Committee on Hunger. Contact the webmaster at webmaster@vineyardhunger.org";
  }
}
