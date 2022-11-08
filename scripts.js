var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');


function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
    nextQuestion(2)
    growProgressBar('20%')
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
    nextQuestion(3);
    growProgressBar("30%");
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
    nextQuestion(4);
    growProgressBar("50%");
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
    nextQuestion(5);
    growProgressBar("65%");
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
    nextQuestion(6);
    growProgressBar("80%");
})
question_six.addEventListener('click', function(event){
    storeAnswer(6, event)
    nextQuestion(7);
    growProgressBar("90%");
})
question_seven.addEventListener('click', function(event){
    storeAnswer(7, event)
    nextQuestion(8);
    growProgressBar("100%");
})
question_eight.addEventListener('click', function(event){
    storeAnswer(8, event)
})

submit8.addEventListener('click', function(){
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function totalScore(){
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+
    answers.question5+
    answers.question6+
    answers.question7+
    answers.question8;
   
    
    return total_score;
}

function getInfoBasedOnScore(){
    if(totalScore() < 7){
        var score_info = "Você precisa se orientar mais sobre os cuidados com a raiva!";
    } else if(totalScore() > 7){
        var score_info = "Parabéns! Você está ciente dos cuidados sobre a raiva!"
    }

    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');


function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}






function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}