document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const modalContainer = document.getElementById('modalContainer');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Handle form submission logic here
        const formData = new FormData(contactForm);

        // Example: You might want to send the form data to a server using fetch or AJAX
        // For now, let's just display a success message

        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const successMessage = `
            <div class="success-content">
                <h2 class="success-heading">Form Submitted Successfully!</h2>
                <p class="success-name">Name: ${name}</p>
                <p class="success-email">Email: ${email}</p>
                <p class="success-message">Message: ${message}</p>
                <button onclick="closeModal()">Close</button>
            </div>
        `;

        showModal(successMessage);
        contactForm.reset();
    });

    function showModal(content) {
        modalContainer.innerHTML = `
            <div class="modal">
                ${content}
            </div>
        `;

        modalContainer.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Add event listener to close the modal when clicking outside the content
        modalContainer.addEventListener('click', function (event) {
            if (event.target === modalContainer) {
                closeModal();
            }
        });
    }

    function closeModal() {
        modalContainer.innerHTML = '';
        modalContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Add this CSS to your existing styles or create a new CSS file
const styles = `
   .success-content {
  text-align: center;
  padding: 20px;
}

.success-heading {
  font-size: 1.5em;
  color: #4CAF50; /* Green color or your preferred color */
}

.success-name,
.success-email,
.success-message {
  font-size: 1em;
  margin-top: 10px;
  color: #333; /* Dark color or your preferred color */
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
