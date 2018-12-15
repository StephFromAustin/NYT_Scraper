// SCRAPING FUNCTION 

document.getElementById('scrape').addEventListener('click', function() {
    $.getJSON('/scrape', function (data) {
        console.log('success')
    })
});

// SAVE AND DELETE BUTTON, USING POST
    // SAVE
$(document).on('click', '#savebtn', function(){
    let id = $(this).data('id');
    $.ajax({ 
        method: 'POST',
        url: '/saved/' + id,
        data: {
            saved: true
        }
    }).then(function(data) {
        window.location.reload();
    });
})
    // DELETE 
$(document).on('click', '#deletebtn', function(){
    let id = $(this).data('id');
    $.ajax({
        method: 'POST',
        url: '/saved/' + id, 
        data: {
            saved: false
        }
    }).then(function(data) {
        window.ondeviceorientation.reload();
    });
})
