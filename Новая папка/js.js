function myFunction() {
    if (confirm("Вы уверены, что хотите заказать билет на Теотральное Произведение 3 ИЮНЯ?")) {
      alert("Вы подтвердили!");
      window.open("https://cinemamedley.ru/cinemamedley3?utm_source=yandex_egis&utm_medium=cm3&utm_campaign=search&utm_content=msk&utm_term=pokupka&yclid=11761741106470453247", "_blank");
    } else {
      if (confirm("Может вы передумаете?")) {
        alert("Вы подтвердили!"); 
        window.open("https://cinemamedley.ru/cinemamedley3?utm_source=yandex_egis&utm_medium=cm3&utm_campaign=search&utm_content=msk&utm_term=pokupka&yclid=11761741106470453247", "_blank");
      } else {
        alert("Вы отказались от покупки билета на Теотральное произведение 3 ИЮНЯ.");
      }
    }
  }
        
        

function myFunctions() {
    if (confirm("Вы уверены, что хотите заказать билет на Теотральное Произведение 5 ИЮЛЯ?")) {
      alert("Вы подтвердили!");
      window.open("https://cinemamedley.ru/cinemamedley3?utm_source=yandex_egis&utm_medium=cm3&utm_campaign=search&utm_content=msk&utm_term=pokupka&yclid=11761741106470453247", "_blank");
    } else {
      if (confirm("Может вы передумаете?")) {
        alert("Вы подтвердили!"); 
        window.open("https://cinemamedley.ru/cinemamedley3?utm_source=yandex_egis&utm_medium=cm3&utm_campaign=search&utm_content=msk&utm_term=pokupka&yclid=11761741106470453247", "_blank");
      } else {
        alert("Вы отказались от покупки билета на Теотральное произведение 5 ИЮЛЯ.");
      }
    }
  }





const deadline = new Date('2024-11-29').getTime(); // Замените на нужную дату

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = deadline - now;

  if (timeLeft <= 0) {
    document.getElementById('countdown').innerHTML = 'Время вышло!';
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `Осталось: ${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

setInterval(updateCountdown, 1000);






const target = document.getElementById('target');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      target.style.opacity = 1;
      observer.unobserve(target); // Важно! Убираем наблюдателя, чтобы не перерисовывался постоянно
    }
  });
}, {
  rootMargin: '0px 0px -100px 0px', // Настраивает зону наблюдения
});

observer.observe(target);