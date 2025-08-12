const darkModeButton = document.getElementById('DarkMode');
const body = document.body;
let x = 0;

function toggleDarkMode(){
    const darkModeButton = document.getElementById('DarkMode');
    const caption = document.body;


    if (x ===0){
        caption.style.color = '#430641ff'
        x ++;
    }else{
        caption.style.color = '#25001fff'
        x = 0
    }
    if(darkModeButton.textContent === "Dark Mode"){
        darkModeButton.textContent = "Light Mode"
    }else{
        darkModeButton.textContent = "Dark Mode"
    }
    

}

darkModeButton.addEventListener('click', ()=>toggleDarkMode())