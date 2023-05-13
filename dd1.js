function changeLanguage() {
    var select = document.getElementById('language-selector');
    var value = select.options[select.selectedIndex].value;
    document.cookie = "language=" + value + ";path=/";
    window.location.reload();
}

var select = document.getElementById("language-selector");
select.addEventListener("change", changeLanguage);
