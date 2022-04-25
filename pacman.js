let pos = 0;

const pacArray = [
  './pacimgs/PacMan1.png',
  './pacimgs/PacMan2.png',
  './pacimgs/PacMan3.png',
  './pacimgs/PacMan4.png',
];

let direction = 0;

const pacMen = [];

function setToRandom(scale) { //returns an object with random values
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

function makePac() { //makes pacman with random velocity and posistion
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './pacimgs/PacMan1.png';
  newimg.width = 100;
  newimg.style.top = position.y
  newimg.style.left = position.x
  game.appendChild(newimg);

  return { //return object with random values
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacArray and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) { //makes pacman bounce off the walls
  if (
    item.velocity.x + item.position.x + item.newimg.width > window.innerWidth ||
    item.velocity.x + item.position.x < 0
  )
    item.velocity.x = -item.velocity.x;

  if (
    item.velocity.y + item.position.y + item.newimg.height > window.innerHeight ||
    item.velocity.y + item.position.y < 0
  )
    item.velocity.y = -item.velocity.y;
}

function makeOne() { //adds new pacman
  pacMen.push(makePac());
}