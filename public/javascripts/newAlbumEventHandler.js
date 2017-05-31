$(document).ready(function() {

    $("#btnHome").click(function(){
        window.location.href='/';
    });
    $("#btnSubmit").click(function(event){
        addAlbum(event);
        window.location.href='/albums';
    });

});
function addAlbum(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addAlbum input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at 0
    if(errorCount === 0) {

        // If it is, compile all album info into one object
        var newAlbum = {
            'albumName': $('#addAlbum fieldset input#inputAlbumName').val(),
            'artist': $('#addAlbum fieldset input#inputArtist').val(),
            'genre': $('#addAlbum fieldset input#inputGenre').val(),
            'year': $('#addAlbum fieldset input#inputYear').val(),
        }

        // Use AJAX to post the object to our addalbum service
        $.ajax({
            type: 'POST',
            data: newAlbum,
            url: '/albums/addalbum',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {
                window.location.href='/albums';
                $('#addAlbum fieldset input').val('');
            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};