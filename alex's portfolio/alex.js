const mode = document.getElementById("mode");
const body = document.body;

mode.addEventListener('click', () => toggle())

function toggle(){
    document.body.classList.toggle('light-mode');
    if (body.classList.contains("light-mode")) {
        mode.textContent = "Light";
        body.style.color = '#182121'
        body.style.backgroundColor = '#e8f0f1ff'
    } else {
        mode.textContent = "Night";
        body.style.color = '#e8f0f1ff'
        body.style.backgroundColor = '#182121'
    }
};
