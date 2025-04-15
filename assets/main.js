const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click" , (e) =>{
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click" , (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line")

});
const scrollRevealOption ={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};
scrollRevealOption().reveal(".header_image img",{
    ...scrollRevealOption,
    origin:"right",
});
scrollRevealOption().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:500,
});
scrollRevealOption().reveal(".header_content p",{
    ...scrollRevealOption,
    delay:1000,
});
scrollRevealOption().reveal(".header_content form",{
    ...scrollRevealOption,
    delay:1500,
});
scrollRevealOption().reveal(".header_content .bar",{
    ...scrollRevealOption,
    delay:2000,
});

scrollRevealOption().reveal(".header_image_card",{
    duration:1000,
    interval:500,
    delay:2500,
});

const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Simulate sending
  setTimeout(() => {
    form.reset();
    successMessage.style.display = 'block';
  }, 500);
});