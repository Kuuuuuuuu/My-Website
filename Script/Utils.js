let Typewriter = 0;
const txt = "Kuuuuuuuu", txts = "Social";

function applyCursorRippleEffect(t) {
    const e = document.createElement("div");
    e.className = "ripple", document.body.appendChild(e), e.style.left = t.clientX + "px", e.style.top = t.clientY + "px", e.style.animation = "ripple-effect .4s  linear", e.onanimationend = () => {
        document.body.removeChild(e)
    }
}

document.onclick = () => applyCursorRippleEffect(event);
try {
    const c = document.body.getElementsByTagName("*");
    for (let t of c) t.onclick = t => t.stopPropagation()
} catch (t) {
    console.log(t)
}

function typeWriter() {
    try {
        Typewriter < txt.length && (document.getElementById("writer").innerHTML += txt.charAt(Typewriter), Typewriter++, setTimeout(typeWriter, 95))
    } catch (t) {
        Typewriter < txts.length && (document.getElementById("hmm").innerHTML += txts.charAt(Typewriter), Typewriter++, setTimeout(typeWriter, 95))
    }
}

function fetchmember() {
    setTimeout(() => {
        fetch("https://discord.com/api/guilds/887683619181707276/widget.json").then(t => {
            t.json().then(t => {
              document.getElementById("count").innerHTML = `Retro Community Online: ${t.presence_count} Members`;
            });
        });
    }, 100);
}

setInterval(() => {
    console.log("ส่องทำควยไร https://github.com/Kuuuuuuuu          #" + Math.random() + 1e3 * Math.random())
}, 10);
