// Function to handle search and sorting for a specific table
function initializeTable(tableContainerSelector) {
    const tableContainer = document.querySelector(tableContainerSelector);
    const searchInput = tableContainer.querySelector('.input-group input');
    const tableRows = tableContainer.querySelectorAll('tbody tr');
    const tableHeadings = tableContainer.querySelectorAll('thead th');

    // Search function
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        tableRows.forEach((row, index) => {
            const rowData = row.textContent.toLowerCase();
            const isVisible = rowData.includes(searchValue);
            row.classList.toggle('hide', !isVisible);
            row.style.setProperty('--delay', index / 25 + 's');
        });

        // Alternate row background colors
        tableContainer.querySelectorAll('tbody tr:not(.hide)').forEach((visibleRow, index) => {
            visibleRow.style.backgroundColor = (index % 2 === 0) ? 'transparent' : '#0000000b';
        });
    });

    // Sorting functionality
    tableHeadings.forEach((heading, index) => {
        let sortAsc = true;
        heading.addEventListener('click', () => {
            tableHeadings.forEach(head => head.classList.remove('active'));
            heading.classList.add('active');

            // Toggle sorting order
            heading.classList.toggle('asc', sortAsc);
            sortAsc = !sortAsc;
            sortTable(index, sortAsc, tableRows, tableContainer.querySelector('tbody'));
        });
    });
}

// Function to sort table rows
function sortTable(columnIndex, sortAsc, tableRows, tbody) {
    const sortedRows = Array.from(tableRows).sort((a, b) => {
        const aText = a.cells[columnIndex].textContent.toLowerCase();
        const bText = b.cells[columnIndex].textContent.toLowerCase();
        return sortAsc ? (aText > bText ? 1 : -1) : (aText < bText ? 1 : -1);
    });

    // Clear the table and reinsert sorted rows
    tbody.innerHTML = '';
    sortedRows.forEach(row => tbody.appendChild(row));
}

// Initialize both tables separately
initializeTable('.patient-table-container');
initializeTable('.labReport-table-container');



// Function to handle visibility and animation
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'scale(1)';
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'scale(0.5)';
        }
    });
}

// Create a new IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.2 // Adjust this threshold as needed
});

// Observe the containers
const targets = document.querySelectorAll('.analytics-container, .patient-table-container, .labReport-table-container');
targets.forEach(target => observer.observe(target));




window.onload = function() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");
    const navbar = document.querySelector(".navbar");
    const content = document.querySelector(".content");

    closeBtn.addEventListener("click", function() {
        sidebar.classList.toggle("open");
        menuBtnChange();
    });

    searchBtn.addEventListener("click", function() {
        sidebar.classList.toggle("open");
        menuBtnChange();
    });

    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            navbar.classList.add("open");
            content.classList.add("onopen");
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
            navbar.classList.remove("open");
            content.classList.remove("onopen");
        }
    }
}


var tl = gsap.timeline();
tl.from('.analytics-container .c1',{
    y: -30,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2
})

tl.from('#patients_table',{
    y: -30,
    opacity: 0,
    duration: 0.2,
})

tl.from('#labReports_table',{
    y: -30,
    opacity: 0,
    duration: 0.2,
})




