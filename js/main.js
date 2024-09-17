 // Calendar Navigation
 function updateCalendar(direction) {
    // Logic to update calendar based on direction (previous or next month)
    console.log(`Updating calendar: ${direction}`);
    // Here you would typically update the calendar data and re-render it
}

document.querySelector('.calendar-nav:first-child').addEventListener('click', () => updateCalendar('previous'));
document.querySelector('.calendar-nav:last-child').addEventListener('click', () => updateCalendar('next'));

// News Category Filtering
function filterNews(category) {
    // Logic to filter news based on category
    console.log(`Filtering news by category: ${category}`);
    // Here you would typically filter the news items and update the display
}

document.querySelectorAll('.news-category').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        filterNews(e.target.textContent);
    });
});

// Latest Books Carousel
document.addEventListener('DOMContentLoaded', () => {
    const booksContainer = document.querySelector('.books-container');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
  
    const scrollAmount = booksContainer.offsetWidth / 2; // Scroll by half the container width
  
    scrollLeftBtn.addEventListener('click', () => {
      booksContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
  
    scrollRightBtn.addEventListener('click', () => {
      booksContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  
    // Optional: Hide scroll buttons when at the start or end of the container
    booksContainer.addEventListener('scroll', () => {
      const isAtStart = booksContainer.scrollLeft === 0;
      const isAtEnd = booksContainer.scrollLeft + booksContainer.offsetWidth >= booksContainer.scrollWidth;
  
      scrollLeftBtn.style.display = isAtStart ? 'none' : 'flex';
      scrollRightBtn.style.display = isAtEnd ? 'none' : 'flex';
    });
  });

// Partners Scroll
document.querySelector(".scroll-left").addEventListener("click", () => {
    document.querySelector(".partners-scroll").scrollBy({ left: -200, behavior: "smooth" });
});

document.querySelector(".scroll-right").addEventListener("click", () => {
    document.querySelector(".partners-scroll").scrollBy({ left: 200, behavior: "smooth" });
});

// Newsletter Subscription
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    console.log(`Subscribing email: ${email}`);
    // Here you would typically send this to your server
    alert('Thank you for subscribing!');
});

// Accessibility Toggle (example for contrast)
document.querySelector('a[href="#contrast"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('high-contrast');
});

// Language Toggle
document.querySelector('a[href="#language-toggle"]').addEventListener('click', (e) => {
    e.preventDefault();
    const currentLang = e.target.textContent;
    e.target.textContent = currentLang === 'LT / EN' ? 'EN / LT' : 'LT / EN';
    // Here you would typically implement language switching logic
});