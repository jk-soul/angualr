/**
 * Created by Lannister on 2014/12/25.
 */

var fn1 = function (num, callback) {
  setTimeout(function () {
    callback(null, num * num)
  }, 1000)
};
var fn2 = function (num, callback) {
  setTimeout(function () {
    callback(null, num * num * num)
  }, 1000)
};
var cb = function (err, result) {
  fn2(result,function(err,t){
    console.log(t)
  })
};

fn1(2, cb);