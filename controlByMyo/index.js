'use strict'
const MYO=require('myo')
const WebmoWs=require("webmo-client").ws
const motor=new WebmoWs("webmo.local")

MYO.connect()

MYO.on('connected', function(data, timestamp){
    console.log('connected!')
})
motor.onopen = () => {
}
MYO.on('double_tap', function(){
  motor.rotate(90)
  setTimeout(() => { motor.stop() }, 2000)
});
