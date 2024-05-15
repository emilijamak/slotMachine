const innerReels = document.querySelectorAll('.innerReel')
const btn = document.querySelector('.btn')

const symbolArr = ['🍋', '🍒', '🍇']
btn.onclick = () => {
    let i = 0;
    const interval = setInterval(() => {
        randomEmojis();
        // console.log('hey');
        i++;
        if (i >= 4) {
            clearInterval(interval);
        }
    }, 500);
};


function randomEmojis() {
    innerReels.forEach(innerReel => {
        innerReel.innerHTML = `${symbolArr[Math.floor(Math.random()*symbolArr.length)]}`
    })
}

