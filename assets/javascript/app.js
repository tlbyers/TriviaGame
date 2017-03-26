var currentQuestion=0;
var score=0;
var rightAnswers =0;
var wrongAnswers =0;
var timeLeft=20;
var clock=document.getElementById("counter");
var timerId=setInterval(countdown, 1000);
var corrAns=""

var Container=document.getElementById(" ");

var question=document.getElementById("question");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var nextButton=document.getElementById("nextButton");
var quizCont=document.getElementById("quizContainer");
var resultCont=document.getElementById("result");
var rAnswer=document.getElementById("rAnswer");
var wAnswer=document.getElementById("wAnswer");



//10 questions - 10 correct answers - 30 incorrect answers - 
//4 answers per question to choose from 
var questions = [
	 
						{   "question": "The word 'chocolate' originates from the word 'xocolatl' which means what?",
							"option1": "Bitter Seed",
						    "option2": "Bitter Plant",
						    "option3": "Bitter Earth",
						    "option4": "Bitter Water",
						    "answer": "4",
						},
		
					    {
							"question": "Which country is the 2nd largest producer of cocoa beans after Ivory Coast?",
							"option1": "Indonesia",
							"option2": "Ecuador",
						    "option3": "Brazil",
						    "option4": "Ghana",
						    "answer": "4",


						},

						{
							"question": "Which type of chocolate is considered good for your health?",
							"option1": "Dark",
							"option2": "Milk",
						    "option3": "Semisweet",
						    "option4": "White",
						    "answer": "1",
						},

						{
							"question":  "In Belgium, which form of chocolate is added to steamed milk to make ʻchocolat chaudʼ?",
							"option1": "Chocolate liquor",
                            "option2": "Chocolate power",
						    "option3": "Chocolate squares",
						    "option4": "Chocolate chips",
						    "answer": "4",
						},

						{
							"question":  "Which Cadburyʼs brand of chocolate had the famous slogan ʻA glass and a half in every half poundʼ?",
							"option1": "Milk Tray",
                            "option2": "Dairy Milk",
						    "option3": "Eclairs",
						    "option4": "Bournville",
						    "answer": "2",
						},

						{
							"question": "In what year was Godiva Chocolatier founded?",
							"option1": "1906",
                            "option2": "1916",
						    "option3": "1926",
						    "option4": "1936",
						    "answer": "3",
						},

						{
							"question": "Which character was the second to be disqualified in ʻCharlie and the Chocolate Factoryʼ?",
							"option1": "Augustus Gloop",
                            "option2": "Violet Beuregarde",
						    "option3": "Mike Teavee",
						    "option4": "Veruca Salt","rightAnswer": "Violet Beuregarde",
						    "answer": "2",
						},

						{
							"question": "ʻLong flakes of milk chocolate covered in chocolate coatingʼ describes which chocolate bar?",
							"option1": "Twirl",
							"option2": "Whip",
						    "option3": "Flake",
						    "option4": "Wispa","rightAnswer": "Twirl",
						    "answer": "1",

						},

						{
							"question": "Which other ingredient is added to Delafee Chocolates?",
							"option1": "Pepper",
							"option2": "Caviar",
						    "option3": "Gold",
						    "option4": "Hemp",
						    "answer": "3",

						},

						{
							"question": "Thanks to its distinct regional flavors, chocolate is often likend to what?",
							"option1": "Coffee",
							"option2": "Wine",
						    "option3": "Cigars",
						    "option4": "Whiskey",
						    "answer": "2",

						}


						]
			
var totQuestions=questions.length;

//upon clicking the start button, button disappears
$("#start").click(function(){
$("#start").remove();
$("#quizContainer").show();
loadQuestion(currentQuestion);
$("#counter").show();

})

//restart game 
function start(){
    countdown();
	$("#result").hide();
	$("#quizContainer").show();
	$("#counter").show();
	currentQuestion=0;
	score=0;
	rightAnswers =0;
	wrongAnswers =0;
	timeLeft=20;
	loadQuestion(currentQuestion);

}

//timer function

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);

    $("#counter").hide();
    $("#quizContainer").hide();
    $("#buzzer").show();
    setTimeout(function(){ $("#buzzer").slideUp(5000);});
    $("outOfTime").show();
    setTimeout(function(){ $("#outOfTime").slideDown(6000);});
  
       
   }
  else {
    counter.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}

//loads question and options to screen

function loadQuestion(questionIndex){

	var q=questions[questionIndex];
	 	question.textContent=(questionIndex+1) + " . " + q.question;

	 		opt1.textContent=q.option1;
	 		opt2.textContent=q.option2;	 		
	 		opt3.textContent=q.option3;
	 		opt4.textContent=q.option4;
		 	
};

//compare answer selected


function loadNextQuestion(){
	var selectedOption=document.querySelector("input[type=radio]:checked");

		var answer=selectedOption.value;
			if (questions[currentQuestion].answer==answer){

				console.log(answer);
				rightAnswers+=1;
				$("#counter").hide();
				$("#quizContainer").hide();
				$("#right").show();
				$("#right").hide(3000);
				$("#quizContainer").show();
				$("#counter").show(5000);
				
			 }

			 if (questions[currentQuestion].answer!=answer){
				wrongAnswers+=1;
                 
             
           
				$("#counter").hide();
				$("#quizContainer").hide();
				$("#wrong").show();
				$("#wrong").hide(3000);				
				$("#quizContainer").show();
				$("#counter").show(5000);
		
			 }

			
			 
        //unclick radio button
		selectedOption.checked=false;
		timeLeft=22;
			currentQuestion++;
			
						
		if(currentQuestion==totQuestions){


						
			$("#quizContainer").hide();
			$("#counter").hide();
			$("#result").show();			
			rAnswer.textContent="You answered  " + rightAnswers +" correctly";	
			wAnswer.textContent="You answered  " + wrongAnswers +" incorrectly";

			return;
}



loadQuestion(currentQuestion);

}


