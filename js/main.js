// Variables for user input
const adj1=document.getElementById("adj1");
const noun1=document.getElementById("noun1");
const adj2=document.getElementById("adj2");
const clothing=document.getElementById("clothing");
const bodyPart=document.getElementById("bodyPart");
const verb1=document.getElementById("verb1");
const food=document.getElementById("food");

// Variable for the form
const form = document.querySelector('form');

//Variable for the mad lib story
const stories = [ 'My friends and I started a secret club! We meet every day by the <b>${adj1}</b> <b>${noun1}</b>. Our club has some very special rules. If you want to join, you have to wear a <b>${adj2}</b> <b>${clothing}</b> on your <b>${bodyPart}</b>. You are not allowed to <b>${verb1}</b> during meetings, and you can only eat <b>${food}</b> for your meals. If you are interested in joining, let me know!',
"A <b>${adj1}</b> cat sat on the <b>${noun1}</b> looking <b>${adj2}</b> in its stylish <b>${clothing}</b>. Suddenly, the cat's <b>${bodyPart}</b> started to <b>${verb1}</b> and it became clear that it was hungry.  The cat's owner quickly got up to prepare some <b>${food}</b> for the feline, who eagerly devoured the tasty meal.  Satisfied and full, the cat purred contentedly on the windowsill.",
'One <b>${adj1}</b> summer day, a <b>${noun1}</b> in a <b>${clothing}</b> was <b>${verb1}</b> througha field of <b>${food}</b> when suddenly, a bee stung him on the <b>${bodyPart}</b>. The <b>${adj2}</b> pain made him cry out, and he fell to the ground. The pain gradually subsided and he was able to get up and continue on his way, feeling grateful for the small things in life that often go unnoticed.',
'The <b>${adj1}</b> dog with the <b>${adj2}</b> fur was wearing a <b>${clothing}</b> and licking his <b>${bodyPart}</b> while staring hungrily at the plate of <b>${food}</b> on the table. Suddenly, he <b>${verb1}</b> towards the table and snatched the <b>${food}</b> in his mouth, happily devouring it while wagging his tail.'
];
const randomIndex = Math.floor(Math.random() * stories.length);
const story = stories[ randomIndex ];

function handleSubmit(event) {
  event.preventDefault();

  if (adj1.value == "") {
    alert(`${adj1.name} must be filled out!`);
    adj1.focus();
  } else if (noun1.value == "") {
    alert(`${noun1.name} must be filled out!`);
    noun1.focus();
  } else if (adj2.value == "") {
    alert(`${adj2.name} must be filled out!`);
    adj2.focus();
  } else if (clothing.value == "") {
    alert(`${clothing.name} must be filled out!`);
    clothing.focus();
  } else if (bodyPart.value == "") {
    alert(`${bodyPart.name} must be filled out!`);
    bodyPart.focus();
  } else if (verb1.value == "") {
    alert(`${verb1.name} must be filled out!`);
    verb1.focus();
  } else if (food.value == "") {
    alert(`${food.name} must be filled out!`);
    food.focus();
  }
  else {
    madLibStoryDisplay();
  }
}

function madLibStoryDisplay () {
  // Variable to display the mad lib
  const madLibDisplay = document.querySelector('.mad-lib');

  madLibDisplay.innerHTML = story
    .replace('${adj1}', adj1.value)
    .replace('${noun1}', noun1.value)
    .replace('${adj2}', adj2.value)
    .replace('${clothing}', clothing.value)
    .replace('${bodyPart}', bodyPart.value)
    .replace('${verb1}', verb1.value)
    .replace('${food}', food.value);
}

var submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', handleSubmit);
