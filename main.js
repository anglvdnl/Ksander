const links = document.querySelectorAll("nav ul a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

let bm = document.querySelector(".burger-menu")
bm.addEventListener("click", ()=>{
  bm.classList.toggle("burger-menu-active")
})