// todo
const hasWon = () => {
  const table = document.querySelector('table')
  if ('123456789101112131415' === table.innerText.split('\n').join('')) {
    return true
  }

  return false
}

const isNextToEmptySquare = (x, y) => {
  const emptySquare = document.querySelector('.empty');
  const emptyY = emptySquare.parentNode.rowIndex;
  const emptyX = emptySquare.cellIndex;

  if (
    (emptyX - 1) === x && (emptyY === y)
    || (emptyX === x) && (emptyY -1) === y
    || (emptyX + 1) === x && (emptyY === y)
    || (emptyX === x) && (emptyY + 1) === y
  ) {
    return true
  }
}

const tiles = document.querySelectorAll('td');
// I click a square
tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    const y = event.target.parentNode.rowIndex;
    const x = event.target.cellIndex;
    // if it is next to the empty square
    if (isNextToEmptySquare(x, y)) {
      // swap the clicked square with the empty square
      const emptySquare = document.querySelector('.empty');
      tile.classList.add('empty');
      emptySquare.classList.toggle('empty');
      emptySquare.innerText = tile.innerText;
      tile.innerText = '';

      if (hasWon()) {
        console.log('You Won!!!')
      }
    }
  })
})


const hintButton = document.querySelector('#show-hint');
hintButton.addEventListener('click', () => {
  const hintSection = document.querySelector('.hint');
  hintSection.classList.toggle('active')
})
