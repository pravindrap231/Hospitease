document.getElementById('stockForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const totalPrice = quantity * price;

    const table = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = itemName;
    cell2.textContent = quantity;
    cell3.textContent = totalPrice.toFixed(2);
    cell4.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

    document.getElementById('stockForm').reset();
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
