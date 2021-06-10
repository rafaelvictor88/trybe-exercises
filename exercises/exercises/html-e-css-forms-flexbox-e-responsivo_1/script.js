const getOptionStates = document.getElementById('input-state');
const arrayOfStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

for (let index = 0; index < arrayOfStates.length; index += 1) {
  let newOptionState = document.createElement('option');
  newOptionState.textContent = arrayOfStates[index];
  getOptionStates.appendChild(newOptionState);
}

const getInputDay = document.getElementById('input-day').nodeValue;
if (getInputDay < 0 || getInputDay > 31) {
  alert = 'invalid value';
}
const getInputMonth = document.getElementById('input-month').nodeValue;
if (getInputMonth < 0 || getInputMonth > 12) {
  alert = 'invalid value';
}
const getInputYear = document.getElementById('input-year').nodeValue;
if (getInputYear < 0) {
  alert = 'invalid value';
}

