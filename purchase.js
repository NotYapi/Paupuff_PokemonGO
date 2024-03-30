document.addEventListener('DOMContentLoaded', function() {
    const transactionHistoryString = localStorage.getItem('transactionHistory');
    const purchasedItemsList = document.getElementById('purchased-items-list');
    const clearPurchaseBtn = document.getElementById('clear-purchase-btn');

    if (transactionHistoryString) {
        const transactionHistory = transactionHistoryString.split(';');
        transactionHistory.forEach(item => {
            const [name, price, imgUrl] = item.split('-');
            const purchasedItem = document.createElement('div');
            purchasedItem.classList.add('purchased-item');
            purchasedItem.innerHTML = `
                <div class="item-details">
                    <p>Item Name: ${name}</p>
                    <p>Price: ₱${price}</p>
                </div>`;
            purchasedItemsList.appendChild(purchasedItem);
        });
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No items purchased yet.';
        purchasedItemsList.appendChild(emptyMessage);
    }

    clearPurchaseBtn.addEventListener('click', function() {
        clearTransactionHistory();
        purchasedItemsList.innerHTML = '<p>No items purchased yet.</p>';
    });
});

function clearTransactionHistory() {
    localStorage.removeItem('transactionHistory');
}
