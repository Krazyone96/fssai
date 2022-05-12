// creating an array and passing the nuimber, questions, options and answers

let questions = [
	{
	numb: 1,
	question: "What is the fat content of Low Fat Cream?",
	answer: "25.0%",
	options: [
		"15.0%",
		"25.0%",
		"40.0%",
		"60.0%"
	]
	},
	{
	numb: 2,
	question: "What is the fat content of Medium Fat Cream?",
	answer: "40.0%",
	options: [
		"60.0%",
		"25.0%",
		"15.0%",
		"40.0%"
	]
	},
	{
	numb: 3,
	question: "What is the fat content of High Fat Cream?",
	answer: "60.0%",
	options: [
		"25.0%",
		"60.0%",
		"15.0%",
		"40.0%"
	]
	},
];

for (let i = questions.length - 1; i>0; i--){
	let j = Math.floor(Math.random() * i)
	let k = questions[i]
	questions[i] = questions[j]
	questions[j] = k
	}
