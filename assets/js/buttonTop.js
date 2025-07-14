const buttonTop = document.querySelector(".float-button");

document.addEventListener("scroll", () => {
    buttonTop.classList.toggle("active", window.scrollY > 450);
});

buttonTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
