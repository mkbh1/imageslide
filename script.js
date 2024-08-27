// Scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Animation
let tl = gsap.timeline({
 scrollTrigger:{
    trigger:'.main',
    // markers:true,
    scrub:1,
    start:"10% 6%",
    end:"80% 10%",
 }
});
   
tl.to(".welcomesec", {
        // top:'-50%',
        scale:'0.1',
        duration:0.5,
        opacity:0,
    },'a')


    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".cardmain",
            markers:true,
            pin:true,
            scrub:1,
            start:"0% 0%",
            end:"130% 90%",
        }
    })


    tl2
    .to("#card-1",{
        top:"-5%",
        duration:0.8,
    },'mk')

   
    .to("#card-2",{
        top:"10%",
        duration:0.8,
    },'mk')

    .to("#card-2",{
        top:"-0.5%",
        duration:0.8,
    },'sk')


    .to("#card-1",{
        width:"70%",
        height:"80vh",
    },'sk')

    
    .to("#card-3",{
        top:"10%",
        duration:0.8,
        duration:0.8,
    },'sk')

    .to("#card-3",{
        top:"5%",
        duration:0.8,
    },'ck')

    .to("#card-2",{
        duration:0.8,
        width:"75%",
        height:"80vh",
    },'ck')


