
var btn = document.querySelector(".contact_btn");


btn.addEventListener("click",()=>{

    var client_name = document.getElementsByClassName("input_name")[0].value;
    var client = document.querySelector("#who_name");
    var hello = document.querySelector("#hello");
    var How = document.querySelector("#How");
    var Contact_button = document.querySelector("#Xenifer_contact")
    var graphic_button = document.querySelector("#Graphic_btn")
    var input = document.getElementsByClassName("input_name")[0].parentElement

    console.log("client name is "+client_name)
    if(client_name == null || client_name =="")
    {
        client.style.animationName = "your_name"
    }
    else
    {
        input.remove()
        client.style.animationName = ""
        hello.style.animationName = "name"
        Contact_button.style.animationName = "Xenifer_contact"
        graphic_button.style.animationName = "Graphic_btn"
        How.style.animationName = "how"
        hello.innerHTML ="Hi " + client_name + " I'm XENIFER" 

    }



    graphic_button.addEventListener("click" ,()=>
    {
        var link_2 = document.getElementsByClassName("behance_link")[0]
        link_2.style.animationName = "behance_link"
        hello.style.animationName = ""
        How.style.animationName = ""
        Contact_button.style.animationName = ""

    })

    Contact_button.addEventListener("click" ,()=>
    {
        var links = document.getElementsByClassName("social_media_links")[0]
        links.style.animationName = "links"
        hello.style.animationName = ""
        How.style.animationName = ""
        graphic_button.style.animationName = ""

    })
} )

//Intersection Observer for Avatar

    var contact = document.querySelector('#svg')
    
var observer = new IntersectionObserver(x =>{
    
    x.forEach(y =>{
        y.target.classList.toggle("animate",y.isIntersecting)

        // entry.target.classList.toggle("show",entry.isIntersecting)
        // if(y.isIntersecting)observer.unobserve(y.target)
    })
},{
    threshold:.0001,
})
    observer.observe(contact)


    //Intersection Observer for Question Mark

    var mark = document.querySelector('.khuchAur')
    
var observer = new IntersectionObserver(x =>{
    
    x.forEach(y =>{
        y.target.classList.toggle("tomark",y.isIntersecting)

        // entry.target.classList.toggle("show",entry.isIntersecting)
        // if(y.isIntersecting)observer.unobserve(y.target)
    })
},{
    threshold:.1,
})
    observer.observe(mark)