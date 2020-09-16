$(document).ready(function()
{
    $('#showBooks').click(function (mittEvent)
    {
        
        mittEvent.preventDefault();

        $.get('data.xml', function(minaData)
        {
            $(minaData).find('book').each(function()
            {
                

                var $book = $(this);

                console.log("hej");

                var html = '<tr><td class="genre">';
                html += $book.find('genre').text();
                html += '</td><td class="title">';
                html += $book.find('title').text();
                html += '</td><td class="author">';
                html += $book.find('author').text();
                html += '</td><td class="price">';
                html += $book.find('price').text();
                html += '</td><td><button id="';
                html += $book.attr('id');
                html += '">Köp</button></td></tr>';

                $('#listOfBooks').append($(html));
            });
        });
    });



});