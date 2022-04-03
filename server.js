let Discord = require("discord.js");
let Client = new Discord.Client();



Client.on("message", message => {

if (message.content === "ping") {

message.channel.send("pong")

}

})

Client.on("message", message => {

if (message.content === "!server") {

message.channel.send("go to theres server like and have fun https://discord.gg/JNSuh8UG")

}

})



Client.login("")
