var buttonEnabled = getCookie("blankerEnabled")

function openPopupCloaked(url, cloakURL) {
    const popup = window.open(cloakURL, "_blank");
    if (popup) {
        const iframe = popup.document.createElement("iframe");
        iframe.src = url;
        iframe.style = "position:fixed;top:0;left:0;width:100vw;height:100vh;border:none;";
        popup.document.title = "New Tab";
        popup.document.body.style.margin = "0";
        popup.document.body.appendChild(iframe);
        
        setTimeout(() => window.close(), 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("blankerBtn");

    const falseColor = "#780000";
    const trueColor = "#117800";

    if (buttonEnabled) {
        button.style.color = trueColor;
        button.textContent = "Blanker On";
    } else {
        button.style.color = falseColor;
        button.textContent = "Blanker Off";
    }

    button.addEventListener("click", function() {
        if (buttonEnabled) {
            buttonEnabled = false;
            button.style.color = falseColor;
            button.textContent = "Blanker Off";
            setCookie("blankerEnabled", false)
            openPopupCloaked("https://bendover111222333444.onrender.com", "https://bendover111222333444.onrender.com");
        } else if {
            buttonEnabled = true;
            button.style.color = trueColor;
            button.textContent = "Blanker On";
            setCookie("blankerEnabled", true)
            openPopupCloaked("https://bendover111222333444.onrender.com", "about:blank");
        }
    });

    document.querySelectorAll(".game-grid a").forEach(function(link) {
        link.addEventListener("click", function(e) {
            if (buttonEnabled) {
                e.preventDefault();
                openPopupCloaked(this.href, "about:blank");
            }
        });
    });
});
