import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'


function App() {
  const [solution, setSolution] = useState("academy")
  const [website, setWebsite] = useState(null)

  useEffect(() => {
    fetch('db.json')
      .then(res => res.json())
      .then(json => {
        // random int between 0 & 14
        //<img src= {website} alt = "Clue" /> 
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        console.log(randomSolution)
        setSolution(randomSolution.word)
        setWebsite(randomSolution.url)
        
      })
  }, [setSolution, website]) 


  return (
    <div className="App">
      <h1>The AI Art Game</h1>
    
       <img src= "https://mj-gallery.com/f7036951-2736-4523-8f0f-e214ae40a29d/grid_0.png" alt = "Clue" /> 
     
      
      {solution && <Wordle solution="Good Luck" />}
    </div>
  )
}

export default App

/* 

data we need to track:
  -- solution
    -- 5 letter string, e.g. 'drain'
  -- past guesses
    -- an array of past guesses
    -- each past guess is an array of letter objects [{}, {}, {}, {}, {}]
    -- each object represents a letter in the guess word {letter: 'a', color: 'yellow'}
  -- current guess
    -- string 'hello'
  -- keypad letters
    -- array of letter objects [{key: 'a', color: 'green'}, {}, {} ...]
  -- number of turns
    -- an integer 0 - 6

game process:
  -- entering words:
    -- user enters a letter & a square is filled with that letter
    -- when a user hits delete it deletes the previous letter
    -- when a user hits enter it submits the word
      -- if all squares are not filled with letters then the word is not submitted
      -- if that word has already been used in a prev guess then the word is not submitted
  -- checking submitted words:
    -- each letter is checked to see if it matches to the solution
    -- each letter is assigned a color based on it's inclusion in the solution
      -- exact matches (correct position in the solution) are green
      -- partial matches (in the solution but not the correct position) are yellow
      -- none-matches (not in the solution at all) are grey
    -- the guess is added the grid with the correct colors
    -- the current guess moves to the next row
    -- the keypad letters are updated (colors)
  -- ending the game:
    -- when the guessed word fully matches the solution
      -- modal to say 'well done'
    -- when the user runs out of guesses
      -- modal to say 'unlucky'

*/