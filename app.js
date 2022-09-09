const FAQs = document.querySelectorAll(".FAQ");

FAQs.forEach((FAQ) => {
FAQ.addEventListener("click", () => {
    FAQ.classList.toggle("active");

})
});
