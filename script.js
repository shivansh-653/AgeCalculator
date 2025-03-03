// Get the date input field
let userInput = document.getElementById("date");

// Set the max date to today to prevent future dates
userInput.max = new Date().toISOString().split("T")[0];

// Get the result paragraph element
let result = document.getElementById('result');

// Function to calculate age based on the selected date
function calculateAge() {
    let birthDate = new Date(userInput.value); // Get the selected birth date
    let d1 = birthDate.getDate();  // Extract day
    let m1 = birthDate.getMonth() + 1; // Extract month (months are 0-based)
    let y1 = birthDate.getFullYear(); // Extract year

    let today = new Date(); // Get today's date
    let d2 = today.getDate();  // Get current day
    let m2 = today.getMonth() + 1; // Get current month
    let y2 = today.getFullYear(); // Get current year

    let d3, m3, y3; // Variables to store final age
    y3 = y2 - y1; // Calculate initial year difference

    // Calculate month difference
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--; // Reduce a year if the current month is before the birth month
        m3 = 12 + m2 - m1;
    }

    // Calculate day difference
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--; // Reduce a month if the current day is before the birth day
        d3 = getDays(y1, m1) + d2 - d1; // Adjust days using previous month's total days
    }

    // Adjust negative months if needed
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Display the calculated age
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
}

// Function to get the number of days in a given month of a year
function getDays(year, month) {
    return new Date(year, month, 0).getDate(); // Returns the last day of the month
}
