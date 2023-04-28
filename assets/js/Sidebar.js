class Sidebar {
    /* ABRE A SIDEBAR A PARTIR DOS ICONES QUE NÃO POSSUEM DROPDOWN */
    openSidebarByIconsWithoudDropdown(
        icones,
        sidebar,
        headerMain,
        iconMenu,
        IPMTLogo,
        dropdowns,
        arrows,
        sideDropdowns
    ) {
        icones.forEach((icon) => {
            icon.addEventListener("click", () => {
                this.openSidebar(sidebar, headerMain, iconMenu, IPMTLogo);
                this.closeDropdown(dropdowns, arrows);
                this.closeSideDropdown(sideDropdowns);
            });
        });
    }

    /* ABRE APENAS UM DROPDOWN POR VEZ */
    oneDropdownAtTime(dropdownArray, arrowsArray, dropdown, arrow) {
        if (dropdownArray.length == 0) {
            dropdownArray.push(dropdown);
            arrowsArray.push(arrow);
        } else if (dropdown.classList != dropdownArray[0].classList) {
            dropdownArray.push(dropdown);
            arrowsArray.push(arrow);
            dropdownArray[0].style.display = "none";
            arrowsArray[0].classList.remove("fa-rotate-180");
            dropdownArray.shift();
            arrowsArray.shift();
        }
    }

    /* ABRE APENAS UM DROPDOWN LATERAL POR VEZ */
    oneSideDropdownAtTime(dropdownArray, dropdown) {
        if (dropdownArray.length == 0) {
            dropdownArray.push(dropdown);
        } else if (dropdown.classList != dropdownArray[0].classList) {
            dropdownArray.push(dropdown);
            dropdownArray[0].style.display = "none";
            dropdownArray.shift();
        }
    }

    /* REDIMENCIONA O HEADER-MAIN PARA SE ADEQUAR AO MENU ABERTO */
    decreaseMainAndHeader(headerMain) {
        Array.from(headerMain).forEach((elementHTML) => {
            elementHTML.classList.add("main-header-resize");
        });
    }

    /* REDIMENCIONA O HEADER-MAIN PARA SE ADEQUAR AO MENU FECHADO */
    increaseMainAndHeader(headerMain) {
        Array.from(headerMain).forEach((elementHTML) => {
            elementHTML.classList.remove("main-header-resize");
        });
    }

    /* FAZ AS SETAS VOLTAREM AO ESTADO INICIAL (PARA BAIXO) */
    resetArrows(arrows) {
        const openedArrows = (arrow) => arrow.classList.contains("fa-rotate-180");
        const closeArrows = (arrow) => arrow.classList.remove("fa-rotate-180");

        Array.from(arrows).filter(openedArrows).map(closeArrows);
    }

    /* ADICIONA A LOGO DO IMPT AO MENU ABERTO */
    addLogo(iconMenu, IPMTLogo) {
        iconMenu.style.display = "none";
        IPMTLogo.style.display = "block";
    }

    /* ADICIONA O ICONE DE MENU AO MENU FECHADO */
    addIconMenu(iconMenu, IPMTLogo) {
        iconMenu.style.display = "block";
        IPMTLogo.style.display = "none";
    }

    /* ABRE O MENU */
    openSidebar(sidebar, headerMain, iconMenu, IPMTLogo) {
        sidebar.classList.add("resize-side-retract");
        this.decreaseMainAndHeader(headerMain);
        this.addLogo(iconMenu, IPMTLogo);
    }

    /* FECHA O MENU */
    closeSidebar(sidebar, headerMain, iconMenu, IPMTlogo) {
        sidebar.classList.remove("resize-side-retract");
        this.increaseMainAndHeader(headerMain);
        this.addIconMenu(iconMenu, IPMTlogo);
    }

    /* ABRE E FECHA OS DROPDOWNS DO MENU */
    dropdown(
        btnDropdown,
        containerItem,
        arrows,
        sideDropdown,
        sidebar,
        headerMain,
        iconMenu,
        IPMTLogo
    ) {
        const dropdownArray = [];
        const arrowsArray = [];
        btnDropdown.forEach((button, index) => {
            button.addEventListener("click", () => {
                let arrow = arrows[index];
                let dropdown = containerItem[index].nextElementSibling;

                if (dropdown.style.display == "block") {
                    dropdown.style.display = "none";
                    this.closeSideDropdown(sideDropdown);
                } else {
                    dropdown.style.display = "block";
                    this.closeSideDropdown(sideDropdown);
                }

                arrows[index].classList.toggle("fa-rotate-180");

                this.oneDropdownAtTime(dropdownArray, arrowsArray, dropdown, arrow);
                this.openSidebar(sidebar, headerMain, iconMenu, IPMTLogo);
            });
        });
    }

    /* ABRE E FECHA OS DROPDOWNS LATERAIS DO MENU */
    sideDropdown(btnDropdown) {
        const dropdownArray = [];
        btnDropdown.forEach((button) => {
            button.addEventListener("click", () => {
                let dropdown = button.nextElementSibling;
                dropdown.style.display == "block"
                    ? (dropdown.style.display = "none")
                    : (dropdown.style.display = "block");

                this.oneSideDropdownAtTime(dropdownArray, dropdown);
            });
        });
    }

    /* FECHA OS DROPDOWNS LATERAIS ABERTOS QUANDO O MENU FECHA */
    closeSideDropdown(sideDropdowns) {
        const openedDropdowns = (sideDropdown) => sideDropdown.style.display == "block";
        const closeDropdowns = (sideDropdown) => (sideDropdown.style.display = "none");
        const openedDropdown = Array.from(sideDropdowns).filter(openedDropdowns);
        if (openedDropdown.length > 0) {
            openedDropdown.map(closeDropdowns);
        }
    }

    closeSideDropdownByOptions(options, sideDropdowns) {
        options.forEach((option) => {
            option.addEventListener("click", () => {
                this.closeSideDropdown(sideDropdowns);
            });
        });
    }

    /* FECHA OS DROPDOWNS ABERTOS QUANDO O MENU FECHA */
    closeDropdown(dropdowns, arrows) {
        const openedDropdowns = (dropdown) => dropdown.style.display == "block";
        const closeDropdowns = (dropdown) => (dropdown.style.display = "none");
        this.resetArrows(arrows);
        Array.from(dropdowns).filter(openedDropdowns).map(closeDropdowns);
    }
}

export { Sidebar };
