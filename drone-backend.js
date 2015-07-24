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
        bot.drone.left(0.4)
    });
    after(5.4*1000, function() {
        bot.drone.left(0)
    })
    after(5.4*1000, function () {
        bot.drone.front(0.2)
    });
    after(8.5*1000, function () {
        bot.drone.front(0)
    });
    after(8.5*1000, function() {
        bot.drone.right(0.4)
    });
    after(9.5*1000, function() {
        bot.drone.right(0)
    });
    after(9.5*1000, function() {
        bot.drone.back(0.2)
    });
    after(11*1000, function() {
        bot.drone.back(0)
    });
    after(11*1000, function() {
        bot.drone.left(0.4)
    });
    after(11.5*1000, function() {
        bot.drone.left(0)
    });
    after(12*1000, function() {
        bot.drone.land();
    });
    after(14*1000, function() {
        bot.drone.stop();
    });
}

Cylon.start();

//robot.drone.takeoff();

bot.nav.on("navdata", function(data) {
    console.log(data);
});

