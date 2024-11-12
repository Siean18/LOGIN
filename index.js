function toggleDarkMode() {
    const toggleButtons = document.getElementsByClassName("card");
    const toggleButtons2 = document.getElementsByClassName("card-moon");
    
    if (toggleButtons.length > 0) {
        toggleButtons[0].style.display = "none";
        toggleButtons2[0].style.display = "block";
        document.body.style.background = "linear-gradient(45deg, #526a6d, #484e6d)";
    }
}

function toggleLightMode() {
    const toggleButtons = document.getElementsByClassName("card");
    const toggleButtons2 = document.getElementsByClassName("card-moon");
    
    if (toggleButtons.length > 0) {
        toggleButtons[0].style.display = "block";
        toggleButtons2[0].style.display = "none";
        document.body.style.background = "linear-gradient(45deg, #59a9b3, #5970f2)";
    }
}