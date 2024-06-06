 document.addEventListener('DOMContentLoaded', function(){
    $('.tabs-nav__link').on('click', function(e){
        e.preventDefault();

        $('.tabs-nav__link').removeClass('active');
        $(this).addClass('active');

        let href = $(this).attr('href');
        $('.tab-pane').removeClass('active').removeClass('in');
        $(href).addClass('active');

        setTimeout(function(){
            $(href).addClass('in');
        }, 300);
    } );


 });
