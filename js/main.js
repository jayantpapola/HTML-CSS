var skill_box = document.getElementsByClassName('skill_cube')

    skill_box[0].addEventListener("click", ()=>{
        document.getElementsByClassName("Tap")[0].style.display = "none"
        document.getElementsByClassName("top")[0].style.animationName ="box_open"
         document.getElementsByClassName("photoshop")[0].style.animationName ="photoshop"
         document.getElementsByClassName("illustrator")[0].style.animationName ="illustrator"
         document.getElementsByClassName("corel")[0].style.animationName ="corel"
         document.getElementsByClassName("XD")[0].style.animationName ="XD"
         document.getElementsByClassName("html_icon")[0].style.animationName ="html"
         document.getElementsByClassName("css_icon")[0].style.animationName ="css"
         document.getElementsByClassName("js_icon")[0].style.animationName ="js"
         document.getElementsByClassName("jquery_icon")[0].style.animationName ="jquery"
         document.getElementsByClassName("bootstrap_icon")[0].style.animationName ="bootstrap"
         document.getElementsByClassName("Wordpress_icon")[0].style.animationName ="Wordpress"
         document.getElementsByClassName("Mysql_icon")[0].style.animationName ="Mysql_icon"
    })




//Intersection Observer For About Us
var whiteBoard = document.getElementsByClassName('whiteboard')[0]

var observer = new IntersectionObserver(x =>{
    
    x.forEach(y =>{
        y.target.classList.toggle("below_shadow",y.isIntersecting)

        // entry.target.classList.toggle("show",entry.isIntersecting)
        // if(entry.isIntersecting)observer.unobserve(entry.target)
    })
},{
    threshold:1,
})
    observer.observe(whiteBoard)

//Intersection Observer For About Us SVG
var About_svg = document.querySelector('#About_svg')

var observer = new IntersectionObserver(x =>{
    
    x.forEach(y =>{
        y.target.classList.toggle("newAboutSvg",y.isIntersecting)

        // entry.target.classList.toggle("show",entry.isIntersecting)
        // if(entry.isIntersecting)observer.unobserve(entry.target)
    })
},{
    threshold:.0001,
})
    observer.observe(About_svg)


//Cursor
const div1 = document.querySelector(".box112")
const div2 = document.querySelector(".box113")
const div3 = document.querySelector(".box114")
const div4 = document.querySelector(".box115")

    window.addEventListener("mousemove", (e) =>{
        let x = e.pageX
        console.log(x)
        let y = e.pageY
        console.log(y)
    div1.style.transform = `translate(${x-20}px, ${y-20}px)`
    div2.style.transform = `translate(${x-15}px, ${y-15}px)`
    div3.style.transform = `translate(${x-10}px, ${y-10}px)`
    div4.style.transform = `translate(${x-5}px, ${y-5}px)`
    })



    var cursor_start = document.getElementById("cloneC4")
    var cursor1 = document.getElementById("cloneC1")
    var cursor2 = document.getElementById("cloneC2")
    var cursor3 = document.getElementById("cloneC3")
    var cursor_main = document.querySelectorAll("#box22")
    cursor_start.addEventListener("click",()=>{
        cursor_start.style.animationName = "cloneC4"
        cursor1.style.animationName = "cloneC1"
        cursor2.style.animationName = "cloneC2"
        cursor3.style.animationName = "cloneC3"
        setTimeout(()=>{
            cursor_main[0].style.display = "block"
            cursor_main[1].style.display = "block"
            cursor_main[2].style.display = "block"
            cursor_main[3].style.display = "block"
        },1000)
        
    })


//For White Board
    const WhiteMagic = document.querySelector('.whiteboard')

    window.addEventListener("mousemove", (e) =>{
        let x = e.pageX
        console.log(x)
        let y = e.pageY
        console.log(y)
      
        WhiteMagic.style.transform = `translate(-${x/52}px, -${y/54}px)`
        
      })





      var P = document.querySelector('#P')

var observer = new IntersectionObserver(x =>{
    
    x.forEach(y =>{
        y.target.classList.toggle("P",y.isIntersecting)

        // entry.target.classList.toggle("show",entry.isIntersecting)
        // if(entry.isIntersecting)observer.unobserve(entry.target)
    })
},{
    threshold:.0001,
})
    observer.observe(P)