/**
 * Created by Lannister on 2014/5/14.
 */
//function Hello(){
//    var name;
//    this.setName = function(thyName) {
//        name = thyName;
//    };
//    this.sayHello = function() {
//        console.log('Hello ' + name);
//    };
//}
//exports.Hello = Hello;

function Hello(){
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
}
module.exports = Hello;
