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
                     

                     let currentProduct = '';
let currentDetails = '';

function openMessenger() {
    // Construct your message with the current product name and details
    const message = `I would like to order: ${currentProduct}\nDetails: ${currentDetails}`;
    
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
    
    // Update current product to reflect selection
    currentProduct = productName;
}

function selectProduct(productName, details) {
    // Update current details
    currentDetails = details;
    
    // Open Messenger with updated product details
    openMessenger();
}
