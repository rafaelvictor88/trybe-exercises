function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfMonth() {
  
  let monthDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let daysMonth = decemberDaysList[index];
    let daysMonthItem = document.createElement('li');
    
    if (daysMonth === 24 | daysMonth === 31) {
      daysMonthItem.className = 'day holiday';
      daysMonthItem.innerHTML = daysMonth;
    } else if (daysMonth === 4 | daysMonth === 11 | daysMonth === 18) {
      daysMonthItem.className = 'day friday';
      daysMonthItem.innerHTML = daysMonth;
    } else if (daysMonth === 25) {
      daysMonthItem.className = 'day holiday friday';
      daysMonthItem.innerHTML = daysMonth;
    } else {
      daysMonthItem.className = 'day';
      daysMonthItem.innerHTML = daysMonth;
    }

    monthDaysList.appendChild(daysMonthItem);
  };
};

createDaysOfMonth();

function createHolidayButton (buttonName) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName; 
  newButton.id = newButtonID;
  buttonsContainer.appendChild(newButton);
};

createHolidayButton('Feriados');

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();

function createFridayButton(buttonName) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;

  buttonsContainer.appendChild(newButton);
};

createFridayButton('Friday');

function displayFriday() {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFridays = document.getElementsByClassName('friday');
  let setNewText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < getFridays.length; index += 1) {
      if (getFridays[index].innerHTML !== setNewText) {
          getFridays[index].innerHTML = setNewText;
      } else {
          getFridays[index].innerHTML = textFriday[index];
      }
    }
  });
};

displayFriday();

// function btnClick () {
//   const button = document.querySelector('#btn-holiday');
//   const holiDays = document.querySelectorAll('.day-holiday');
//   holiDays.style.backgroundColor = "rgb(238,238,238)";

//   button.addEventListener('click', function () {
//     holiDays.style.backgroundColor = 'rgb(25, 25, 25)';
//   });
// };

// btnClick();
// Escreva seu código abaixo.