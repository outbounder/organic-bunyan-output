describe("organic-console-bunyan-output", function(){
  var Plasma = require("organic-plasma")
  var Organel = require("../index")

  var plasma = new Plasma()

  it("creates and invokes bunyan methods", function(){
    var instance = new Organel(plasma, {
      reactOn: "output", 
      bunyan: { name: "TEST" }
    })
    plasma.emit({
      type: "output",
      method: "log",
      arguments: ["test"]
    })
  })
})