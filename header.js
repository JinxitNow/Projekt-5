//Header - Anja
document.addEventListener("DOMContentLoaded", () => {
  function togglemenu() {
    const nav = document.getElementById("mytopnav");
    if (nav) {
      nav.classList.toggle("responsive");
    }

    const menuinfo = {
      antalpunkter: 4,
      lavetaf: "Anja",
      Aktiv: true,
      beskrivelse: "Navigationsmenu"
    };

    const menuitems = [
      "Gavekurve",
      "Sortiment",
      "Samarbejdspartnere",
      "Kontakt"
    ];

    for (let i = 0; i < menuitems.length; i++) {
      console.log("Menu punkt: " + menuitems[i]);
    }

    const dropdownlinks = document.querySelectorAll(".dropdown > a");
    dropdownlinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelectorAll(".dropdown").forEach((drop) => {
          if (drop !== link.parentElement) {
            drop.classList.remove("open");
          }
        });

        const dropdown = link.parentElement;
        dropdown.classList.toggle("open");
      });
    });
  }

  // Gør funktionen globalt tilgængelig (f.eks. hvis du kalder den fra HTML onclick)
  window.togglemenu = togglemenu;
});
