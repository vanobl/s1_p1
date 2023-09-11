const dragElementInOrder = (dragIndex, hoverIndex) => ({
    type: 'DRAG_ELEMENT_IN_ORDER',
    drag_index: dragIndex,
    hover_index: hoverIndex
});

export default dragElementInOrder;