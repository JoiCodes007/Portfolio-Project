const darkModeButton = document.getElementById(("darkMode"))

let x = 0;
function toggleDarkMode(){
    document.body.classList.toggle('dark-mode');
}
darkModeButton.addEventListener('click', ()=>toggleDarkMode())