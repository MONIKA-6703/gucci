gsap.to("#page1 svg",{
    scale:0.12,
    marginTop:"-125px",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top -5%",
        end:"top -10%",
        scrub:3,
    }


})
gsap.to("#page1 #img-div",{
    marginTop:"300px",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top -5%",
        end:"top -10%",





    }

})
gsap.to("#page1 #nav h4",{
    visibility:"visible",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top -5%",
        end:"top -10%",
        scrub:true
    }

})