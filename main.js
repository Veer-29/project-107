function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/E8VxwmMff/model.json',modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}
