img = " ";
status = " ";
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";

}

function modelLoaded()
{
    console.log("Model is Loaded and Intialized!!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function preload()
{
   img = loadImage("Bedroom.jpg");
}

function draw()
{
    image (img, 0 , 0 , 640, 420);
}
function gotResult(error, results)
{
   if(error)
   {
    console.log(error);
   }
   else
   {
    console.log(results);
    objects = results;
   }
}