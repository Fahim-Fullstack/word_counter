
const textArea = document.querySelector('.textarea')
const wordsNumberEl = document.querySelector('.stat__number--words')
const charactersNumberEl = document.querySelector('.stat__number--characters')
const twitterNumberEl = document.querySelector('.stat__number--twitter')
const facebookNumberEl = document.querySelector('.stat__number--facebook')

const inputhandler =  () => {
    //example of input validation
    if(textArea.value.includes('<script>')){
        alert('You can notuse that')

        textArea.value = textArea.value.replace('<script>', '')
    }


    // determine new numbers
    let wordCounts = textArea.value.split(" ").length
    if(textArea.value.length === 0){
        wordCounts = 0;
    }


    const numOfchars = textArea.value.length
    const twitterCharactersLeft = 280 - numOfchars
    const facebookCharactersLeft = 2200 - numOfchars

    //add visual indicator if limit is exceeded
    if(twitterCharactersLeft < 0){
        twitterNumberEl.classList.add('stat__number--limit')
    } else {
        twitterNumberEl.classList.remove('stat__number--limit')

    }
    if(facebookCharactersLeft < 0){
        facebookNumberEl.classList.add('stat__number--limit')
    } else {
        facebookNumberEl.classList.remove('stat__number--limit')
    }
    
    //set new numbers
    charactersNumberEl.textContent = numOfchars;
    twitterNumberEl.textContent = twitterCharactersLeft;
    facebookNumberEl.textContent = facebookCharactersLeft;
    wordsNumberEl.textContent = wordCounts;
}


// Text Area
textArea.addEventListener('input', inputhandler)