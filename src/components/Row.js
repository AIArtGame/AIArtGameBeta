import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'


export default function Row({ guess, currentGuess, solution}) {
console.log(solution)
  
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>{l.key}</div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">{letter}</div>
        ))}
        {[...Array(solution.length - letters.length)].map((_,i) => (
          <div key={i}></div>
        ))}
      </div>
    )
  }




/*
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    
    </div>
  )
*/



  if (solution.length === 4) {
    console.log("444444444444444444")
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
     
    </div>
  )
  }


  if (solution.length === 5) {
    return (
      <div className="row">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      
      </div>
    )
    }


    if (solution.length === 6) {
      return (
        <div className="row">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          
        </div>
      )
      }


      if (solution.length === 7) {
        return (
          <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )
        }


        
}
