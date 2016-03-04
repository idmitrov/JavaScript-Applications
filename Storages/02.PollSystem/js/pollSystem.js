$(function() {
    var submitButton = $('#submit-poll'),
        answerButton = $('.answer'),
        beerDrinkCache = localStorage.getItem('beer-drink'),
        beerFavoriteCache = localStorage.getItem('beer-favorite');

    /*
     *  CHECK STORAGE IF CONTAINS THE ANSWERS
     */
    var validatePoll = function() {
        var beerFavorite = localStorage.getItem('beer-favorite'),
            beerDrinking = localStorage.getItem('beer-drink');

        return beerDrinking !== null && beerFavorite !== null;
    };

    /*
     *  SWITCH ON/OFF THE SUBMIT BUTTON
     *  DEPENDS OF THAT THE QUESTIONS ARE ALL ANSWERED
     */
    var submitSwitch = function(mode) {
        switch(mode) {
            case 'on':
                submitButton.attr('disabled', false);
                break;
            case 'off':
                submitButton.attr('disabled', true);
                break;
        }
    };

    var countDown = function(duration, display) {
        var timer = duration,
            minutes,
            seconds;

        setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            if (--timer < 0) {
                timer = duration;
            }

            display.text('Timeleft: ' + minutes + ':' + seconds);
        }, 1000);
    };

    // ON INIT (WHEN THE PAGE START)
    if (!validatePoll()) {
        submitSwitch('off');
    } else {
        var minutes = 5,
            displayNode = $('#timer');

        countDown(minutes * 60, displayNode);

        var beerDrinkRestore = $("input[name*='beer-drink'][value*='" + beerDrinkCache + "']"),
            beerFavoriteRestore = $("input[name*='beer-favorite'][value*='" + beerFavoriteCache + "']");

            beerDrinkRestore.attr('checked', true);
            beerFavoriteRestore.attr('checked', true);

        submitSwitch('on');
    }

    // EVENTS
    /*
     *  WHEN CHECK RADIO BUTTON / ANSWER
     *  GETS ANSWER AND STORE IT
     *  REFRESH VALIDATION FOR SUBMIT BUTTON
     *  EACH TIME WHEN A NEW ANSWER IS CHOSEN
     */
    answerButton.on('click', function() {
        localStorage.setItem(this.name, this.value);

        if (!validatePoll()) {
            submitSwitch('off');
        } else {
            submitSwitch('on');
        }
    });

    /*
     *  WHEN SUBMIT POLL
     *  VALIDATE THE ANSWERS
     *  IF ANY QUESTION IS NOT ANSWERED
     *  THE SUBMISSION IS NOT VALID
     */
    submitButton.on('click', function() {
        if (!validatePoll()) {
            submitSwitch('off');
        } else {
            $(document).html('');
        }
    })
});