const text = "Uillian Freitas";
const typingElement = document.getElementById("typing");
let index = 0;

function type() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
    }
    type();

    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
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