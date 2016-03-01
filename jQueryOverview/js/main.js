$(function() {
    var taskHandler = {
        init: function() {
            var selector = $('.nav-link');

            this.bindEventListeners(selector);
        },
        bindEventListeners: function(element) {
            element.on('click', function() {
                var self = $(this),
                    submenu = self.siblings('.nav-wrapper.sub-navigation');

                element.each(function(linkIndex, linkNode) {
                    if (linkNode == self) {
                        self.addClass('active');
                    }

                    $(linkNode).removeClass('active');
                });

                submenu.toggleClass('visible');
            });
        },
        loadTasks: function() {
            var TASKS_COUNT = 4,
                PATH = 'js/tasks/',
                EXTENSION = '.js',
                TASK_NAME = 'task',
                currentTask,
                fullPath;

            // LOADING SCRIPTS WITH AJAX
            for (currentTask = TASKS_COUNT; currentTask > 0; currentTask -= 1) {
                currentTask = currentTask < 10 ? '0' + currentTask : currentTask;
                fullPath = PATH + TASK_NAME + currentTask + EXTENSION;

                //console.info('Loading: ' + fullPath);
                $.getScript(fullPath, function(data, status){
                    //console.log(status);
                });
            }
        }
    };

    $(function() {
        taskHandler.loadTasks();
        taskHandler.init();
    });
});