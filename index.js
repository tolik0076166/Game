const facts = [
	{
		image: "https://supersimple.com/wp-content/uploads/i-have-a-pet-1080-740.jpg",
		text: "I have a pet."
	},
	{
		image: "https://dk-flow-cdn.clio.me/a78dc8fa006ec1236377ffe651d4f36e8778d84a/3d0847af604e41f0e7ba28de60b7012a1aca8483.jpg",
		text: "I live in a house."
	},
	{
		image: "https://www.wikihow.com/images/thumb/1/16/Know-if-You-Can-Sing-Step-10.jpg/v4-460px-Know-if-You-Can-Sing-Step-10.jpg.webp",
		text: "I can sing well."
	}, 
	{
		image: "https://cdn.pixabay.com/photo/2013/07/12/18/09/tea-153067_960_720.png",
		text: "I drink tea without sugar."
	},
	{
		image: "https://img.freepik.com/premium-vector/little-girl-eat-sweet-cake-feel-happy_97632-6116.jpg?w=2000",
		text: "I usually eat a peace of cake for breakfast."
	},
	{
		image: "https://media.istockphoto.com/id/953728390/vector/children-going-to-school-cartoon.jpg?s=170667a&w=0&k=20&c=Qv3lcWC8N88-yYf_hYtX7IUvqiky3HuKeBwYy-MP1_A=",
		text: "Yesterday I was at school."
	},
	{
		image: "https://us.123rf.com/450wm/nataliaomsk/nataliaomsk2204/nataliaomsk220400154/185578057-thirteen-number-isolated-illustration-for-decoration.jpg?ver=6",
		text: "I'm thirteen."
	},
	{
		image: "https://cdn1.byjus.com/wp-content/uploads/2019/12/my-favourite-subject-essay.png",
		text: "My favourite subject at school is Maths."
	},
	{
		image: "https://static.vecteezy.com/system/resources/previews/002/391/043/non_2x/online-learning-concept-with-cartoon-character-vector.jpg",
		text: "I like studying online."
	},
	{
		image: "https://img.freepik.com/premium-vector/girl-flying-cute-airplane-sky_1639-37532.jpg",
		text: "I have never flown by plane."
	},
	{
		image: "https://i.pinimg.com/600x315/cf/4e/c0/cf4ec0f1cd566491fe962ed9d2f68d67.jpg",
		text: "I want to become a doctor."
	},
	{
		image: "https://cdn.shopify.com/s/files/1/1134/2550/products/kids-cartoon-world-map-with-animals-printed-picture-photo-roller-blind-rb786-photo-roller-blinds-art-fever-255402.jpg?v=1659252356&width=1445",
		text: "I have travelled to many countries."
	},
	
];


let trueAnswers = [];
let falseAnswers = [];

const factImage = document.getElementById("fact-image");
const factText = document.getElementById("fact-text");
const trueButton = document.getElementById("true-button");
const falseButton = document.getElementById("false-button");
const trueList = document.getElementById("true-list");
const falseList = document.getElementById("false-list");

function generateFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomIndex];
  factImage.src = fact.image;
  factText.textContent = fact.text;
  facts.splice(randomIndex, 1);
}

function handleAnswer(answer) {
  if (answer === "true") {
    trueAnswers.push(factText.textContent);
  } else if (answer === "false") {
    falseAnswers.push(factText.textContent);
  }
  if (facts.length === 0) {
    showResults();
  } else {
    generateFact();
  }
}

function showResults() {
	for (let answer of trueAnswers) {
	  const listItem = document.createElement("li");
	  listItem.textContent = answer;
	  document.getElementById("true-list").appendChild(listItem); 
	}
	for (let answer of falseAnswers) {
	  const listItem = document.createElement("li");
	  listItem.textContent = answer;
	  document.getElementById("false-list").appendChild(listItem); 
	}
	document.getElementById("fact-container").style.display = "none";
	document.getElementById("answer-buttons").style.display = "none";
	document.getElementById("results-container").style.display = "block";
  
	var trueHeader = document.querySelector('.true-header');
	var falseHeader = document.querySelector('.false-header');
  
	trueHeader.style.display = 'block';
	falseHeader.style.display = 'block';
}

generateFact();

trueButton.addEventListener("click", function() {
  handleAnswer("true");
});

falseButton.addEventListener("click", function() {
  handleAnswer("false");
});



  
  


