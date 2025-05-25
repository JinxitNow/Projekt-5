document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");
  const reopenBtn = document.getElementById("reopenPopup");
  const form = document.getElementById("newsletterForm");

  // Vis popup efter 30 sekunder
  setTimeout(function () {
    popup.style.display = "flex";
  }, 10000); // 10000 millisekunder = 10 sekunder

  // Luk popup
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    reopenBtn.classList.remove("hidden");
  });

  // Genåbn popup
  reopenBtn.addEventListener("click", function () {
    popup.style.display = "flex";
    reopenBtn.classList.add("hidden");
  });

  // Fake formular
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
      form.innerHTML = "<p>Tak for din tilmelding! Du vil få din rabatkode per mail</p>";
    }
  });
});

