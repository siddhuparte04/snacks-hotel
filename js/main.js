function filterMenu(category) {
    let items = document.querySelectorAll('.menu_item');
    if (category === '*') {
        items.forEach(item => item.classList.add('show'));
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    }
}

// Show all items by default on page load
window.onload = () => filterMenu('*');