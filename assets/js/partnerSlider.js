function next(name){
    if(name=='main-slider'){
        $('#'+name).trigger('owl.next');
    }
    $('.'+name).trigger('owl.next');
}

function prev(name) {
    if (name == 'main-slider') {
        $('#' + name).trigger('owl.prev');
    }
    $('.' + name).trigger('owl.prev');

}
$('.partner-slider').owlCarousel({
    items : 5,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [680,1],
    pagination:false
});