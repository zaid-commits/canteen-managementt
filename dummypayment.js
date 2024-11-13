document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    const cardholderName = document.getElementById('cardholderName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;

    // Dummy validation (you can add more complex validation here)
    if (cardholderName && cardNumber && expiryDate && cvv && amount) {
        alert('Payment successful! \nThank you for your payment of $' + amount);
    } else {
        alert('Please fill in all fields.');
    }
});