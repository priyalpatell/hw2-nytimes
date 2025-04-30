// src/content.ts

// data object {section, headline, snippet, image, caption}
const article1 = {
    section: "main",
    headline:'Peanut the Cat Takes Over The World',
    snippet:'Peanut has taken over the world with an overwhelming ,force of cuteness. And she doesn\'t even know it.',
    image:'src/assets/peanut.png', 
    caption:'A cute picture of a cat'
  };
  const article2 = {
    section: "main",
    headline:'Peanut\'s Yawn Boosts the Economy',
    snippet:'Amazon is crashing because people are not walking, running to Peanut\'s blanket site!',
    image: null,
    caption: null
  };
  const article3 = {
    section: "left",
    headline:'Bubble is Running for President 2026',
    snippet:'A sudden career change takes the world by surprise. A cat to president?',
    image: 'src/assets/bubble.png',
    caption: 'A cat raising its left paw'
  };

  const article4 = {
    section: "left",
    headline:'Best Eat to Spring in Places',
    snippet:'Wondering eat to where? This will get compiled list to you guide.',
    image: 'src/assets/food.png',
    caption: 'A huge plate of sushi.'
  };

  const article5 = {
    section: "right",
    headline:'5 Ways to Get Your Human to Feed You More',
    snippet:'1. Yell at them until they notice you. 2. Eat fast then yell some more. 4. Accept that they think you are too fat.',
    image: null,
    caption: null
  };

  const article6 = {
    section: "right",
    headline:'How to Tell if You\'re a Cat',
    snippet:'Sometimes you just can\'t tell. Here are what to look for. 1. Do you have ears on the top of...',
    image: 'src/assets/cat.png',
    caption: 'A cat\'s leg extended'
  };

  const article7 = {
    section: "right",
    headline:'Picnic or Outdoor Tea, Mosquito or Flies in Your Cup',
    snippet:'Tea time gone worm? Spike in mosquito population leaves tea time with bugs that cannot be resolved',
    image: null,
    caption: null
  };

  export const articles = [article1, article2, article3, article4, article5, article6, article7];