function toggleDarkMode() {
    const toggleButtons = document.getElementById("sun");
    const toggleButtons2 = document.getElementById("moon");
    
    if (toggleButtons && toggleButtons2) {
        toggleButtons.style.animation = "sunToBottom 0.5s forwards";
        toggleButtons2.style.animation = "moonToTop 0.5s forwards";

        setTimeout(() => {
            toggleButtons.style.display = "none"; 
            toggleButtons2.style.display = "block";
        }, 500);
        document.body.style.background = "linear-gradient(45deg, #526a6d, #484e6d)";
    }
}

function toggleLightMode() {
    const toggleButtons = document.getElementById("sun");
    const toggleButtons2 = document.getElementById("moon");
    
    if (toggleButtons && toggleButtons2) {
        toggleButtons2.style.animation = "sunToBottom 0.5s forwards";
        toggleButtons.style.animation = "moonToTop 0.5s forwards";
        setTimeout(() => {
            toggleButtons2.style.display = "none";
            toggleButtons.style.display = "block";
        }, 500);
        document.body.style.background = "linear-gradient(45deg, #59a9b3, #5970f2)";
    }
}