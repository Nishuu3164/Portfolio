// Example: Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission handling code here
    // For example, you could send the form data to a server using AJAX
    // or display a confirmation message
    alert('Form submitted!');
});


document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('.nav-bar a');

        for (const link of links) {
            link.addEventListener('click', function(event) {
                event.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
});
