const containerUser = document.querySelector(".container-user");
const profileDropdown = document.querySelector(".profile-dropdown-container");
const containerDropdownUser = document.querySelector(
    ".container-dropdown-user"
);

/* ABRE E FECHA O DROPDOWN DAS INFORMAÇÕES DO USUARIO */

containerUser.addEventListener("click", () => {
    profileDropdown.style.display == "block"
        ? (profileDropdown.style.display = "none")
        : (profileDropdown.style.display = "block");
});

/* FECHA O DROPDOWN QUANDO O MOUSE SAI DO DROPDONW */
containerDropdownUser.addEventListener("mouseleave", () => {
    profileDropdown.style.display = "none";
});
