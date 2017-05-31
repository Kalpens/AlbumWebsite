var albumListData = [];

$(document).ready(function() {
    populateTable();
    $("#btnHome").click(function(event){
        window.location.href='/';
    });

});

// Fill table with data
function populateTable() {
    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/albums/albumlist', function( data ) {
        // Stick our album data object into album array
        albumListData = data;
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.albumName + '</td>';
            tableContent += '<td>' + this.artist + '</td>';
            tableContent += '<td>' + this.year + '</td>';
            tableContent += '<td>' + this.genre + '</td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#albumList table tbody').html(tableContent);
    });
};