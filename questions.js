// creating an array and passing the nuimber, questions, options and answers

let questions = [
	{
	numb: 1,
	question: "What is the fat content of Low Fat Cream?",
	answer: "25.0%",
	options: [
		"15%",
		"25.0%",
		"40.0%",
		"60.0%"
	]
	},
	{
	numb: 2,
	question: "What is the fat content of Medium Fat Cream?",
	answer: "forty percent",
	options: [
		"fifteen percent",
		"twenty five percent",
		"forty percent",
		"sixty percent"
	]
	},
	{
	numb: 3,
	question: "What is the fat content of High Fat Cream?",
	answer: "sixty percent",
	options: [
		"fifteen percent",
		"twenty five percent",
		"forty percent",
		"sixty percent"
	]
	},
];

for (let i = questions.length - 1; i>0; i--){
	let j = Math.floor(Math.random() * i)
	let k = questions[i]
	questions[i] = questions[j]
	questions[j] = k
	}
