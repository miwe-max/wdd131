const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

document.addEventListener('DOMContentLoaded', function () {
    const productSelect = document.getElementById('productName');
    const form = document.getElementById('reviewForm');
    const lastModifiedSpan = document.getElementById('lastModified');
    const reviewCountSpan = document.getElementById('reviewCount');

    // Populate product options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Set last modified date
    lastModifiedSpan.textContent = new Date().toLocaleString();

    // Load review count from localStorage
    let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0');
    reviewCountSpan.textContent = reviewCount;

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Increment and save review count
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount.toString());
        reviewCountSpan.textContent = reviewCount;

        // Redirect to the confirmation page
        window.location.href = 'review.html';
    });
});