document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Спасибо за сообщение! Мы скоро свяжемся с вами.");
  this.reset();
});
