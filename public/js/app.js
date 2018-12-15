// SCRAPING FUNCTION 

document.getElementById('scrape').addEventListener('click', function() {
    $.getJSON('/scrape', function (data) {
        console.log('success')
    })
});

// SAVE AND DELETE BUTTON, USING POST

$(document).on('click', '#savebtn', function(){
    let id = $(this).data('id');
    $.ajax({ 
        method: 'POST'
        url: '/saved/' + id,
        data: {
            saved: true
        }
    }).then(function(data) {
        window.location.reload();
    });
})