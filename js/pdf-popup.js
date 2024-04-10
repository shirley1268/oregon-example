
$( document ).ready(function() {
    console.log("Ready in pdf-popup!");

    $(document).on('click', '.pdf-link', function(e) {
        e.preventDefault();
        $(this).magnificPopup({
            type: 'iframe',
            items: {
                src: $(this).attr('href')
            }
        }).magnificPopup('open');
    });

});