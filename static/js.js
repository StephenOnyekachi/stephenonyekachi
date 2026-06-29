
// FOR ADDING AND REDUCING QUANTITY
document.addEventListener("DOMContentLoaded", () => {

    // listen to all contact buttons
    document.querySelectorAll('.whatsapp-btn').forEach(button => {
        button.addEventListener('click', (e) => {

            // get the closest product card
            const card = e.target.closest('.product-card');

            // read data from closest card only
            const name = card.dataset.name;
            const image = card.dataset.image;
            const description = card.dataset.description;
            const phone = card.dataset.number;

            // build whatsapp message
            const message = `
                Hello, I am interested in this product:

                name: ${name}
                Image: ${image}
                details: ${description}
            `;

            // open whatsapp
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        })
    })

    // // WhatsApp submit
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();

    //     const name = document.querySelector('#name').innerText.trim();
    //     const image = document.querySelector('#item-image').src;
    //     const description = document.querySelector('#description').innerHTML;
    //     const phone = "2349031360947";

    //     const message = `
    //         Hello, I want to order:

    //         Food: ${name}
    //         Image: ${image}
    //         Quantity: ${quantity}
    //         Total: ₦${price}
    //         Address: ${address}
    //     `;

    //     const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    //     window.open(url, "_blank");
    // });

    // // Initial calculation
    // updatePrice();
});