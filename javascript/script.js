const title=document.querySelector("h1");
const typewriter=new Typewriter(title, {
    loop:true,
    delay:100
})

typewriter
.typeString("<span>SUPER DECOR,</span><br /> L’art de l’événement, l’élégance en chaque détail")
.pauseFor(2000)
.deleteAll()
.typeString(" " )
.pauseFor(2000)
.deleteAll()
.start()