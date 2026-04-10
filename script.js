// Simple alert when contact form is submitted
document.querySelector('form')?.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Your message has been sent!');
});