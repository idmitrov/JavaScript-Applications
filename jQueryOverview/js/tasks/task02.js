$(function() {
    var backgroundChanger = {
        preventFormSubmit: function() {
            $(document).on('keypress', function(e) {
                if (e.key === 'Enter' || e.keyCode === 13) {
                    e.preventDefault();
                    return false;
                }
            });
        },
        bindEvents: function() {
            var task = $('#task-02');

            var classInput = task.find('#class-input'),
                colorInput = task.find('#color-input'),
                taskSubmit = task.find('#input-submit');

            taskSubmit.on('click', function(e) {
                var className = classInput.val(),
                    colorValue = colorInput.val(),
                    elementToApplyColor = document.getElementsByClassName(className);

                // TODO: Check input
                $(elementToApplyColor).css('background-color', colorValue);
                classInput.val('');
            });
        },
        init: function() {
            // IF JS IS ENABLED => FORM SUBMIT IS DISABLED
            // ELSE IF JS IS DISABLED FOR SUBMIT WORK (EXAMPLE VIA PHP)
            this.preventFormSubmit();

            // BIND BUTTON CLICK
            this.bindEvents();
        }
    };

    $(function() {
        backgroundChanger.init();
    });
});
