const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// 1. Searching for specific data in the HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    });

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}

// 2. Sorting | Ordering data of the HTML table
table_headings.forEach((head, i) => {
    let sort_asc = false; // Start with descending order on first click
    head.onclick = () => {
        // Clear any previous active classes
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        // Highlight the sorted column
        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        table_rows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        });

        // Toggle sorting order: ascending or descending
        head.classList.toggle('asc', sort_asc);
        sort_asc = !sort_asc; // Toggle direction

        sortTable(i, sort_asc); // Sort table based on the column index and sort direction
    };
});

function sortTable(column, sort_asc) {
    [...table_rows].sort((a, b) => {
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
            second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

        // Use localeCompare for better sorting comparison
        return sort_asc ? first_row.localeCompare(second_row) : second_row.localeCompare(first_row);
    }).forEach(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}

// 3. Handling row click event to show full-screen container
const tableRows = document.querySelectorAll('tbody tr');
const fullScreenContainer = document.getElementById('full-screen-container');
const closeBtn = document.getElementById('close-btn');
const rootContainer = document.getElementById('root');

tableRows.forEach(row => {
    row.addEventListener('click', () => {
        // Get the patient name from the row (the second cell)
        const patientName = row.querySelector('td:nth-child(2)').innerText;
        
        // Log the patient name to the console
        console.log("Patient Name: " + patientName);

        // Show the full-screen container
        fullScreenContainer.classList.add('active');
        rootContainer.style.display = 'none';
    });
});

// 4. Handling close button click event to hide the full-screen container
// closeBtn.addEventListener('click', () => {
//     fullScreenContainer.classList.remove('active');
//     rootContainer.style.display = 'block';
// });

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

    // searchBtn.addEventListener("click", function() {
    //     sidebar.classList.toggle("open");
    //     menuBtnChange();
    // });

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
tl.from(".table__header",{
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "back"
})
tl.from(".table__body",{
    y: -50,
    opacity: 0,
    duration: 0.5,
    ease: "back"
})


