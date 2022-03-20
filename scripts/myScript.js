function myFunction() {
    var x = document.getElementById("myNavbar");
    var y = document.getElementById("myNavbar1");
    if (x.className === "navbar") {
      x.className += " responsive";
      y.className+= " responsive";
    } else {
      x.className = "navbar";
      y.className = "navbar";
    }
    
  }

  function myFunctionImg(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }