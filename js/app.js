$(document).ready(function(){

// CLASE ACTIVE AL PRIMER ENLACE ====================
$('.category_list .category_item[category="all"]').addClass('ct_item-active');

     $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
		//console.log(catProduct);


        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
	    $('.category_item').removeClass('ct_item-active');
	    $(this).addClass('ct_item-active');

        //OCULTAR PDRODUCTOS
        $('.product-item').css('transform', 'scale(0)')
        function hideProduct(){
          $('.product-item').hide();
        } setTimeout(hideProduct, 400)

        //MOSTRAR PDRODUCTOS
        function showProduct(){
        $('.product-item[category="'+catProduct+'"]').show();
        $('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)')

    }setTimeout(showProduct, 400)

    });

        //MOSTRAR TODOS LOS PRODUCTOS
        $('.category_item[category="all"]').click(function(){
            function showAll(){
                $('.product-item').show();
                $('.product-item').css('transform', 'scale(1)');
            } setTimeout(showAll,400);
        });
    });