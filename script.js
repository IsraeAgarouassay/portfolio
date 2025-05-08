document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll(".scroll-link");
  
    scrollLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  });
  

  const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.message.value.trim();

      if (name && email && msg) {
        message.textContent = "Bedankt voor je bericht! Ik neem snel contact op.";
        message.style.color = "green";
        form.reset();
      } else {
        message.textContent = "Vul alle velden correct in.";
        message.style.color = "red";
      }
    });