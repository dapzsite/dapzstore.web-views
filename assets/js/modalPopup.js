function openModal(index) {
    const product = products[index];
    document.getElementById("modalImage").src = product.image;
    document.getElementById("modalTitle").textContent = product.title;
    document.getElementById("modalSpecs").textContent = product.specs;
    document.getElementById("modalDescription").textContent = product.description;
    document.getElementById("modalPriceBefore").textContent = `Rp ${product.priceBefore.toLocaleString()}`;
    document.getElementById("modalPriceAfter").textContent = `Rp ${product.priceAfter.toLocaleString()}`;
    document.getElementById("modalStock").textContent = `Stok: ${product.stock.toLocaleString()}`;
    document.getElementById("modalWhatsapp").href = product.whatsapp;

    const modal = document.getElementById("productModal");
    const modalContent = document.getElementById("modalContent");

    modal.classList.remove("hidden");
    setTimeout(() => {
        modal.classList.add("opacity-100");
        modalContent.classList.add("scale-100", "opacity-100");
    }, 10);
}

function closeModal() {
    const modal = document.getElementById("productModal");
    const modalContent = document.getElementById("modalContent");

    modal.classList.remove("opacity-100");
    modalContent.classList.remove("scale-100", "opacity-100");

    setTimeout(() => {
        modal.classList.add("hidden");
    }, 300);
}