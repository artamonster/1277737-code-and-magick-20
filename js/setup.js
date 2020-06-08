'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
// Генерируем случайное число
var getRandomNumber = function (min, max) {
  var number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
};
//получаем случайный элемент массива
var getRandomArrayElement = function (array) {
  if (array) {
    var arrayIndex = getRandomNumber (0, array.length -1 );
    return array[arrayIndex];
  } else {
    return false;
  }
};
// Генерируем массив из 4х случайных магов
var generateWizardsArray = function () {
  var wizardsArray = [];

  for (var i = 0; i < 4; i++) {
    var randomWizardArray = {};
    randomWizardArray.name = getRandomArrayElement(WIZARD_NAMES) + ' ' + getRandomArrayElement(WIZARD_SURNAMES);
    randomWizardArray.coatColor = getRandomArrayElement(COAT_COLORS);
    randomWizardArray.eyesColor = getRandomArrayElement(EYES_COLORS);
    wizardsArray.push(randomWizardArray);
  }

  return wizardsArray;
};
// создаём мага по шаблону
var createSimilarWizard = function (wizardArray, template) {
  var setupSimilarItem = template.querySelector('.setup-similar-item').cloneNode(true);
  var setupSimilarLabel = template.querySelector('.setup-similar-label');
  var wizardCoat = setupSimilarItem.querySelector('.wizard-coat');
  var wizardEyes = setupSimilarItem.querySelector('.wizard-eyes');

  setupSimilarLabel.textContent = wizardArray.name;
  wizardCoat.style = 'fill: ' + wizardArray.coatColor + ';';
  wizardEyes.style = 'fill: ' + wizardArray.eyesColor + ';';

  return setupSimilarItem;
};
// отрисовываем похожих магов
var renderSimilarWizards = function (data) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var setupSimilarListFragment = document.createDocumentFragment();
  for (var i = 0; i < data.length; i++) {
    var setupSimilarItem = createSimilarWizard(data[i], similarWizardTemplate);
    setupSimilarListFragment.appendChild(setupSimilarItem);
  }
  setupSimilarList.appendChild(setupSimilarListFragment);
};
// Генерируем массив магов
var wizardsArray = generateWizardsArray();
// Заполняем блок похожих магов
renderSimilarWizards(wizardsArray);

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
