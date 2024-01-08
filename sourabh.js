// -----------------------------------------------for about -------------------------------------------------
let tablinks = document.getElementsByClassName("tab-links");
let tabContants = document.getElementsByClassName("tab-contant");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabContant of tabContants) {
    tabContant.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
// --------------------------------------------for navbar----------------------------------------------------
function openmenu() {
  document.getElementById("sidermenu").style.width = "100%";
}

function closemenu() {
  document.getElementById("sidermenu").style.width = "0";
}
