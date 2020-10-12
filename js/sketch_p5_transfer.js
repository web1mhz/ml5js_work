
let mobilenet;
let dog;
let dog_btn;
let cat_btn;
let predict_btn;
const resultTable = document.querySelector(".result-table");

function modelReady(){

    console.log("모델이 준비되었다.")    
    predict_btn.mousePressed(predict);    
   
}

function predict(){

    // alert("버튼클릭")
    mobilenet.predict(dog, 5, gotResult);    

}

function gotResult(err, results){
    
    console.log(results);

    results.forEach((result) => {
        console.log(result.label, ":",  result.confidence);
        resultTable.innerHTML += `
        <ul> 
            <li>${result.label} : ${(result.confidence * 100).toFixed(2)}%</li>
        </ul>
        `;
      })
}

function imageReady(){    
    image(dog, 0, 0, width, height);
    
}

function setup() {

    createCanvas(400, 400);
    background(255);    

    dog = createImg("img/dog.jpg", imageReady);
    dog.hide();

    dog_btn = createButton("개");
    cat_btn = createButton("고양이");
    predict_btn = createButton("분류");

    

    mobilenet = ml5.imageClassifier("mobileNet", modelReady);

    
}
  