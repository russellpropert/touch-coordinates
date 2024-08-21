const topContainer = document.getElementById('top-container');

const displayPageX = document.getElementById('displayPageX');
const displayPageY = document.getElementById('displayPageY');

document.addEventListener('touchstart', event => {
  event.preventDefault();

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
  for (let i = 0; i < event.changedTouches.length; i++) {
    let divNodeList = document.querySelectorAll('div.touch');
    let divIDList = [];
    divNodeList.forEach(node => {
      divIDList.push(node.id);
    });

    let actualTouches = event.touches;
    let actualTouchesList = []
    for (let i = 0; i < actualTouches.length; i++) {
      actualTouchesList.push(String(actualTouches[i].identifier));
    }

    divIDList.forEach(id => {
      if (!actualTouchesList.includes(id)) {
        let dataBoxToRemove = document.getElementById(`dataBoxFor${id}`);
        let touchToRemove = document.getElementById(id);
        dataBoxToRemove.remove();
        touchToRemove.remove();
      }
    });

    // Alternative way of handling this which did not seem as robust.
    // let dataBox = document.getElementById(`dataBoxFor${event.changedTouches[i].identifier}`);
    // dataBox.remove();

    // let touch = document.getElementById(event.changedTouches[i].identifier);
    // touch.remove();
  }
});

document.addEventListener('touchcancel', event =>{
  console.log('Touch Cancel');
  for (let i = 0; i < event.changedTouches.length; i++) {
    let divNodeList = document.querySelectorAll('div.touch');
    let divIDList = [];
    divNodeList.forEach(node => {
      divIDList.push(node.id);
    });

    let actualTouches = event.touches;
    let actualTouchesList = []
    for (let i = 0; i < actualTouches.length; i++) {
      actualTouchesList.push(String(actualTouches[i].identifier));
    }

    divIDList.forEach(id => {
      if (!actualTouchesList.includes(id)) {
        let dataBoxToRemove = document.getElementById(`dataBoxFor${id}`);
        let touchToRemove = document.getElementById(id);
        dataBoxToRemove.remove();
        touchToRemove.remove();
      }
    });

    // Alternative way of handling this which did not seem as robust.
    // let dataBox = document.getElementById(`dataBoxFor${event.changedTouches[i].identifier}`);
    // dataBox.remove();

    // let touch = document.getElementById(event.changedTouches[i].identifier);
    // touch.remove();
  }
});