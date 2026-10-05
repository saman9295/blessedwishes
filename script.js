// Blessed Wishes Website Interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('Blessed Wishes Website Loaded Successfully');

    // Auto update copyright year
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${currentYear} Blessed Wishes. All rights reserved.`;
    }
});