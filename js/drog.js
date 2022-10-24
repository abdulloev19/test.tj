const gragField =document.querySelector(".container-drog")
const gradItem = document.querySelector('.drog-item')

gradItem.addEventListener('mousedown', function(event){

    let coordsItemx = event.clientX - gradItem.getBoundingClientRect().left;
    let coordsItemY = event.clientY - gradItem.getBoundingClientRect().top;

    let gradItemSizes = {
        width: gradItem.offsetWidth,
        height: gradItem.offsetHeight
    }
    let gragFieldSizes = {
        left: gragField.getBoundingClientRect().left + scrollX,
        top: gragField.getBoundingClientRect().top + scrollY,
        right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
        bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
    }

    gradItem.style.position = 'absolute';
    gradItem.style.zIndex = 1000;
    document.body.append(gradItem);

    moveItem(event.pageX, event.pageY);

    function moveItem(pageX, pageY){
        let currentX = pageX - coordsItemx;
        let currentY = pageY - coordsItemY;

        if(currentX + gradItemSizes.width <= gragFieldSizes.right &&
            currentX >= gragFieldSizes.left){
                gradItem.style.left = `${currentX}px`
            }
        else {
            if(currentX + gradItemSizes.width > gragFieldSizes.right){
                gradItem.style.left = `${gragFieldSizes.right - gradItemSizes.width}px`;
            }
            if(currentX < gragFieldSizes.left){
                gradItem.style.left = `${gragFieldSizes.left}px`
            }
        }
        if(
            currentY + gradItemSizes.height <= gragFieldSizes.bottom &&
            currentY >= gragFieldSizes.top
        ){
            gradItem.style.top = `${currentY}px`;
        }
        else {
            if(currentY + gradItemSizes.height > gragFieldSizes.bottom){
                gradItem.style.top = `${gragFieldSizes.bottom - gradItemSizes.height}px`;
            }
            if(currentY < gragFieldSizes.top){
                gradItem.style.top = `${gragFieldSizes.top}px`
            }
        }
    }

	let currentDroppable = null;

	function onDragItem(event) {
		moveItem(event.pageX, event.pageY);

		gragItem.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
		gragItem.hidden = false;

		if (!elemBelow) return;
		let droppableBelow = elemBelow.closest('.drog-point');

		if (currentDroppable !== droppableBelow) {
			if (currentDroppable) {
				currentDroppable.classList.remove('_active');
				gragItem.classList.remove('_active');
			}
			currentDroppable = droppableBelow;
			if (currentDroppable) {
				currentDroppable.classList.add('_active');
				gragItem.classList.add('_active');
			}
		}
	}
	document.addEventListener('mousemove', onDragItem);

	document.addEventListener("mouseup", function (event) {
		document.removeEventListener('mousemove', onDragItem);
	}, { "once": true });
});
gragItem.addEventListener("dragstart", function (event) {
	event.preventDefault();




});