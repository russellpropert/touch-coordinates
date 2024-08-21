const topContainer = document.getElementById('top-container');

const displayPageX = document.getElementById('displayPageX');
const displayPageY = document.getElementById('displayPageY');

let presentTouches = [];

document.addEventListener('touchstart', event => {
  event.preventDefault();
  presentTouches = event.touches;

  for (let i = 0; i < event.changedTouches.length; i++) {
    let id = event.changedTouches[i].identifier;
    let x = Math.round(event.changedTouches[i].pageX);
    let y = Math.round(event.changedTouches[i].pageY);

    let dataBox = document.createElement('div');
    dataBox.id = `dataBoxFor${id}`;
    dataBox.className = 'dataBox';
    dataBox.textContent = `Touch ID: ${id}`;
    topContainer.appendChild(dataBox);

    let displayPageX = document.createElement('div');
    let displayPageY = document.createElement('div');
    displayPageX.id = `displayPageXFor${id}`;
    displayPageY.id = `displayPageYFor${id}`;
    displayPageX.textContent = `pageX: ${x}`;
    displayPageY.textContent = `pageY: ${y}`;
    dataBox.appendChild(displayPageX);
    dataBox.appendChild(displayPageY);

    let touch = document.createElement('div');
    touch.id = id;
    touch.className = 'touch';
    topContainer.appendChild(touch);
    touch.style.top = `${y}px`;
    touch.style.left = `${x}px`;

    let touchID = document.createElement('div');
    touchID.className = 'touchID';
    touchID.textContent = id;
    touch.appendChild(touchID);

    let touchPoint = document.createElement('div');
    touchPoint.className = 'touchPoint';
    touch.appendChild(touchPoint);
  }
}, { passive: false }); 

document.addEventListener('touchmove', event => {
  presentTouches = event.touches;

  for (let i = 0; i < event.changedTouches.length; i++) {
    let id = event.changedTouches[i].identifier;
    let x = Math.round(event.changedTouches[i].pageX);
    let y = Math.round(event.changedTouches[i].pageY);

    let displayPageX = document.getElementById(`displayPageXFor${id}`);
    let displayPageY = document.getElementById(`displayPageYFor${id}`);
    displayPageX.textContent = `pageX: ${x}`;
    displayPageY.textContent = `pageY: ${y}`;

    let touch = document.getElementById(id);
    touch.style.top = `${y}px`;
    touch.style.left = `${x}px`;
  }
});

document.addEventListener('touchend', event =>{
  presentTouches = event.touches;

  // Alternative way of handling touch point removal which did not seem as robust. On a rare occasion, 
  // a touch point or two would not be removed using this method.  
  
  // let dataBox = document.getElementById(`dataBoxFor${event.changedTouches[i].identifier}`);
  // dataBox.remove();

  // let touch = document.getElementById(event.changedTouches[i].identifier);
  // touch.remove();
});

document.addEventListener('touchcancel', event =>{
  console.log('Touch Cancel');
  presentTouches = event.touches;

  // Alternative way of handling touch point removal which did not seem as robust. On a rare occasion, 
  // a touch point or two would not be removed using this method.  

  // let dataBox = document.getElementById(`dataBoxFor${event.changedTouches[i].identifier}`);
  // dataBox.remove();

  // let touch = document.getElementById(event.changedTouches[i].identifier);
  // touch.remove();
});

const removeTouches = () => {
  let divNodeList = document.querySelectorAll('div.touch');
  let divIDList = [];
  divNodeList.forEach(node => {
    divIDList.push(node.id);
  });

  let presentTouchesList = []
  for (let i = 0; i < presentTouches.length; i++) {
    presentTouchesList.push(String(presentTouches[i].identifier));
  }

  divIDList.forEach(id => {
    if (!presentTouchesList.includes(id)) {
      let dataBoxToRemove = document.getElementById(`dataBoxFor${id}`);
      let touchToRemove = document.getElementById(id);
      dataBoxToRemove.remove();
      touchToRemove.remove();
    }
  });
}

setInterval(removeTouches, 20);