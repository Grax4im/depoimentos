// local reviews data
const reviews = [
  {
    id: 1,
    name: "Suzana Cristina",
    job: "desenvolvedora web",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Roberta Oliveira",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Willian Marques",
    job: "estagiário",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "João da Silva",
    job: "chefe",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag,  marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.fa-chevron-left')
const nextBtn = document.querySelector('.fa-chevron-right')
const surpriseMe = document.querySelector('.random-btn')

//set starting item

let currentItem = 0;

function setData(currentItem) {
  img.src = reviews[currentItem].img;
  author.textContent = reviews[currentItem].author;
  job.textContent = reviews[currentItem].job;
  info.textContent = reviews[currentItem].text;
}

prevBtn.addEventListener('click', function() {
  if(currentItem === 0) {
    currentItem = reviews.length-1;
  }
  else {
    currentItem--;
  }
  setData(currentItem);
})

nextBtn.addEventListener('click', function() {
  if(currentItem === reviews.length-1) {
    currentItem = 0;
  }
  else {
    currentItem++;
  }
  setData(currentItem);
})

surpriseMe.addEventListener('click', function() {
  currentItem = randomNumber();
  setData(currentItem);
  console.log(currentItem);
})

function randomNumber() {
  return Math.floor(Math.random() * reviews.length);
}

window.onload(setData(0));
