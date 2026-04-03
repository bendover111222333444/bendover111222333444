let intervalId;

window.addEventListener("keydown", function (e) {
  if (e.key === "q" || e.key === "Q") {

    const iframe = document.getElementById("iframe")
    if (iframe) {

        iframe.src = "https://outlook.office.com/mail/"
        document.getElementsByTagName('head')[0].appendChild(link);
      
    } else {
      
        window.location.href = "https://outlook.office.com/mail/";
        document.getElementsByTagName('head')[0].appendChild(link);
    
    }

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
