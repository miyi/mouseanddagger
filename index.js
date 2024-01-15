export const mousedown = ({pos, node, ...$scope}, e) => {
  console.log('1');
 $scope.isDragging=true;
 pos.x = e.clientX - node.getBoundingClientRect().left;
 pos.y = e.clientY - node.getBoundingClientRect().top;
}

export const mousemove = ({pos, isDragging}, e) => {
  if (isDragging) {
    pos.x = e.clientX - pos.x;
    pos.y = e.clientY - pos.y;
    console.log(pos.x + '  ' + pos.y);
  }
}

export const mouseup = ($scope) => {
  $scope.isDragging = false;
}

// export function drag_div(elmnt) {
//   eventHandler(elmnt);
// }
// 
// const eventHandler = (elmnt) => {
//   var isDragging = false;
//   var offsetX = null;
//   var offsetY = null;

//   elmnt.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     offsetX = e.clientX - elmnt.getBoundingClientRect().left;
//     offsetY = e.clientY - elmnt.getBoundingClientRect().top;
//   });

//   document.addEventListener('mousemove', (e) => {
//     if (isDragging) {
//         const x = e.clientX - offsetX;
//         const y = e.clientY - offsetY;

//         elmnt.style.left = `${x}px`;
//         elmnt.style.top = `${y}px`;
//     }
//   });

//   document.addEventListener('mouseup', () => {
//     isDragging = false;
//   });
// };
