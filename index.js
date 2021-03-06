var Bunyan = require("bunyan")
var path = require("path")

module.exports = function(plasma, dna){
  var bunyan
  if(!dna.bunyanInit)
    bunyan = Bunyan.createLogger(this.referenceBunyanStreams(dna.bunyan || {}))
  else {
    var fn = require(path.join(process.cwd(),dna.bunyanInit))
    if(fn.length == 2)
      bunyan = fn(plasma, dna)
    else
      fn(plasma, dna, function(err, result){
        bunyan = result
      })
  }
  if(dna.reactOn)
    plasma.on(dna.reactOn, function(c){
      if(c.method == "log")
        c.method = "info"
      bunyan[c.method].apply(bunyan, c.arguments)
    })
}

module.exports.prototype.referenceBunyanStreams = function(options) {
  if(options.streams) {
    for(var i = 0; i<options.streams.length; i++) {
      if(options.streams[i].stream == "process.stdout")
        options[i].stream = process.stdout
      if(options.streams[i].stream == "process.stderr")
        options[i].stream = process.stderr
    }
  }
  if(options.stream == "process.stdout")
      options.stream = process.stdout
  if(options.stream == "process.stderr")
      options.stream = process.stderr
  return options
}