// LaunchBar Action Script
include('date-format.js');

function run() {
    items = [
    {
        title: 'Selection',
        icon: 'Selection',
        action: 'capture'
    },
    {
        title: 'Window',
        icon: 'Window',
        action: 'capture'
    },
    {
        title: 'Fullscreen',
        icon: 'Fullscreen',
        action: 'capture'
    }];
    return items;
}

function capture(item) {
    LaunchBar.executeAppleScript('tell application "LaunchBar" to hide');

    var d = new Date();
    var df = d.format("yymmddHHMMss");
    var path = LaunchBar.homeDirectory + '/Downloads/' + df + '.png';

    if (item.title === 'Selection') {
        LaunchBar.execute('/usr/sbin/screencapture', '-i', path);
    } else if (item.title === 'Window') {
        LaunchBar.execute('/usr/sbin/screencapture', '-iW', path);
    } else if (item.title === 'Fullscreen') {
        LaunchBar.execute('/usr/sbin/screencapture', path);
    }

    LaunchBar.openCommandURL('select?file='+encodeURIComponent(path));
}