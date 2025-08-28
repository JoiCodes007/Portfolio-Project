const darkModeButton = document.getElementById('DarkMode');
const body = document.body;
let x = 0;

function toggleDarkMode(){
    const darkModeButton = document.getElementById('DarkMode');
    const caption = document.body;
document.body.classList.toggle('dark-mode');

    // if (x ===0){
        // caption.style.color = '#160316ff'
        // x ++;
    // }else{
        // caption.style.color = '#eae1e8ff'
        // x = 0
    // }
    if(darkModeButton.textContent === "Dark Mode"){
        darkModeButton.textContent = "Light Mode"
    }else{
        darkModeButton.textContent = "Dark Mode"
    }
    

}

darkModeButton.addEventListener('click', ()=>toggleDarkMode())