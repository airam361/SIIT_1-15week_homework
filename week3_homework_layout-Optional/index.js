let prevScrollpos = window.pageYOffset;
let secondNavbar = document.querySelector(".second-navbar");
console.log(document.querySelector(".second-navbar"));


window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    secondNavbar.style.top = "0";
  } else {
    secondNavbar.style.top = "-3.87rem";
  }
  prevScrollpos = currentScrollPos;
};
