document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.getElementById("navLinks");
  const burgerMenu = document.getElementById("burgerMenu");

  if (!navLinks || !burgerMenu) {
    console.error("Elementer med id 'navLinks' eller 'burgerMenu' findes ikke!");
    return;
  }

  // Objektbaseret menu
  const menuItems = [
    { text: "Gavekurve", href: "#" },
    { text: "Sortiment", href: "#" },
    { text: "Samarbejdspartnere", href: "#" },
    { text: "Kontakt", href: "#" }
  ];

  // Opret links via DOM (objekter + loop + DOM-manipulation)
  menuItems.forEach(item => {
    const link = document.createElement("a");
    link.textContent = item.text;
    link.href = item.href;

    // Event: klik på link (lukker menu på mobil)
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        navLinks.classList.remove("active");
      }
    });

    navLinks.appendChild(link);
  });

  // Funktion til at toggle menuen
  function toggleMenu() {
    navLinks.classList.toggle("active");
  }

  burgerMenu.addEventListener("click", toggleMenu);

  // Klik udenfor lukker menu
  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !burgerMenu.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });
});