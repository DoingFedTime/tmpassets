document.addEventListener("DOMContentLoaded", () => {
    // ==== Image Modal Functionality ====
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
      modal.classList.remove("visible"); // Hide the modal
    });

    // Close the modal when clicking outside the image
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("visible"); // Hide the modal
      }
    });

    // ==== Copy Button Functionality ====
    document.querySelectorAll('.copy-button').forEach(button => {
      button.addEventListener('click', () => {
        const link = button.getAttribute('data-link');
        navigator.clipboard.writeText(link).then(() => {
          alert('Copied to clipboard!');
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      });
    });

    // ==== Show/Hide Key Functionality ====
    document.querySelectorAll('.pgp-toggle').forEach(button => {
      button.addEventListener('click', () => {
        const pre = button.nextElementSibling; // Get the <pre> element after the button
        if (pre.hidden) {
          pre.hidden = false; // Show the key
          button.textContent = 'Hide Key'; // Update button text
        } else {
          pre.hidden = true; // Hide the key
          button.textContent = 'Show Key'; // Update button text
        }
      });
    });
});
