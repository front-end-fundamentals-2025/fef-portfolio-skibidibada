document.getElementById("planeinvis").style.display = "none";
document.getElementById("fireinvis").style.display = "none";

document.getElementById("dontClk").addEventListener("click", dontClick);

window.dontClick = function () {
  document.getElementById("planeinvis").style.display = "block";
  document.getElementById("fireinvis").style.display = "block";
};

// aaa
