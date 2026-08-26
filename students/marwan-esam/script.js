document.addEventListener("DOMContentLoaded", () => {
    const quoteDisplay = document.getElementById("quote-display");
    const quoteAuthor = document.getElementById("quote-author");
    const generateBtn = document.getElementById("generate-btn");

    const quotes = [
        {
            text: "Nature does not hurry, yet everything is accomplished.",
            author: "- Lao Tzu"
        },
        {
            text: "Simplicity is the soul of efficiency.",
            author: "- Austin Freeman"
        },
        {
            text: "Look deep into nature, and then you will understand everything better.",
            author: "- Albert Einstein"
        },
        {
            text: "The quieter you become, the more you are able to hear.",
            author: "- Rumi"
        },
        {
            text: "Adopt the pace of nature: her secret is patience.",
            author: "- Ralph Waldo Emerson"
        },
        {
            text: "Talk is cheap. Show me the code.",
            author: "- Linus Torvalds"
        },
        {
            text: "In character, in manner, in style, in all things, the supreme excellence is simplicity.",
            author: "- Henry Wadsworth Longfellow"
        }
    ];

    generateBtn.addEventListener("click", () => {
        // Get a random index from the quotes array
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];

        // Add a fade effect
        quoteDisplay.style.opacity = 0;
        quoteAuthor.style.opacity = 0;

        setTimeout(() => {
            quoteDisplay.textContent = `"${selectedQuote.text}"`;
            quoteAuthor.textContent = selectedQuote.author;
            
            quoteDisplay.style.transition = "opacity 0.5s ease";
            quoteAuthor.style.transition = "opacity 0.5s ease";
            
            quoteDisplay.style.opacity = 1;
            quoteAuthor.style.opacity = 1;
        }, 200); // Wait slightly for the fade out before changing text
    });
});