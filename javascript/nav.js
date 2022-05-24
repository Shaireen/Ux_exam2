function mobileNav() {
    var navigation = document.getElementById("navigation");
    if (navigation.className === "topnav") {
      navigation.className += " responsive";
    } else {
      navigation.className = "topnav";
    }
  }