
var elsFeatItem = document.querySelectorAll('.features__item');
var elsFeatBtn = document.querySelectorAll('.features__button');

elsFeatBtn.forEach(function (link) {
  link.addEventListener('click', function () {
    elsFeatItem.forEach(function (item) {
      item.classList.remove('features__button-active');
    });

    link.parentElement.classList.add('features__button-active');
  });
});




var elsQuestionsItem = document.querySelectorAll('.questions__item');
var elsQuestionsButton = document.querySelectorAll('.questions__item--button');
elsQuestionsButton.forEach(function (button) {
  button.addEventListener('click', function () {
    elsQuestionsItem.forEach(function (item) {
      item.classList.remove('questions__item--active');
    });
    button.closest('.questions__item').classList.add('questions__item--active');
  });
});