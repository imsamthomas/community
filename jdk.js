var GiantNotification = Class.create({
    initialize: function() {
        this.notice = $('magegiant_notice');
        this.iframe = $('magegiant_iframe');
        this.dashboard = $('magegiant_dashboard');
        this.domain = typeof ma_domain !== 'undefined' ? ma_domain : '1';
        this.version = typeof ma_version !== 'undefined' ? ma_version : 'default';
    },
    handleNotification: function(config) {
        if (this.notice) {
            this.notice.insert(config.message);
        }
        if (this.iframe) {
            this.iframe.insert(config.iframe);
        }
        if (this.dashboard) {
            this.dashboard.insert(config.dashboard);
        }
    },
    updateDashBoardTitle: function(title) {
        if (this.dashboard) {
            if (this.dashboard.up('div').down('h4')) {
                this.dashboard.up('div').down('h4').update(title);
            }
        }
    }
});
var notification = new GiantNotification();
var messages = [
          '<a href="https://goo.gl/QFvbvJ" target="_blank">Free download Reward Points System</a>', 
          '<a href="https://goo.gl/TZQ6Zj" target="_blank">Powerful Affiliate System</a>', 
          '<a href="https://goo.gl/j07pRj" target="_blank">Your store is slow? Speed up now</a>', 
          // '<a href="https://goo.gl/1h56cy" target="_blank">Boost sales for year-end season</a>',
           ];
var message = messages[Math.floor(Math.random() * messages.length)];
var iframe = '';
var dashboard = '<div class="giant-notify"></div>';
var giant_notification_config = {
    'message': message,
    'iframe': iframe,
    'dashboard': dashboard
}
notification.handleNotification(giant_notification_config);
