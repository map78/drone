var Cylon = require('cylon');
var ws = require('nodejs-websocket');
var bot;

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .device("nav", {
        driver: "ardrone-nav",
        connection: "ardrone"
    })
    .on("ready", fly);
    
// Fly the bot
function fly(robot) {
    bot = robot;
    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff();
    after(5*1000, function () {
        bot.drone.left(0.1)
    });
    after(6*1000, function() {
        bot.drone.left(0)
    })
    after(6*1000, function () {
        bot.drone.front(0.1)
    });
    after(9*1000, function () {
        bot.drone.front(0)
    });
    after(9*1000, function() {
        bot.drone.right(0.1)
    });
    after(10*1000, function() {
        bot.drone.right(0)
    });
    after(10*1000, function() {
        bot.drone.back(0.1)
    });
    after(13*1000, function() {
        bot.drone.back(0)
    });
    after(13*1000, function() {
        bot.drone.left(0.1)
    });
    after(14*1000, function() {
        bot.drone.left(0)
    });
    after(14*1000, function() {
        bot.drone.land();
    });
    after(20*1000, function() {
        bot.drone.stop();
    });
}

Cylon.start();

//robot.drone.takeoff();

bot.nav.on("navdata", function(data) {
    console.log(data);
});

