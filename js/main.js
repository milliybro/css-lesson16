$(".owl-carousel").owlCarousel({
   loop: true,
   margin: 50,
   nav: true,
   dots: true,
   // center: true,
   slideBy: 2,
   responsive: {
     0: {
       items: 1,
     },
     500: {
       items: 1,
     },
     900: {
       items: 3,
     },
     1200: {
       items: 2,
     },
   },
 });
//  navbar-shrink
 window.addEventListener("scroll", function () {
   shrink();
 });
 
 let navbar = document.getElementById("navbar");
 
 function shrink() {
   if (scrollY > 100) {
     navbar.classList.add("navbar-shrink");
   } else {
       navbar.classList.remove("navbar-shrink");
    }
 }
 

 const loading = document.getElementById("loader");


setTimeout(() => {
  loading.classList.add("loading-none");
}, 2000);


 
function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);


window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}


let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    console.log("light");
    this.firstElementChild.src = "../images/light.svg";
  } else {
    console.log("dark");
    this.firstElementChild.src = "../images/night.svg";
  }
  document.body.classList.toggle("light");
});