const version = '1.0';

let touchCoordinates0;

const topContainer = document.getElementById('top-container');

const displayVersion = document.getElementById('displayVersion');
const displayXCoordinate0 = document.getElementById('displayXCoordinate0');
const displayYCoordinate0 = document.getElementById('displayYCoordinate0');
const touch0 = document.getElementById('touch0');

const handleTouchEvent = (event) => {
  touchCoordinates0 = event.ChangedTouches.item(0);
  event.preventDefault();
  displayXCoordinate0.textContent = `X0: ${touchCoordinates0.pageX}`;
  displayYCoordinate0.textContent = `Y0: ${touchCoordinates0.pageY}`;
  touch0.style.width = `${touchCoordinates0.radiusX * 2}px`;
  touch0.style.height = `${touchCoordinates0.radiusY * 2}px`;
  touch0.style.transform = `${touchCoordinates0.rotationAngle}deg`;
}

document.addEventListener('touchstart', handleTouchEvent);
document.addEventListener('touchmove', handleTouchEvent);
document.addEventListener('touchend', handleTouchEvent);

window.document.onmousemove = (event) => {
    displayXCoordinate0.textContent = `X0: ${event.pageX}`;
    displayYCoordinate0.textContent = `Y0: ${event.pageY}`;  
  };

displayVersion.textContent = `Version: ${version}`;