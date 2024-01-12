myApp.service("AlertService", ["$timeout", function ($timeout) {
    class AlertService {
        static show(locale) {
            $timeout(() => {
                $(locale).removeClass('visible');
            }, 3000)
            $(locale).addClass('visible');
        }
    }

    return AlertService;
}]);