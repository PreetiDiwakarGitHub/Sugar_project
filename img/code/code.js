document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById("products-container");

    // Fetch data from the Makeup API
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
        .then(response => response.json())
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Function to display products
    function displayProducts(products) {
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";

            const productImage = document.createElement("img");
            productImage.className = "product-image";
            productImage.src = product.image_link || 'placeholder.png';
            productImage.alt = product.name;

            const productName = document.createElement("div");
            productName.className = "product-name";
            productName.textContent = product.name;

            const productBrand = document.createElement("div");
            productBrand.className = "product-brand";
            productBrand.textContent = product.brand;

            productCard.appendChild(productImage);
            productCard.appendChild(productName);
            productCard.appendChild(productBrand);

            productsContainer.appendChild(productCard);
        });
    }
});
