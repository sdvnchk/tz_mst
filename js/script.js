document.addEventListener('DOMContentLoaded', function () {
  const rangeInput = document.querySelector('input[type="range"]');
  const sliderValue = document.querySelector('.slider-value');

  rangeInput.addEventListener('input', function () {
    sliderValue.textContent = `${rangeInput.value}%`;
  });

  console.log('Страница загружена и готова к взаимодействию.');
});
