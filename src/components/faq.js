import React from 'react'

const q = [
  {
    id: 1,
    question: 'Which wallet should I use?',
    answer: 'NamiWallet, Yoroio, Daedalus. Never send ADA from an exchange!'
  },
  {
    id: 2,
    question: 'Question 2',
    answer: 'Answer 1'
  },
  {
    id: 3,
    question: 'What levels of rarity exist within the SmartSnakes?',
    answer: 'Answer 1'
  },
]
  

  export default function FAQ() {
  return (
    <div class="my-16">
     {q.map((q) => (
    <div tabindex="0" class="collapse max-width collapse-plus"> 
      <div class="collapse-title text-xl font-medium">
              {q.question}
          </div> 
          <div class="collapse-content"> 
          {q.answer}
          </div>
   </div> 
      ))}  
 </div>
   )
  }