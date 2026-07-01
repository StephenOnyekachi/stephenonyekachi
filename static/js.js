
// FOR ADDING AND REDUCING QUANTITY
document.addEventListener("DOMContentLoaded", () => {

    // listen to all contact buttons
    document.querySelectorAll('.whatsapp-btn').forEach(button => {
        button.addEventListener('click', (e) => {

            // get the closest product card
            const card = e.target.closest('.product-card');

            // read data from closest card only
            const name = card.querySelector(".name").innerText.trim();
            const image = card.dataset.image;
            const description = card.querySelector(".description").innerText.trim();
            const phone = card.dataset.number;

            // build whatsapp message
            const message = `
                Hello, I'm interested in this product.

                Product:
                ${name}

                Specifications:
                ${description}

                Product Image:
                ${image}
            `;

            // open whatsapp
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        })
    })
});
