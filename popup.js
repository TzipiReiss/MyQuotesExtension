var api = "http://api.forismatic.com/api/1.0/?&method=getQuote&format=json&lang=en"

function getQuoteFromAPI(callback) {
    fetch(api, { "mode": "no-cors" })
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.log(error))
}
document.addEventListener('DOMContentLoaded', () => {
    var quote = document.getElementById('quote');
    var author = document.getElementById('author');
    var button = document.getElementById('generate');

    function setDataToDOM(data) {
        console.log(data);
        quote.innerHTML = data.quoteText;
        author.innerHTML = data.quoteAuthor;
    }

    getQuoteFromAPI(setDataToDOM);

    button.addEventListener('click', () => {
        getQuoteFromAPI(setDataToDOM);
    });
});