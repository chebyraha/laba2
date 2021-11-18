let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "styles.css") {
        theme.href = "dark-mode.css";
    } else {
        theme.href = "styles.css";
    }       
}

