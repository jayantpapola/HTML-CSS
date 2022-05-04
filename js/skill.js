//Observer For SkillBox
const perspective = document.querySelector(".persp")

var observer = new IntersectionObserver(x =>{
    
    x.forEach(y =>{
        y.target.classList.toggle("zoom_in",y.isIntersecting)
        if(y.isIntersecting)observer.unobserve(y.target)
    })
},{
    threshold:.1,
})
    observer.observe(perspective)