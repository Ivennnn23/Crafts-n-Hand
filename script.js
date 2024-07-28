document.addEventListener('DOMContentLoaded', () => {
    // Handle FAQ click events
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            // Hide all answers
            document.querySelectorAll('.faq-item').forEach(el => {
                el.classList.remove('active');
                el.querySelector('.faq-answer').style.display = 'none';
            });

            // Toggle the clicked item
            if (!isActive) {
                item.classList.add('active');
                answer.style.display = 'block';
            }
        });
    });

    // Handle 'INQUIRE' button click
    document.getElementById('inquire-btn').addEventListener('click', function() {
        alert('Thank you for your interest!.');
    });

    // Add animations on scroll
    const elementsToAnimate = document.querySelectorAll('.pop-up, .slide-up');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element comes into view
                if (entry.target.classList.contains('pop-up')) {
                    entry.target.classList.add('animate');
                } else if (entry.target.classList.contains('slide-up')) {
                    entry.target.classList.add('animate-slide');
                }
                // Stop observing once the animation is applied
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
