let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//some variables to set max frame rate later
let fps = 30;
let framMinTime = (1000/60)*(60/fps)- (1000/60)*0.5
let lastFrameTime = 0


let theta = 0
let iota = 90
let kappa = 180
let lambda = 270 
let drawCircles = () =>{
    
    ctx.beginPath()
    ctx.arc(canvas.width/2 + ((100*Math.sin(0.5*theta)) * Math.cos(theta)), canvas.height/2 + ((100*Math.sin((1/2)*theta)) * Math.sin(theta)), 10,0, 2*Math.PI)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(canvas.width/2 + ((100*Math.sin(0.5*theta)) * Math.sin(theta)), canvas.height/2 + ((100*Math.sin((1/2)*theta)) * Math.cos(theta)), 10,0, 2*Math.PI)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(canvas.width/2 + ((100*Math.sin(0.5*iota)) * Math.cos(iota)), canvas.height/2 + ((100*Math.sin((1/2)*iota)) * Math.sin(iota)), 10,0, 2*Math.PI)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(canvas.width/2 + ((100*Math.sin(0.5*iota)) * Math.sin(iota)), canvas.height/2 + ((100*Math.sin((1/2)*iota)) * Math.cos(iota)), 10,0, 2*Math.PI)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(canvas.width/2 + ((100*Math.sin(0.5*kappa)) * Math.cos(kappa)), canvas.height/2 + ((100*Math.sin((1/2)*kappa)) * Math.sin(kappa)), 10,0, 2*Math.PI)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(canvas.width/2 + ((100*Math.sin(0.5*lambda)) * Math.sin(lambda)), canvas.height/2 + ((100*Math.sin((1/2)*lambda)) * Math.cos(lambda)), 10,0, 2*Math.PI)
    ctx.closePath()
    ctx.fill()
    theta += 0.08
    iota += 0.08
    kappa += 0.08
    lambda += 0.08
}

let animate = (time) =>{
    if(time-lastFrameTime < framMinTime){
        requestAnimationFrame(animate)
        return
    }
    lastFrameTime = time
    ctx.clearRect(0,0,canvas.width, canvas.height)
    drawCircles();
    requestAnimationFrame(animate)
}
animate()