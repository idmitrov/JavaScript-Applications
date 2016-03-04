$(function() {
    if (!localStorage.getItem('username')) {
        var nameInput = $('<input>'),
            nameSubmit = $('<input>');

        nameInput.type = 'text';
        nameInput.attr('placeholder', 'Your name...');
        nameSubmit.attr('type', 'submit');

        nameInput.appendTo('body');
        nameSubmit.appendTo('body');

        nameInput.on('keypress', function(ev) {
            if (ev.keyCode === 13) {
                localStorage.setItem('username', nameInput.val());
                location.reload();
            }
        });

        nameSubmit.on('click', function() {
            localStorage.setItem('username', nameInput.val());
            location.reload();
        });


    } else {
        if (!localStorage.getItem('visitsCount')) {
            localStorage.setItem('visitsCount', 1);
        } else {
            localStorage.visitsCount++;
        }

        var welcomeTitle = $('<h2>'),
            visitsCounter = $('<p>');

        welcomeTitle.text('Welcome ' + localStorage.getItem('username'));
        welcomeTitle.appendTo('body');

        var totalVisits = localStorage.getItem('visitsCount'),
            totalVisitsWords = totalVisits > 1 ? 'times' : 'time';

        totalVisits += ' ' + totalVisitsWords;

        visitsCounter.text('You have visited that page ' + totalVisits);
        visitsCounter.appendTo('body');
    }
});