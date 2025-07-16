import { Sidebar } from './Sidebar.js';
const side = new Sidebar();

const require = {
  sideDropdownBtn: document.querySelectorAll('.button-drop'),
  headerMain: document.querySelectorAll('[header-main]'),
  icones: document.querySelectorAll('[icon-withoud-dropdown]'),
  dropdowns: document.querySelectorAll('.dropdown-container'),
  containerIcon: document.querySelector('.container-icon-menu'),
  iconMenu: document.querySelector('.logo-container'),
  sideDropdowns: document.querySelectorAll('.sub-menu-drop'),
  btnDropdown: document.querySelectorAll('[dropdown-button]'),
  containerItem: document.querySelectorAll('.container-item'),
  sidebar: document.querySelector('.sidebar-dropdown'),
  arrows: document.querySelectorAll('[arrow]'),
  options: document.querySelectorAll('[options]')
};

require.iconMenu.addEventListener('click', () => {
  side.openSidebar(require.sidebar, require.headerMain);
});

require.sidebar.addEventListener('mouseleave', () => {
  side.closeSidebar(require.sidebar, require.headerMain);

  side.closeDropdown(require.dropdowns, require.arrows);
  side.closeSideDropdown(require.sideDropdowns);
});

addEventListener('load', () => {
  side.dropdown(
    require.btnDropdown,
    require.containerItem,
    require.arrows,
    require.sideDropdowns,
    require.sidebar,
    require.headerMain
  );

  side.openSidebarByIconsWithoudDropdown(
    require.icones,
    require.sidebar,
    require.headerMain,
    require.containerIcon,
    require.dropdowns,
    require.arrows,
    require.sideDropdowns
  );

  side.sideDropdown(require.sideDropdownBtn);
  side.closeSideDropdownByOptions(require.options, require.sideDropdowns);
});
