const title=document.querySelector("h1");
const typewriter=new Typewriter(title, {
    loop:true,
    delay:100
})

typewriter
.typeString("<span>SUPER DECOR:</span><br /> <span class='spanTitle'>EXPERT EN DECORATION EVENEMENTIELLE 🤌 </span> ")
.pauseFor(2000)
.deleteAll()
.typeString(" " )
.pauseFor(2000)
.deleteAll()
.start()