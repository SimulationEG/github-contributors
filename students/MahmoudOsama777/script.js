const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        text: "Experience is the name everyone gives to their mistakes.",
        author: "Oscar Wilde"
    },
    {
        text: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman"
    },
    {
        text: "Make it work, make it right, make it fast.",
        author: "Kent Beck"
    },
    {
        text: "Programming isn't about what you know; it's about what you can figure out.",
        author: "Chris Pine"
    },
    {
        text: "The best error message is the one that never shows up.",
        author: "Thomas Fuchs"
    },
    {
        text: "Don't worry if it doesn't work right. If everything did, you'd be out of a job.",
        author: "Mosher's Law of Software Engineering"
    },
    {
        text: "Learning to write programs stretches your mind and helps you think better.",
        author: "Bill Gates"
    },
    {
        text: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds"
    },
    {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    },
    {
        text: "The function of good software is to make the complex appear to be simple.",
        author: "Grady Booch"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    }
];

// DOM Elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Generate Random Quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    // Add fade effect
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';
    
    setTimeout(() => {
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `- ${quote.author}`;
        
        quoteText.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
    }, 300);
}

// Add transition styles dynamically
quoteText.style.transition = 'opacity 0.3s ease';
quoteAuthor.style.transition = 'opacity 0.3s ease';

// Event Listener
newQuoteBtn.addEventListener('click', generateQuote);

// Generate initial quote on page load
window.addEventListener('load', generateQuote);


print("JavaScript file created successfully!")
print("\nAll files created:")
print("✓ index.html")
print("✓ style.css")
print("✓ script.js")

