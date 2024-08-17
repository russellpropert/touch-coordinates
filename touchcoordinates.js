const version = '1.21';

let touchCoordinates0;

const topContainer = document.getElementById('top-container');

const displayVersion = document.getElementById('displayVersion');
const displayClientX = document.getElementById('displayClientX');
const displayClientY = document.getElementById('displayClientY');
const displayPageX = document.getElementById('displayPageX');
const displayPageY = document.getElementById('displayPageY');
const displayScreenX = document.getElementById('displayScreenX');
const displayScreenY = document.getElementById('displayScreenY');
const displayRadiusX = document.getElementById('displayRadiusX');
const displayRadiusY = document.getElementById('displayRadiusY');
const displayRotationAngle = document.getElementById('displayRotationAngle');

displayClientX.textContent = 'clientX: undefined';
displayClientY.textContent = 'clientY: undefined';
displayPageX.textContent = 'pageX: undefined'
displayPageY.textContent = 'pageY: undefined'
displayScreenX.textContent = 'screenX: undefined';
displayScreenY.textContent = 'screenY: undefined';
displayRadiusX.textContent = 'radiusX: undefined';
displayRadiusY.textContent = 'radiusY: undefined';
displayRotationAngle.textContent = 'rotationAngle: undefined';

document.addEventListener('mousemove', event => {
  console.log('Mouse Move');
});

document.addEventListener('touchstart', event => {
  event.preventDefault();
  //console.log(event);
  displayClientX.textContent = `clientX: ${Math.round(event.changedTouches[0].clientX)}`;
  displayClientY.textContent = `clientY: ${Math.round(event.changedTouches[0].clientY)}`;
  displayPageX.textContent = `pageX: ${Math.round(event.changedTouches[0].pageX)}`;
  displayPageY.textContent = `pageY: ${Math.round(event.changedTouches[0].pageY)}`;
  displayScreenX.textContent = `screenX: ${Math.round(event.changedTouches[0].screenX)}`;
  displayScreenY.textContent = `screenY: ${Math.round(event.changedTouches[0].screenY)}`;
  displayRadiusX.textContent = `radiusX: ${Math.round(event.changedTouches[0].radiusX)}`;
  displayRadiusY.textContent = `radiusY: ${Math.round(event.changedTouches[0].radiusY)}`;
  displayRotationAngle.textContent = `rotationAngle: ${Math.round(event.changedTouches[0].rotationAngle)}`;

  for (let i = 0; i < event.changedTouches.length; i++) {
    let touchDiv = document.createElement('div');
    touchDiv.id = event.changedTouches[i].identifier;
    touchDiv.className = 'touchDiv';
    topContainer.appendChild(touchDiv);
    touchDiv.style.top = `${event.changedTouches[i].pageY}px`;
    touchDiv.style.left = `${event.changedTouches[i].pageX}px`;
  }
}, { passive: false }); 

document.addEventListener('touchmove', event => {
  displayClientX.textContent = `clientX: ${Math.round(event.changedTouches[0].clientX)}`;
  displayClientY.textContent = `clientY: ${Math.round(event.changedTouches[0].clientY)}`;
  displayPageX.textContent = `pageX: ${Math.round(event.changedTouches[0].pageX)}`;
  displayPageY.textContent = `pageY: ${Math.round(event.changedTouches[0].pageY)}`;
  displayScreenX.textContent = `screenX: ${Math.round(event.changedTouches[0].screenX)}`;
  displayScreenY.textContent = `screenY: ${Math.round(event.changedTouches[0].screenY)}`;
  displayRadiusX.textContent = `radiusX: ${Math.round(event.changedTouches[0].radiusX)}`;
  displayRadiusY.textContent = `radiusY: ${Math.round(event.changedTouches[0].radiusY)}`;
  displayRotationAngle.textContent = `rotationAngle: ${Math.round(event.changedTouches[0].rotationAngle)}`;

  for (let i = 0; i < event.changedTouches.length; i++) {
    let touchDiv = document.getElementById(event.changedTouches[i].identifier);
    touchDiv.style.top = `${event.changedTouches[i].pageY}px`;
    touchDiv.style.left = `${event.changedTouches[i].pageX}px`;
  }
});

document.addEventListener('touchend', event =>{
  displayClientX.textContent = `clientX: ${Math.round(event.changedTouches[0].clientX)}`;
  displayClientY.textContent = `clientY: ${Math.round(event.changedTouches[0].clientY)}`;
  displayPageX.textContent = `pageX: ${Math.round(event.changedTouches[0].pageX)}`;
  displayPageY.textContent = `pageY: ${Math.round(event.changedTouches[0].pageY)}`;
  displayScreenX.textContent = `screenX: ${Math.round(event.changedTouches[0].screenX)}`;
  displayScreenY.textContent = `screenY: ${Math.round(event.changedTouches[0].screenY)}`;
  displayRadiusX.textContent = `radiusX: ${Math.round(event.changedTouches[0].radiusX)}`;
  displayRadiusY.textContent = `radiusY: ${Math.round(event.changedTouches[0].radiusY)}`;
  displayRotationAngle.textContent = `rotationAngle: ${Math.round(event.changedTouches[0].rotationAngle)}`;

  for (let i = 0; i < event.changedTouches.length; i++) {
    let touchDiv = document.getElementById(event.changedTouches[i].identifier);
    touchDiv.remove();
  }
});

document.addEventListener('touchcancel', event =>{
  console.log('Touch Cancel');
  for (let i = 0; i < event.changedTouches.length; i++) {
    let touchDiv = document.getElementById(event.changedTouches[i].identifier);
    touchDiv.remove();
  }
});



// document.ontouchmove = (event) => {
//   touchCoordinates0 = event.changedTouches.item(0);
//   event.preventDefault();
//   displayXCoordinate0.textContent = `X0: ${touchCoordinates0.pageX}`;
//   displayYCoordinate0.textContent = `Y0: ${touchCoordinates0.pageY}`;
//   touch0.style.width = `${touchCoordinates0.radiusX * 2}px`;
//   touch0.style.height = `${touchCoordinates0.radiusY * 2}px`;
//   touch0.style.transform = `${touchCoordinates0.rotationAngle}deg`;
// }


// document.onmousemove = (event) => {
//     displayXCoordinate0.textContent = `X0: ${event.pageX}`;
//     displayYCoordinate0.textContent = `Y0: ${event.pageY}`;  
// };

displayVersion.textContent = `Version: ${version}`;