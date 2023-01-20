const reservationForm = document.getElementById("reservation-form");
const reservationHistory = document.getElementById("reservation-history");
const deleteButton = document.getElementById("delete-button");

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const partySize = document.getElementById("party-size").value;
  const ambience = document.getElementById("ambience").value;
  addReservationToHistory(name, email, date, time, partySize, ambience);
});

function addReservationToHistory(name, email, date, time, partySize, ambience) {
  const row = document.createElement("tr");
  row.innerHTML = ` 
    <td>${name}</td>
    <td>${email}</td>
    <td>${date}</td>
    <td>${time}</td>
    <td>${partySize}</td>
    <td>${ambience}</td>
    `;

  reservationHistory.appendChild(row);
}
