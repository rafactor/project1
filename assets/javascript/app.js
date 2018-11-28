/* 
* LIST OF ALL QUESTIONS
*/

var question = [
    {
    'question': "Question 1",
    'alternatives' : ['answer a','answer b','answer c'],
    'answer': 'answer b'},
    {
    'question': "Question 2",
    'alternatives' : ['answer a','answer b','answer c'],
    'answer': 'answer a'},
    {
        'question': "Question 3",
        'alternatives' : ['answer a','answer b','answer c'],
        'answer': 'answer c'}, 
]

/* 
* Create the HTML Structure
*/

// Global variables
var numberOfQuestions = 10; //number of questions that the user will answer
var questionNumber = 0;
var rightAnswers = 0;
var wrongAnswers = 0;
var wrapper = $('.container')
var category = 'Test Category'
var question = 'What is the correct answer for this question?'

var build = {
    landing(){
       
        var $start = $('<div>');
        wrapper.html('<div class="container"><div class="row align-items-center"><div class="col-sm"><button type="button" class="btn btn-primary btn-lg ">Press Start</button></div></div></div>')
        wrapper.append($start);
        console.log('end');
},

    card() {
        let $card = $('<div>');
        $card.addClass('card text-center');
        $container.append($card);

        let $category = $('<div>');
        $category.addClass = $('card-header');
        $category.text(category);
        $card.append($category);

        let $body = $('<div>');
        $body.addClass('card-body');
        $card.append($body)

        let $title = $('<h5>');
        $title.text(question);
        $body.append($title);

        let $list = $('<div>');
        $list.addClass('list-group');
        $body.append($list);

        let $button = $('div');
        $button.html('<div class="text-right">' +
                    '<a href="#" class="btn btn-primary text-right">Next</a></div>')
        $body.append($button);

        let $footer = $('footer');
        $footer.addClass('card-footer text-muted');
        $body.append($footer);
},
}

// Create the initial screen with the start button

// Create the listener for the start button


// Build the template with question, alternatives and timer

// create the timer

// Populate the template with the first question, alternatives and timer

// create the listener for the response

// Compare the user response with the question answer

// Timer function that will mark the question as wrong if the timer is over

// Calculate the score (right and wrong)

// Update the screen accordingly to the response (right or wrong)

// check if there is another question to be shown. 

// If yes, show a button to show the right answer or load it right away

// if not, show the final score


build.landing();