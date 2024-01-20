let bookings = {
    tickets1: { destination: "Направление 1", date: "2022-10-10", seats: [] },
    tickets2: { destination: "Направление 2", date: "2022-10-20", seats: [] },
    tickets3: { destination: "Направление 3", date: "2022-10-30", seats: [] }
};

function bookTickets() {
    let travelDate = document.getElementById("travelDate").value;

    let bookedSeats = [];

    let seatCheckboxes = document.getElementsByName("seat");

    for (var i = 0; i < seatCheckboxes.length; i++) {
        if (seatCheckboxes[i].checked) {
            bookedSeats.push(seatCheckboxes[i].value);
        }
    }

    let booking = {
        destination: document.getElementById("destination").value,
        date: travelDate,
        seats: bookedSeats
    };

    for (var key in bookings) {
        if (bookings[key].destination === booking.destination && bookings[key].date === booking.date) {
            bookings[key].seats = bookings[key].seats.concat(booking.seats);
        }
    }
}

function showBookedTickets() {
    let selectedTickets = document.getElementById("bookedTickets").value;
    let bookedTicketsList = document.getElementById("bookedTicketsList");

    let listHtml = "<p><strong>Направление: </strong>" + bookings[selectedTickets].destination + "</p>";
    listHtml += "<p><strong>Дата: </strong>" + bookings[selectedTickets].date + "</p>";
    listHtml += "<p><strong>Забронированные места: </strong>" + bookings[selectedTickets].seats.join(", ") + "</p>";

    bookedTicketsList.innerHTML = listHtml;
}