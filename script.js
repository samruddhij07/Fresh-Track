// Dark Mode Toggle with Local Storage
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.removeItem('dark-mode');
    }
});

// Example Shopping List Add Functionality using Event Delegation
const shoppingList = document.getElementById('shopping-list');

document.querySelector('.card-grid').addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-list')) {
        const itemName = event.target.closest('.card').querySelector('h3').textContent;
        addItemToList(itemName);
    }
});

function addItemToList(itemName) {
    const noItemsText = shoppingList.querySelector('p');
    if (noItemsText) {
        noItemsText.remove(); // Remove "No items added yet" text
    }

    const itemElement = document.createElement('p');
    itemElement.textContent = itemName;
    
}


// Get all the "Add to Shopping List" buttons
const addToShoppingListButtons = document.querySelectorAll('.add-to-list');

// Get the shopping list paragraph and unordered list
const shoppingListParagraph = document.getElementById('shopping-list-items');
const shoppingListUl = document.getElementById('shopping-list-ul');
const shoppingListContainer = document.getElementById('shopping-list-container');

// Function to add item to shopping list
function addItemToShoppingList(itemName) {
  // Create a new list item
  const listItem = document.createElement('li');
  listItem.textContent = itemName;

  // Add the list item to the shopping list unordered list
  shoppingListUl.appendChild(listItem);

  // Update the shopping list paragraph
  shoppingListParagraph.textContent = 'You have added the following items to your shopping list:';

  // Display an alert
  alert(`You have added ${itemName} to your shopping list.`);

  // Change the color of the shopping list text to black
  //shoppingListParagraph.style.color = 'black';
  //shoppingListUl.style.color = 'black';

  // Update the shopping list container height to fit the content
  shoppingListContainer.style.height = `${shoppingListUl.offsetHeight + 20}px`; // adjust the value to fit your design
}

// Add event listeners to the "Add to Shopping List" buttons
addToShoppingListButtons.forEach(button => {
  button.addEventListener('click', () => {
    const itemName = button.getAttribute('data-item-name');
    addItemToShoppingList(itemName);
  });
});