
const so = document.querySelector('#ww');
const to = document.querySelector('#pp');
const count = document.querySelector('.Top');


to.addEventListener("click", changeQuote);

window.onload = () => fetchAdvice()
let quoteArray = ''


function fetchAdvice() {
    fetch('https://type.fit/api/quotes')
        .then((Response) => Response.json())
        .then((data) => {
            quoteArray = data
            const randomQuote = Math.floor(Math.random() * data.length)
            so.innerHTML = `"${data[randomQuote].text}"`;
            console.log(data.length);
            count.innerHTML = `Advice #${randomQuote}`
        });
}

function changeQuote() {
    const randomQuote = Math.floor(Math.random() * quoteArray.length)
    so.innerHTML = `"${quoteArray[randomQuote].text}"`;
    count.innerHTML = `Advice #${randomQuote}`
}









