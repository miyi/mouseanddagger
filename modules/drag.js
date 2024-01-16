// export function dragMouseDown(e, elmnt) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     elmnt.onmouseup = closeDragElement(elmnt);

//     // call a function whenever the cursor moves:
//     elmnt.onmousemove = elementDrag(elmnt);
// }

// function closeDragElement(elmnt) {
//     /* stop moving when mouse button is released:*/
//     elmnt.onmouseup = null;
//     elmnt.onmousemove = null;
//   }

// function elementDrag(e, elmnt) {
// e = e || window.event;
// e.preventDefault();
// // calculate the new cursor position:
// pos1 = pos3 - e.clientX;
// pos2 = pos4 - e.clientY;
// pos3 = e.clientX;
// pos4 = e.clientY;
// // set the element's new position:
// elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
// elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
// }

export function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (elmnt) {
    /* if present, the header is where you move the DIV from:*/
    elmnt.onmousedown = dragMouseDown;
  }
}

export function dragMouseDown(e, elmnt) {
  e = e || window.event;
  e.preventDefault();
  // get the mouse cursor position at startup:
  pos3 = e.clientX;
  pos4 = e.clientY;
  elmnt.onmouseup = closeDragElement(elmnt);
  // call a function whenever the cursor moves:
  elmnt.onmousemove = elementDrag(e, elmnt);
}

function elementDrag(e, elmnt) {
  e = e || window.event;
  e.preventDefault();
  // calculate the new cursor position:
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  // set the element's new position:
  elmnt.style.top = elmnt.offsetTop - pos2 + "px";
  elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
}

function closeDragElement(elmnt) {
  /* stop moving when mouse button is released:*/
  elmnt.onmouseup = null;
  elmnt.onmousemove = null;
}


