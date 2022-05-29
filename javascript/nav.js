function mobileNav() {
    const navigation = document.querySelector("#navigation");
    if (navigation.className === "topnav") {
      navigation.className += " responsive";

    } else {
      navigation.className = "topnav";

    }
  }