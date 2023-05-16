(function () {
  "use strict";

  function changeSrc() {
    var img = document.getElementById("ugly-pig");
    img.setAttribute(
      "src",
      "https://live.staticflickr.com/3515/3270517768_c82ae90ceb_b.jpg"
    );
    console.log("fire");
  }
  document.querySelector("button").addEventListener("click", changeSrc);
})();
