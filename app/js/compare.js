const dragArea = document.querySelector('.compare__products-list');

new Sortable(dragArea, {
    handle: '.product__card-favorite',
    filter: '.compare__product-info',
    animation: 150
});