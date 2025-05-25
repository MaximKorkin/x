




document.addEventListener('DOMContentLoaded', function() {
  const backgroundSound = document.getElementById('backgroundSound');
  const toggleSoundLink = document.getElementById('toggleSoundLink');
  let isPlaying = false; // Флаг для отслеживания состояния воспроизведения

  // Функция для переключения состояния звука
  function toggleSound() {
    if (isPlaying) {
      backgroundSound.pause();
      toggleSoundLink.textContent = 'Включить звук';
    } else {
      backgroundSound.play().catch(error => {
        console.warn("Автоматическое воспроизведение фоновой музыки заблокировано.");
        console.log(error);
      });
      toggleSoundLink.textContent = 'Выключить звук';
    }
    isPlaying = !isPlaying; // Инвертируем состояние
  }

  // Обработчик события для ссылки
  toggleSoundLink.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    toggleSound();
  });
});