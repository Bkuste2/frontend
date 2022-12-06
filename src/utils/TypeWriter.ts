export default () => {
  const phrase = `Hello, I'm Igor Medeiros Ribeiro, FullStack Developer`
  let currentCharacterIndex = 0
  let currentCharacters = ""
  
  const type = () => {
    if(phrase.length === currentCharacterIndex){
      clearInterval(interval)
    }
    else {
      currentCharacters += phrase[currentCharacterIndex++]
    }
  };


  const interval = setInterval(() => type(), 100)
  
  return { currentCharacterIndex, currentCharacters, phrase   }
}