
document.addEventListener("DOMContentLoaded", () => {
    // Add JavaScript functionality here
    // Example: Modal functionality for the gallery

    const galleryItems = document.querySelectorAll(".gallery-item img");
    const modal = document.createElement("div");
    modal.classList.add("image-modal");

    // Add modal content
    modal.innerHTML = `
        <img src="" alt="Full Image">
        <button class="close-btn">Close</button>
    `;
    document.body.appendChild(modal);

    const modalImage = modal.querySelector("img");
    const closeButton = modal.querySelector(".close-btn");

    // Open the modal on image click
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const imgSrc = item.src; // Get the clicked image's source
            modalImage.src = imgSrc; // Set the modal image source
            modal.classList.add("visible"); // Show the modal
        });
    });

    // Close the modal when clicking the button
    closeButton.addEventListener("click", () => {
        modal.classList.remove("visible");
    });

    // Close the modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("visible");
        }
    });
});
