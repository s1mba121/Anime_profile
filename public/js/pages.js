const button_1 = document.getElementById("button_1");
const button_2 = document.getElementById("button_2");
const anime = document.getElementById("main");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

button_1.addEventListener('click', async ()=> {
    anime.classList.add("clicked");
})