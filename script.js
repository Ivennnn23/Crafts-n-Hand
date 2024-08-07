document.addEventListener('DOMContentLoaded', function () {
                         // Smooth scrolling
                         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                             anchor.addEventListener('click', function (e) {
                                 e.preventDefault();
                     
                                 document.querySelector(this.getAttribute('href')).scrollIntoView({
                                     behavior: 'smooth'
                                 });
                             });
                         });
                     });
                     

                    
                   
                     
                     function openMessenger(productName, details) {
                        // Construct your message with product name and details
                        const message = `I would like to order: ${productName}\nDetails: ${details}`;
                        
                        // Encode the message
                        const encodedMessage = encodeURIComponent(message);
                    
                        // Use your Facebook Page ID here
                        const messengerURL = `https://m.me/61554899294976?text=${encodedMessage}`;
                    
                        // Open the Messenger URL
                        window.open(messengerURL, '_blank');
                    }
                    
                    function showQuantityOptions(productId, productName) {
                        // Hide other product quantity options
                        document.querySelectorAll('.quantity-options').forEach(el => el.style.display = 'none');
                    
                        // Show quantity options for the current product
                        document.getElementById(`quantity-options-${productId}`).style.display = 'block';
                    }
                    
     //                
    
 // Define a password for deletion (for demonstration purposes)
 const adminPassword = 'developer123';

 // Load reviews from localStorage and display them
 function loadReviews() {
     const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
     const reviewsList = document.getElementById('reviews-list');
     reviewsList.innerHTML = '';
     reviews.forEach((review, index) => {
         const reviewItem = document.createElement('div');
         reviewItem.className = 'review';
         reviewItem.innerHTML = `
             <strong>${review.name}</strong>
             <p>${review.text}</p>
             <button onclick="confirmDeleteReview(${index})">Delete</button>
         `;
         reviewsList.appendChild(reviewItem);
     });
 }

 // Save review to localStorage
 function saveReview(name, text) {
     const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
     reviews.push({ name, text });
     localStorage.setItem('reviews', JSON.stringify(reviews));
 }

 // Confirm and delete review from localStorage
 function confirmDeleteReview(index) {
     const password = prompt('Enter password to delete review:');
     if (password === adminPassword) {
         deleteReview(index);
     } else {
         alert('Incorrect password');
     }
 }

 // Delete review from localStorage
 function deleteReview(index) {
     const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
     reviews.splice(index, 1);
     localStorage.setItem('reviews', JSON.stringify(reviews));
     loadReviews(); // Reload reviews to reflect changes
 }

 // Handle form submission
 document.getElementById('review-form').addEventListener('submit', function(e) {
     e.preventDefault();
     const name = document.getElementById('review-name').value;
     const review = document.getElementById('review-text').value;

     // Save the review
     saveReview(name, review);

     // Display the review
     const reviewItem = document.createElement('div');
     reviewItem.className = 'review';
     reviewItem.innerHTML = `<strong>${name}</strong><p>${review}</p><button onclick="confirmDeleteReview(${document.getElementById('reviews-list').children.length})">Delete</button>`;
     document.getElementById('reviews-list').appendChild(reviewItem);

     // Clear the form fields
     document.getElementById('review-form').reset();
 });

 // Load reviews on page load
 loadReviews(); 
                 
                 

                 
                 


