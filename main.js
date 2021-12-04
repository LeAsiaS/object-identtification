img="";

function preload(){
   img=loadImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.ca%2Fpin%2F675328906625607617%2F&psig=AOvVaw3YjYA4ZEp_z43pztbrmiQW&ust=1637598998047000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDrgebxqfQCFQAAAAAdAAAAABAE');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:Detecting Objects";
}

function modelLoaded(){
console.log(modelLoaded);
status=true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.log(error);
}
console.log(results);
}

function draw(){
    
}