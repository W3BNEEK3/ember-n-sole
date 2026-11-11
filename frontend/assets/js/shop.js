import { products } from "./products.js";

const productGrid = document.querySelector(".product-grid");

products.forEach((product) => { 
    productGrid.innerHTML += `
    <article class="product-card">
            <img src="${product.image}" alt="${product.name}" width="250px" height="250px">
            <h3> ${product.name}</h3>
            <p class="price">₦${product.price.toLocaleString()}</p>
            <div class="product-action-btns">
                <button class="product-view-btn" data-id=${product.id} type="button">View</button>
                <button class="product-add-btn" type="button">Add to Cart</button>
            </div>
    </article>
    `;
});


const veiwBtns = document.querySelectorAll(".product-view-btn");

veiwBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const productId = btn.dataset.id;
        const isExistingProduct = products.find((product) => product.id === Number(productId));
        if (isExistingProduct){
            window.location.href = `product.html?id=${productId}`;
        }        
    })
});