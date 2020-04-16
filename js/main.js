$(document).ready(function(){
  const info = new TimelineMax();

  const infoController = new ScrollMagic.Controller();

  info
  .from('.content-box', 1, {opacity: 0, y:100})
  

  let infoScene = new ScrollMagic.Scene({
    triggerElement: '.text-content',
    triggerHook: 0.9,
    reverse:true
  })
  .setTween(info)
  //////.addIndicators()()
  .addTo(infoController);

  
    const back = new TimelineMax();
  
    const backController = new ScrollMagic.Controller();
  
    back
    .from('#back-text', 0.5, {opacity: 0, x: -1200})
    
  
    let backScene = new ScrollMagic.Scene({
      triggerElement: '#back-text',
      triggerHook: 0.9,
      reverse:true
    })
    .setTween(back)
    //////.addIndicators()()
    .addTo(backController);

    const video = new TimelineMax();
  
    const videoController = new ScrollMagic.Controller();
  
    video
    .from('#video', 1, {opacity: 0, y: 100})
    
  
    let videoScene = new ScrollMagic.Scene({
      triggerElement: '#back-text',
      triggerHook: 1,
      reverse:true
    })
    .setTween(video)
    //////.addIndicators()()
    .addTo(videoController);


    const firstContent = new TimelineMax();
  
    const firstContentController = new ScrollMagic.Controller();
  
    firstContent
    .from('#first-content', 1, {opacity: 0, x: -100})
  
    let firstContentScene = new ScrollMagic.Scene({
      triggerElement: '#first-content',
      triggerHook: 0.8,
      reverse:true
    })
    .setTween(firstContent)
    ////.addIndicators()()
    .addTo(firstContentController);

    const tutankhamun = new TimelineMax();
    const square = new TimelineMax();
    const tutankhamunController = new ScrollMagic.Controller();
    const squareController = new ScrollMagic.Controller();
    
    tutankhamun
    .from('.tutankhamun', 1, {opacity: 0, x: 100})
    square
    .from('#square', 1, {opacity:0, x:100, rotation:0})
  
    let tutankhamunScene = new ScrollMagic.Scene({
      triggerElement: '#first-content',
      triggerHook: 0.8,
      reverse:true,
    })
    .setTween(tutankhamun)
    //.addIndicators()({name:"tutankhamun"})
    .addTo(tutankhamunController);
  
    let squareScene = new ScrollMagic.Scene({
      triggerElement: '#first-content',
      triggerHook: 0.8,
      reverse:true,
    })
    .setTween(square)
    //.addIndicators()({name:"square"})
    .addTo(squareController);
    

    const secondContent = new TimelineMax();
    const secondContentController = new ScrollMagic.Controller();

    secondContent
    .from('#second-content', 1, {opacity:0, x:100})

    let secondContentScene = new ScrollMagic.Scene({
      triggerElement: '#second-content',
      triggerHook: 0.8,
      reverse: true
    })
    .setTween(secondContent)
    ////.addIndicators()()
    .addTo(secondContentController)

    const cats = new TimelineMax();
    const circle = new TimelineMax();
    const catsController = new ScrollMagic.Controller();
    const circleController = new ScrollMagic.Controller();
  
    cats
    .from('.cats', 1, {opacity: 0, x: -100})
    circle
    .from('#circle', 1, {opacity:0, x:-100, width:10})
  
    let catsScene = new ScrollMagic.Scene({
      triggerElement: '#second-content',
      triggerHook: 0.8,
      reverse:true
    })
    .setTween(cats)
    ////.addIndicators()()
    .addTo(catsController);

    let circleScene = new ScrollMagic.Scene({
      triggerElement: "#second-content",
      triggerHook: 0.8,
      reverse: true
    })
    .setTween(circle)
    //////.addIndicators()()
    .addTo(circleController);


    // const slider = new TimelineMax();
    // const sliderController = new ScrollMagic.Controller();

    // slider
    // .from('#slider-container', 1, {opacity: 0, y:100})

    // let sliderScene = new ScrollMagic.Scene({
    //   triggerElement: '#slider-container',
    //   triggerHook: 1,
    //   reverse: false

    // })
    // .setTween(slider)
    // //////.addIndicators()()
    // .addTo(sliderController)


})




$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('#wanderer').css("transform", 'translate(0px, -' +wScroll/20+ '%)'); //bottom image
  $('#pyramid').css("transform", 'translate(0px, -' +wScroll/30+ '%)');
  $('#sky').css("transform", 'translate(0px, -' +wScroll/70+ '%)');





  const myCarousel = new Carousel({
    container: document.querySelector('.slider'),
    items: document.querySelectorAll('.slider__item'),
    displayControls: true,
    controlsContainer: document.querySelector('.slider__controls'),
    textControls: ["⟵", "⟶ "],
    autoplay: true,
    autoplayTime: 10000
  });
});

