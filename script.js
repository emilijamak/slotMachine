const innerReels = document.querySelectorAll('.innerReel')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')
const symbolArr = ['🍋', '🍭', '🍇']
const moneyDisplay = document.querySelector('h1')
let money = 1000
let spinning = false

function updateMoneyDisplay() {
    moneyDisplay.innerHTML = `
    <h1>Money: ${money}</h1>
    `
}

updateMoneyDisplay()

btn.onclick = () => {
    if (!spinning) {
        if (input.value && input.value <= money && money > 0) {
            spinning = true;
            const bid = parseFloat(input.value);
            money -= bid;
            input.value = "";
            updateMoneyDisplay();
            let i = 0;
            const interval = setInterval(() => {
                randomEmojis();
                i++;
                if (i >= 4) {
                    clearInterval(interval);
                    if (innerReels[1].innerHTML === innerReels[4].innerHTML && innerReels[4].innerHTML === innerReels[7].innerHTML) {
                        console.log('matches');
                        spinning = false;
                        money += bid * 3;
                        updateMoneyDisplay();
                        innerReels[1].style.backgroundColor = "lightgreen"
                        innerReels[4].style.backgroundColor = "lightgreen"
                        innerReels[7].style.backgroundColor = "lightgreen"
                    } else {
                        console.log('not');
                        spinning = false;
                        innerReels[1].style.backgroundColor = "red"
                        innerReels[4].style.backgroundColor = "red"
                        innerReels[7].style.backgroundColor = "red"

                    }
                } else {
                    innerReels[1].style.backgroundColor = ""
                    innerReels[4].style.backgroundColor = ""
                    innerReels[7].style.backgroundColor = ""
                }
            }, 500);
        } else {
            alert('Please insert a valid bid');

        }
    }
};



function randomEmojis() {
    innerReels.forEach(innerReel => {
        innerReel.innerHTML = `${symbolArr[Math.floor(Math.random() * symbolArr.length)]}`
    })
}




