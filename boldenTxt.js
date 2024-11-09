export default function boldenText(text) {
  const boldTxt = () => {
    text.split(' ').map(word => {
      const halfLength = Math.floor(word.length / 2)
      let boldedWord = ''

      if (halfLength % 2 === 0) {
        // if length of word is even number
        // bold half
      } else {
        // if length of word is uneven number, round half number down to whole number
      }

      
    })
  }

  return boldTxt
}