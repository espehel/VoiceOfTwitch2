// StatementsList data array for filling in info box
var statementsListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the table two times for each second
    setInterval(populateTable,500);

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/statements/statementlist', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.statement + '</td>';
            tableContent += '<td>' + this.occurences + '</td>';
            tableContent += '<td>' + this.score + '</td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#statements table tbody').html(tableContent);
    });
};