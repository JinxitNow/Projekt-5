document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");
  const reopenBtn = document.getElementById("reopenPopup");
  const form = document.getElementById("newsletterForm");

    setTimeout(function () {
    popup.style.display = "flex";
    }, 30000);

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

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    form.innerHTML = "<p>Tak for din tilmelding! Du vil få din rabatkode per mail</p>";
  }
});
  });
