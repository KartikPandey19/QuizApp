const quiz_data =[
    {
        question: 'Who is the president of India',
        a:'Arvind Kejriwal',
        b:'Narendra Modi',
        c:'Ram Nath Kovind',
        d:'Amit Shah',
        Correct_Answer: 'b'
    },{
        question: 'which one of the following is not the wonders of the world',
        a: 'Taj Mahal',
        b: 'Christ The Reedemer',
        c: 'Pyramid of Giza',
        d: 'The Niagra Fall',
        Correct_Answer:'d'
    },{
        question : 'The longest river of the world is',
        a:'Nile',
        b:'Amazon River',
        c:'Ganges',
        d:'Yammuna',
        correct_Answer:'a'
    },{
        question : 'Who is the president of USA',
        a:'Barack Obama',
        b:'Donald Trump',
        c:'Joe Biden',
        d:'Henry Clinton',
        correct_Answer:'c'
    },{
        question : 'Who is the president of India',
        a:'Arvind Kejriwal',
        b:'Narendra Modi',
        c:'Ram Nath Kovind',
        d:'Amit Shah',
        Correct_Answer: 'c'
    },{
        question : 'Where is Christ The Reedemer Situated',
        a:'Brazil',
        b:'India',
        c:'USA',
        d:'ARGENTINA',
        Correct_Answer: 'a'
    }
]

const questionE = document.getElementById('questionText');
const a_text = document.getElementById("a_text");
const a_text = document.getElementById("b_text");
const a_text = document.getElementById("c_text");
const a_text = document.getElementById("d_text");

let currentQuestion =0;

loadQuiz();

function loadQuiz() {


    currentQuestion++;
}