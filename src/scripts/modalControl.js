const buttons = {
  location: document.getElementById("header-btn-location"),
  phone: document.getElementById("header-btn-phone"),
  menu: document.getElementById("header-btn-menu"),
};

const menuIco = {
  closed: document.getElementById("menu-ico_closed"),
  opened: document.getElementById("menu-ico_opened"),
};

buttons.location.addEventListener("click", () => {
  state.modalSmallLocationIsActive = !state.modalSmallLocationIsActive;
  state.modalSmallMenuIsActive = false;
  state.modalIsActive = state.modalSmallLocationIsActive ? true : false;

  render();
});

buttons.menu.addEventListener("click", () => {
  state.modalSmallMenuIsActive = !state.modalSmallMenuIsActive;
  state.modalIsActive = state.modalSmallMenuIsActive ? true : false;
  state.modalSmallLocationIsActive = false;

  render();
});

const modals = {
  background: document.querySelector(".modal__background"),
  menu: document.getElementById("modal-menu"),
  location: document.getElementById("modal-location"),
};

modals.background.addEventListener("click", (e) => {
  if (e.target != modals.background) return;
  state.modalIsActive = false;
  state.modalSmallLocationIsActive = false;
  state.modalSmallMenuIsActive = false;
  render();
});

let state = {
  // need to close modal without background
  modalIsActive: false,
  modalSmallLocationIsActive: false,
  modalSmallMenuIsActive: false,
};

function render() {
  // apply styles according to state{}

  //background
  modals.background.style.opacity = state.modalIsActive ? "1" : "0.0";
  modals.background.style.pointerEvents = state.modalIsActive ? "all" : "none";

  //menu
  modals.menu.style.transform = state.modalSmallMenuIsActive
    ? "translateX(0px)"
    : "translateX(300px)";
  modals.menu.style.opacity = state.modalSmallMenuIsActive ? "1" : "0.0";
  modals.menu.style.pointerEvents = state.modalSmallMenuIsActive
    ? "all"
    : "none";
  buttons.menu.style.backgroundColor = state.modalSmallMenuIsActive
    ? "#fff"
    : "#fff0";
  menuIco.closed.style.display = state.modalSmallMenuIsActive
    ? "none"
    : "block";
  menuIco.opened.style.display = !state.modalSmallMenuIsActive
    ? "none"
    : "block";

  //location
  modals.location.style.transform = state.modalSmallLocationIsActive
    ? "translateX(0px)"
    : "translateX(300px)";
  modals.location.style.opacity = state.modalSmallLocationIsActive
    ? "1"
    : "0.0";
  modals.location.style.pointerEvents = state.modalSmallLocationIsActive
    ? "all"
    : "none";
  buttons.location.style.backgroundColor = state.modalSmallLocationIsActive
    ? "#fff"
    : "#fff0";
}

// setTimeout(() => render(), 1000);
