
let mobilenet;
let dog;

function modelReady(){
    console.log("모델이 준비되었다.")
    mobilenet.predict(dog, gotResult);
}

function gotResult(err, results){

    console.log(results);

}

function imageReady(){
    
    image(dog, 0, 0);
}

function setup() 
{

    createCanvas(400, 400);
    background(255);


    dog = createImg("img/dog.jpg", imageReady);
    dog.hide();
    mobilenet = ml5.imageClassifier("mobileNet", modelReady);
    
}
  
  