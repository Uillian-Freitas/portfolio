const text = "Uillian Freitas";
const typingElement = document.getElementById("typing");
let index = 0;

function type() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    } else{
        activateGlitch();
    }
    }

    function activateGlitch(){
        const el = document.getElementById("typing");

        el.classList.add("glitch");

        el.setAttribute("data-text", el.textContent);

        setTimeout(() => {
            el.classList.remove("glitch")
        },150);
    }
    type();


    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});
    
    const letters = "アカサタナハマヤラワ0123456789";

    const fontSize = 18;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
        
    }

        function draw() {
            ctx.fillStyle = "rgba(2, 6, 23, 0.3)";
            ctx.fillRect(0,0, canvas.width, canvas.height);

            ctx.font= fontSize +"px monospace";
            
            for(let i = 0; i < drops.length; i++){

        const text = letters.charAt(Math.floor(Math.random() * letters.length));

        if(drops[i] * fontSize < canvas.height && drops[i] > 1){
            ctx.fillStyle = "#22c55e";
        } else {
            ctx.fillStyle = "#a7f3d0";
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975){
            drops[i] = 0;
                }
                drops[i]++;
            }
        }
    setInterval(draw, 33);

    const terminalLines = [
        {id: "whoami", text: "Uillian Freitas"},
        {id: "role", text: "Desenvolvedor Full Stack Java" },
        { id:"stack1", text:"HTML / CSS / JavaScript / React" },
        { id:"stack2", text:"Java / Spring Boot" },
        { id:"stack3", text:"Git / GitHub / Bootstrap / Sass" }
    ];

    function typeLine(element, text, index = 0) {
        if(index < text.length){
            element.textContent += text.charAt(index);

            setTimeout(() => {
                typeLine(element, text, index + 1);
            }, 40)
        }
    }
    
    function startTerminal() {
        let delay = 0;

        terminalLines.forEach(line => {

            const element = document.getElementById(line.id);

            setTimeout(() => {
                typeLine(element, line.text);
            }, delay);
            delay += 1200
        });
    }
    const aboutSection = document.getElementById("about");
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                startTerminal();
                observer.disconnect();
            }
        });
    });
    observer.observe(aboutSection);

    const reveals = document.querySelectorAll(".reveal");

    const observerReveal = new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

    if(entry.isIntersecting){

        setTimeout(() => {
            entry.target.classList.add("active");
        }, index * 300);

    }

    });
    });
    reveals.forEach(el => observerReveal.observe(el));

const projectText = "> PROJECT DATABASE...";
const projectElement = document.getElementById("projects-typing");

let projectIndex = 0;

function typeProjects(){

    if(projectIndex < projectText.length){

        projectElement.textContent += projectText.charAt(projectIndex);
        projectIndex++;

        setTimeout(typeProjects, 70);

    }

}

typeProjects();   
    
const contactText = "> canal de contato";
const contactElement = document.getElementById("contact-typing");

let contactIndex = 0;

function typeContact(){

    if(contactIndex < contactText.length){

        contactElement.textContent += contactText.charAt(contactIndex);
        contactIndex++;

        setTimeout(typeContact,70);
    }
}
typeContact();

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu ul");

toggle.addEventListener("click", () => {

menu.classList.toggle("active");
toggle.classList.toggle("active");

});

document.querySelectorAll(".menu a").forEach(link=>{
link.addEventListener("click", ()=>{
menu.classList.remove("active");
toggle.classList.remove("active");
});
});