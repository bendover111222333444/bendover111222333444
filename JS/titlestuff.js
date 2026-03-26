let intervalId;

window.addEventListener("keydown", function (e) {
  if (e.key === "q" || e.key === "Q") {
    document.title = "Inbox (4)";
    window.location.href = "https://outlook.office.com/mail/";
    
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = 'images/gmail-logo.png?';
    document.getElementsByTagName('head')[0].appendChild(link);

    clearInterval(intervalId); 
  }
});

const siteNames = [
    "B", 
    "Be", 
    "Ben", 
    "Bend", 
    "Bendo", 
    "Bendov", 
    "Bendove", 
    "Bendover", 
    "Bendover1", 
    "Bendover11", 
    "Bendover111", 
    "Bendover1112", 
    "Bendover11122",
    "Bendover111222", 
    "Bendover1112223",
    "Bendover11122233",
    "Bendover111222333",
    "Bendover1112223334",
    "Bendover11122233344",
    "Bendover111222333444",
    "Bendover111222333444.",
    "Bendover111222333444.o",
    "Bendover111222333444.on",
    "Bendover111222333444.onr",
    "Bendover111222333444.onre",
    "Bendover111222333444.onren",
    "Bendover111222333444.onrend",
    "Bendover111222333444.onrende",
    "Bendover111222333444.onrender",
    "Bendover111222333444.onrender.",
    "Bendover111222333444.onrender.c",
    "Bendover111222333444.onrender.co",
    "Bendover111222333444.onrender.com",
];

let currentIndex = 0;
let goingForward = true;

function changeSiteName() {
  document.title = siteNames[currentIndex];
  
  if (goingForward) {
    currentIndex++;
    if (currentIndex >= siteNames.length - 1) {
      goingForward = false;
    }
  } else {
    currentIndex--;
    if (currentIndex <= 0) {
      goingForward = true;
    }
  }
}

intervalId = setInterval(changeSiteName, 1000);
