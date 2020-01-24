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