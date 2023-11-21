
const quiz = document.getElementById("quiz");
const start = document.getElementById("start");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const scoreContainer = document.getElementById("scoreContainer");


//the questions!
const questions = [
    {
        question : "Can a junior or novice be left unattended whilst in the gym?",
        choiceA : "Yes, if they know what they are doing",
        choiceB : "No - they are my full responsibility while using the facilities",
        choiceC : "Yes, once I have been signed off as a supervisor",
        correct : "B"
    },
    {
        question : "If supervising a junior/ novice, should you also be on the wall the same time as them?",
        choiceA : "Yes, it's more fun when you race them",
        choiceB : "No, the junior will get upset if you start doing your own thing",
        choiceC : "No, they are my full responsibility while in the centre",
        correct : "C"

    },
    {
        question : "Does the matting under the climbing walls prevent all injuries for a falling climber?",
        choiceA : "Yes, the matting is soft enough to break the fall",
        choiceB : "No, it doesn't prevent all injuries",
        choiceC : "Yes, that's what they are there for",
        correct : "B"

    },
    {
        question : "Where should you NOT leave spare gear and personal belongings (including drinks) and why?",
        choiceA : "On any parts of the mats",
        choiceB : "In the lockers, they might get stolen",
        choiceC : "In the car, I might need them later",
        correct : "A"

    },
    {
        question : "When two climbers are on the wall, which has 'right of way', the higher or the lower?",
        choiceA : "The higher one - they have less control of where they land if they fall unexpectedly",
        choiceB : "The lower one - they might cool down too much before they can climb again",
        choiceC : "The lower one - the higher one should know what is happening below them",
        correct : "A"

    },
    {
        question : "What is the safest way for your junior/ novice to get down from the top of a bouldering wall?",
        choiceA : "Jump from the top, the mats will catch them and juniors tend to be more agile",
        choiceB : "Let go of the holds and the rope will lower them down",
        choiceC : "Climb down slowly using any colour holds",
        correct : "C"

    },
    {
        question : "If you suspect your child/ novice has sustained an injury, what should you do at the centre?",
        choiceA : "Tell them to calm down and resolve the issue by yourself",
        choiceB : "Call emergency services straight away",
        choiceC : "Inform a member of staff, they are first aid trained and will know how to assess the situation",
        correct : "C"

    },
    //further questions
    {
        question : "How should your junior attempt to land on the matting?",
        choiceA : "On their feet, bending knees as they land and roll backwards",
        choiceB : "Straight on their backs",
        choiceC : "Straight on their bottom",
        correct : "A"

    },
    {
        question : "Name two common injuries that occur when climbing.",
        choiceA : "Panic attacks and freezing on the wall",
        choiceB : "Broken joints and sprains",
        choiceC : "Head concussions and going into shock",
        correct : "B"

    },
    {
        question : "How can you prevent such injuries from happening?",
        choiceA : "Eating well beforehand",
        choiceB : "Get myself first aid trained before climbing",
        choiceC : "Initiate a proper warm-up before beginning your session",
        correct : "C"

    },
    {
        question : "Name the three stages of a climbing specific warm-up.",
        choiceA : "Cardio, dynamic stretching, easy climbing",
        choiceB : "Exercise sets, rest, reps til failure",
        choiceC : "Hangboard exercises, easy climbing, projecting",
        correct : "A"

    },
    {
        question : "If you see a loose or broken hold, what should you do?",
        choiceA : "Hop off the climb immediately and ignore it",
        choiceB : "Hop off the climb immediately and repair it",
        choiceC : "Hop off the climb immediately and report it to a member of staff",
        correct : "C"

    },
    {
        question : "Which of these named holds is stressful on the fingers?",
        choiceA : "Jug - large, positive holds that are comfortable to grip",
        choiceB : "Crimp - small holds that can only support two or less fingerpads",
        choiceC : "Slopers - large sloped holds that can fit your entire hand/s",
        correct : "B"

    },
    {
        question : "How would you 'spot' a junior on the wall?",
        choiceA : "Look at them from a distance and wave until they see you",
        choiceB : "Hands up and ready to guide the falling climber feet first back onto the mats",
        choiceC : "Film the junior climbing but wait for them to climb into the frame before capturing",
        correct : "B"

    },
    {
        question : "When with juniors/ novices, why would you not use the training equipment (e.g. campus, hangboards and free weights) with them?",
        choiceA : "Their bodies are still growing and so starting intense conditioning early may lead to deformities",
        choiceB : "They will break the equipment",
        choiceC : "They can use it if they know what they are doing",
        correct : "A"

    }
    
    
];


//loop to render questions
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
let score = 0;

function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>"; //reformat this JSX syntax?
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
};

start.addEventListener("click", startQuiz);

function startQuiz () {
    start.style.display = "none"; //hides the "start assessment button"
    renderQuestion(); //launches function
    quiz.style.display = "inline-block"; //reveals the question
    // renderProgress();
    // renderCounter();
    // timer = setInterval(renderCounter, 1000);
}




//render progress
// function renderProgress() {
//     for(let qIndex = 0; qIndex <= lastQuestion; qIndex ++) { //reformat counter?
//         progress.innerHTML += "<div class='prog' id='+ qIndex +'></div>";
//     }
// };



//counter render
function renderCounter() {
    if(count <= questionTime) {
        counter.innerHTML = count;
        // timeGauge.style.width = count * gaugeUnit + "px";
        count++;
    } else {
        count = 0;
        // answerIsWrong();
        if(runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            clearInterval(timer);
        }
    }
};

//check answer - 32:13 mins
function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        score++;
        //change progress bar to green
        // answerIsCorrect();
    }
    count = 0;
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        //end quiz and show score
        // clearInterval(timer);
        scoreRender();
    }
}

// function answerIsCorrect(){
//     runningQuestion.style.backgroundColor = 'green';
// }

// function answerIsWrong(){
//     runningQuestion.style.backgroundColor = 'red';
// }

//score render
function scoreRender(){
    scoreContainer.style.display = "block";

    const scorePercent = Math.round(100 * score/questions.length);
    let img = (scorePercent >= 80) ? "img/5.png" :
    (scorePercent >= 60) ? "img/4.png" :
    (scorePercent >= 40) ? "img/3.png" :
    (scorePercent >= 20) ? "img/2.png" :
    "img/1.png";

    scoreContainer.innerHTML = "<img src="+ img +">";
    scoreContainer.innerHTML = "<p>" + scorePercent + "%</p>";
}