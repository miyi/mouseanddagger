export const movediv = (m1, $scope) => {
  if ($scope.dragging === true) {
    $scope.div.x += m1.x - $scope.m0.x;
    $scope.div.y += m1.y - $scope.m0.y;
    $scope.m0.x = m1.x;
    $scope.m0.y = m1.y;
  }
};

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
