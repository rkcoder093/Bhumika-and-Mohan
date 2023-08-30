// JavaScript code for dynamically generating calendar days and highlighting specific day
// This code can be placed at the bottom of your HTML file, or in an external JS file

function generateCalendar(year, month, highlightDay) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const tbody = document.querySelector('.calendar-table tbody');
    tbody.innerHTML = '';

    let date = new Date(firstDay);
    while (date <= lastDay) {
        const row = document.createElement('tr');

        for (let i = 0; i < 7; i++) {
            const cell = document.createElement('td');
            if (date.getMonth() === month) {
                cell.textContent = date.getDate();
                if (date.getDate() === highlightDay) {
                    cell.classList.add('highlight');
                }
            }
            row.appendChild(cell);
            date.setDate(date.getDate() + 1);
        }

        tbody.appendChild(row);
    }
}

// Call the function to generate the calendar for November 2023 and highlight the 30th
generateCalendar(2023, 10, 30); // Month is zero-based (0 = January, 1 = February, ..., 10 = November)
