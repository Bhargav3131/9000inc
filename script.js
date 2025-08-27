const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});




document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  const myContainer = document.getElementById('myContainer');
  const container = document.getElementById('container');

  // Toggle on button click
  toggleButton.addEventListener('click', function() {
    if (myContainer.style.display === 'block') {
      myContainer.style.display = 'none';
    } else {
      myContainer.style.display = 'block';
      myContainer.style.zIndex ='998';
    }
  });

  // Close when clicking outside modal
  myContainer.addEventListener('click', function(e) {
    if (!container.contains(e.target)) {
      myContainer.style.display = 'none';
    }
  });
});



document.getElementById("payoutForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const amount = document.getElementById("amount").value;
      const method = document.getElementById("method").value;
      document.getElementById("payoutMessage").innerText =
        `✅ Your payout request of $${amount} via ${method} has been submitted!`;
    });