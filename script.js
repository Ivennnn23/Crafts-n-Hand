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
                    
                    
                    
                    
                 
                 

                 
                 


