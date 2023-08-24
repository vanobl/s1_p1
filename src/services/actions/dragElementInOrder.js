const dragElementInOrder = (dragId, hoverId) => ({
    type: 'DRAG_ELEMENT_IN_ORDER',
    drag_id: dragId,
    hover_id: hoverId
});

export default dragElementInOrder;