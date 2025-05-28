document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");
  const reopenBtn = document.getElementById("reopenPopup");
  const form = document.getElementById("newsletterForm");

  // Simulerede tilmeldte e-mails
  const registeredEmails = ["test@example.com", "hello@liwira.dk"];

  // Vis popup efter 5 sekunder
  setTimeout(function () {
    popup.style.display = "flex";
  }, 5000);

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

  // Fake formularhåndtering med loop og if
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value.toLowerCase();

    let alreadyRegistered = false;
    for (let i = 0; i < registeredEmails.length; i++) {
      if (email === registeredEmails[i]) {
        alreadyRegistered = true;
        break;
      }
    }

    if (alreadyRegistered) {
      form.innerHTML = "<p>Du er allerede tilmeldt – tjek din mail for rabatkoden!</p>";
    } else {
      form.innerHTML = "<p>Tak for din tilmelding! Du vil få din rabatkode per mail</p>";
    }
  });
});
