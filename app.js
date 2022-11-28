// Scroll Bar
let bar = document.querySelector(".bar");

document.onscroll = () => {

    let y = Math.floor((window.pageYOffset / document.documentElement.scrollHeight) * 100);
    bar.style.height = y * 1.08 + "%"; // 1.08 is the margin error in calculation

    let remainder = Math.floor(y / 10) + 1;

    let activeLink = document.getElementById("link-" + remainder);

    activateLink(activeLink);

}

let previous = document.getElementById("link-1");

function activateLink(link) {
    let current = link;
    previous.classList.remove("active");
    current.classList.add("active");
    previous = current;
}

//
let unfinishProject = document.getElementById('unfinishProject')

unfinishProject.addEventListener('click', () => {
    alert('English: App deployed on heroku available until 28/11, then I will switch to another platform \n Español: App desplegada en heroku disponible hasta el 28/11, luego cambiare a otra plataforma')
})