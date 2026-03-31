// =======================
// SIMPLE BACKGROUND
// =======================
function simpleBackgroundAnimation() {
    const colors = ["#020617","#0f172a","#1e293b","#020617"];
    let i = 0;

    setInterval(() => {
        document.body.style.background =
        `linear-gradient(135deg, ${colors[i]}, ${colors[i+1]})`;

        i++;
        if(i >= colors.length-1) i = 0;

    }, 3000);
}

// =======================
// TYPING EFFECT
// =======================
class TypingAnimation {
    constructor(){
        this.el = document.querySelector(".typing-text");
        this.text = "Build Tomorrow's Technology Today";
        this.i = 0;
        this.type();
    }

    type(){
        if(this.i < this.text.length){
            this.el.innerHTML += this.text.charAt(this.i);
            this.i++;
            setTimeout(()=>this.type(),100);
        }
    }
}

// =======================
// MOBILE MENU
// =======================
function setupMenu(){
    const ham = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav-menu");

    ham.addEventListener("click",()=>{
        menu.classList.toggle("active");
    });
}

// =======================
// ACTIVE NAV
// =======================
function activeNav(){
    const links = document.querySelectorAll(".nav-link");
    const page = window.location.pathname.split("/").pop();

    links.forEach(link=>{
        if(link.getAttribute("href") === page){
            link.classList.add("active");
        }
    });
}

// =======================
// INIT
// =======================
document.addEventListener("DOMContentLoaded",()=>{

    simpleBackgroundAnimation();
    new TypingAnimation();
    setupMenu();
    activeNav();

    console.log("✅ Website Loaded");
});