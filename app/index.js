'use strict';

var httpProxy = require('http-proxy');
var fs = require('fs');

var proxy = httpProxy.createProxy();
var options = fs.readFileSync('/home/ubuntu/apps/code/proxy/app/proxy.json');
options = JSON.parse(options);

require('http').createServer(function(req, res){

  try{
    proxy.web(req, res, {target: options[req.headers.host]}, function(e){});
  }catch(e){}

}).listen(3000);

