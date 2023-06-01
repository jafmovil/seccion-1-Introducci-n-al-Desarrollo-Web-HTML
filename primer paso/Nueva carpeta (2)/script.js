// Obtener referencia a los elementos del DOM
const table = document.getElementById('countries-table');
const addRowButton = document.getElementById('add-row');
const resetButton = document.getElementById('reset');
const savedVersionsSelect = document.getElementById('saved-versions');
const saveStateButton = document.getElementById('save-state');
const startStopButton = document.getElementById('start-stop');

// Estado inicial de la tabla
let initialState = table.innerHTML;

// Agregar una nueva fila a la tabla
function addRow() {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td contenteditable="true">Nuevo país</td>
    <td contenteditable="true">0</td>
  `;
  table.querySelector('tbody').appendChild(newRow);
}

// Restablecer la tabla a su estado original
function resetTable() {
  table.innerHTML = initialState;
}

// Guardar el estado actual de la tabla
function saveState() {
  const versionOption = document.createElement('option');
  versionOption.text = `Versión ${savedVersionsSelect.options.length + 1}`;
  savedVersionsSelect.add(versionOption);
  versionOption.selected = true;
  const versionData = table.innerHTML;
  versionOption.dataset.state = versionData;
}

// Ordenar la tabla por columna ascendente o descendente
function sortTable(columnIndex) {
  const rows = Array.from(table.querySelectorAll('tbody tr'));
  rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].innerText.toLowerCase();
    const bValue = b.cells[columnIndex].innerText.toLowerCase();
    return aValue.localeCompare(bValue);
  });
  if (table.querySelector('thead tr th:nth-child(' + (columnIndex + 1) + ')').classList.contains('asc')) {
    rows.reverse();
    table.querySelector('thead tr th:nth-child(' + (columnIndex + 1) + ')').classList.remove('asc');
    table.querySelector('thead tr th:nth-child(' + (columnIndex + 1) + ')').classList.add('desc');
  } else {
    table.querySelector('thead tr th:nth-child(' + (columnIndex + 1) + ')').classList.add('asc');
    table.querySelector('thead tr th:nth-child(' + (columnIndex + 1) + ')').classList.remove('desc');
  }
  table.querySelector('tbody').innerHTML = '';
  for (const row of rows) {
    table.querySelector('tbody').appendChild(row);
  }
}

// Generar un número aleatorio entre 1 y 1000
function getRandomScore() {
  return Math.floor(Math.random() * 1000) + 1;
}

// Actualizar el puntaje de los países de forma aleatoria cada tres segundos
let intervalId = null;

function updateScores() {
  const rows = table.querySelectorAll('tbody tr');
  rows.forEach(row => {
    const scoreCell = row.querySelector('td:nth-child(2)');
    scoreCell.innerText = getRandomScore();
  });
  sortTable(1);
}

startStopButton.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    startStopButton.innerText = 'Iniciar';
    intervalId = null;
  } else {
    intervalId = setInterval(updateScores, 3000);
    startStopButton.innerText = 'Parar';
  }
});

// Event listeners
addRowButton.addEventListener('click', addRow);
resetButton.addEventListener('click', resetTable);
saveStateButton.addEventListener('click', saveState);