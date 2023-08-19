var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type:"fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
(function init(){
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },

    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  document.addEventListener("wheel",function(dets){
    if(dets.offsetY > 500){
      if(dets.offsetY > 0){
        gsap.to(".nav",{
          top:"-100px",
          duration:0.3,
          ease:Power0.easeNone
        })
      }
    }
    if(dets.offsetY < 0){
      gsap.to(".nav",{
        top:"0px",
        duration:0.3,
        ease:Power0.easeNone,
      })
    }
  })

})()
// init()

gsap.to(".nav svg",{
  transform: `translateY(-5%) scale(0.22)`,
  ease:Power4.easeNone,
  scrollTrigger:{
    trigger:".nav",
    scroller:".main",
    // markers:true,
    start:"top 0%",
    end:"top -50%",
    scrub:true
  }

})

let tl = gsap.timeline();
tl.from(".page1 svg ", {
  y: 20,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
});
tl.from(".page1 img", {
  scale: 0.5,
  borderRadius: "10px",
  delay: -0.1,
  duration: 0.7,
  ease: Power1.easeOut,
}).from(".nav", {
  y: -50,
  opacity: 0,
  delay: -0.4,
  duration: 0.5,
});

var h2Data = document.querySelectorAll(".page2 h2, .page3 h2, .page6-head h2, .page8 h1, .page10 h2");
h2Data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});
gsap.to(".page2 h2 span", {
  color: "#E3E3C4",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page2 h2 span",
    scroller: ".main",
    start: "top 60%",
    end: "top -30%",
    scrub: true,
  },
});
gsap.to(".page2 .svg2,.page2 .svg3", {
  left: "-100vw",
  scrollTrigger: {
    trigger: ".page2 .svg2",
    scroller: ".main",
    scrub: 2,
  },
});

gsap.to(".page3 .left p, a", {
  transform:`translateY(-20%)`,
  duration:.3,
  stagger:0.5,
  delay:1,
  scrollTrigger: {
    trigger: ".page3 .left p, a",
    scroller: ".main",
    start: "top 60%",
    end: "top -40%",
    scrub: true,
  },
});
gsap.to(".page3 img", {
  transform:`translateY(-20%)`,
  duration:.3,
  stagger:0.5,
  delay:1,
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    start: "top 60%",
    end: "top -40%",
    scrub: true,
  },
});
gsap.to(".page3 h2 span", {
  color: "#434B34",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page3 h2 span",
    scroller: ".main",
    start: "top 60%",
    end: "top -10%",
    scrub: true,
  },
});
gsap.to(".page6-head h2 span", {
  color: "#E3E3C4",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page6-head h2 span",
    scroller: ".main",
    // markers: true,
    start: "top 60%",
    end: "top -10%",
    scrub: true,
  },
});
gsap.to(".page6 #svgtop1,.page6 #svgtop2", {
  left: "-100vw",
  scrollTrigger: {
    trigger: ".page6 #svgtop1",
    scroller: ".main",
    scrub: 2,
  },
});

gsap.to(".page6 .page6-head", {
  transform:`translateY(-20%)`,
  duration:.3,
  stagger:0.2,
  scrollTrigger: {
    trigger: ".page6",
    scroller: ".main",
    start: "top 40%",
    end: "top -20%",
    scrub: true,
  },
});
gsap.to(".page7 .rlv", {
  transform:`translateY(-20%)`,
  duration:.2,
  stagger:0.2,
  scrollTrigger: {
    trigger: ".page7",
    scroller: ".main",
    start: "top 40%",
    end: "top -20%",
    scrub: true,
  },
});
gsap.to(".page8 h1 span", {
  color: "#434B34",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page8 h1 span",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top -30%",
    scrub: true,
  },
});

let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".center",
    scroller:".main",
    // markers:true,
    start:"top 60%",
    end:"top 40%",
    scrub:3
  }
})

tl2.to(".center .imgleft",{
  transform:`translateX(-50%)`,
  duration:2,
},"Anime")
tl2.from(".center",{
  transform:`translateY(-10%)`,
  duration:2,
  opacity:0
},"Anime")
tl2.to(".center .imgright",{
  transform:`translateX(50%)`,
  duration:2,
},"Anime")


gsap.to(".page10 h2 span", {
  color: "#E3E3C4",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page10 h2 span",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 10%",
    scrub: true,
  },
});

gsap.to("#svgbtm1,#svgbtm2", {
  left: "-100vw",
  scrollTrigger: {
    trigger: "#svgbtm1",
    scroller: ".main",
    scrub: 2,
  },
});
gsap.to(".page9 svg", {
  left: "-100vw",
  scrollTrigger: {
    trigger: ".page9 svg",
    scroller: ".main",
    scrub: 2,
  },
});

gsap.to(".page8 .center",{
  transform:`translateX(10%)`,
  duration:6,
  scrollTrigger:{
    trigger:".page8",
    scroller:".main",
    // markers:true,
    start:"top 80%",
    end:"top 75%",
    scrub:true
  }
})

gsap.to(".page10 img", {
  transform:`translateY(-5%)`,
  duration:.3,
  stagger:0.3,
  delay:1,
  scrollTrigger: {
    trigger: ".page10",
    scroller: ".main",
    start: "top 60%",
    end: "top -10%",
    scrub: true,
  },
});
gsap.to(".page11 h2, p", {
  transform:`translateY(-5%)`,
  duration:.3,
  stagger:0.3,
  delay:1,
  scrollTrigger: {
    trigger: ".page11",
    scroller: ".main",
    start: "top 60%",
    end: "top -20%",
    scrub: true,
  },
});
gsap.to(".page11 img", {
  transform:`translateY(-5%)`,
  duration:.3,
  stagger:0.2,
  scrollTrigger: {
    trigger: ".page11",
    scroller: ".main",
    start: "top 40%",
    end: "top -20%",
    scrub: true,
  },
});
gsap.to(".page12 .minor", {
  transform:`translateY(-15%)`,
  duration:.3,
  stagger:0.2,
  delay:1,
  scrollTrigger: {
    trigger: ".page12",
    scroller: ".main",
    start: "top 40%",
    end: "top -10%",
    scrub: true,
  },
});
