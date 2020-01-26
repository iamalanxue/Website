//using the document selector

// var hamburger = document.getElementsByClassName("hamburger");

// hamburger[0].onclick = function(){
//       if (hamburger[0].classList.contains("is-active"))
//       {
//          hamburger[0].classList.remove("is-active");
//       }
//       else{
//           hamburger[0].classList.add("is-active");
//       }
//   }

// Using Query Selector 
var burger = document.querySelector(".hamburger");

burger.onclick = function(){
    if (burger.classList.contains("is-active"))
    {
        burger.classList.remove("is-active");
    }
    else{
        burger.classList.add("is-active");
    }
}

// var tl = new TimelineMax();

// tl.from(".ring1", 4, {
//     delay:0.4,
//     opacity: 0,
//     y:40,
// }).from(".ring2", 4, {
//     delay: 0.9,
//     opacity: 0,
//     y: 40,
// }, "-=5").to(".ring1",4, {
//     delay: 0.4,
//     opacity: 1,
//     x: 20,
// }).to(".ring2", 4, {
//     delay:0.4,
//     opacity: 1,
//     x: 20,
// }, "-=5")
// var tl = newTimelineMax();

// tl.fromto('.contrast', 2, {height: '0vh', opacity:1}, {height:'100vh', opacity:0.3});

TweenMax.staggerfrom(".media ul li", 3, {
    opacity: 0,
    y: 20,
}, 0.1)