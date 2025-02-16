const title=document.querySelector("h1");
const typewriter=new Typewriter(title, {
    loop:true,
    delay:100
})

typewriter
.typeString("<span>SUPER DECOR:</span><br /> <span class='spanTitle'>L’art de l’événement, l’élégance en chaque détail 🤌 </span> ")
.pauseFor(2000)
.deleteAll()
.typeString(" " )
.pauseFor(2000)
.deleteAll()
.start()