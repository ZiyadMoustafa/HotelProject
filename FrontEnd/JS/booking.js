// Add click event listener to the button
bookButton.addEventListener("click", function () {
  const bookButton = document.getElementById("bookButton");
  const guestName = document.getElementById("Guest").value;
  const numRooms = document.getElementById("numRoom").value;
  const checkIn = document.getElementById("dp1").value;
  const checkOut = document.getElementById("dp2").value;
  let params = {
    guestName: guestName,
    numberOfroom: numRooms,
    checkInDate: checkIn,
    checkOutDate: checkOut,
  };
  axios
    .post(`https://hotelproject-new-66q6.onrender.com/bookings`, params)
    .then((res) => {
      console.log(res.data);
      swal("Good job!", "Booked sucessfully!", "success");
    })
    .catch((e) => {
      console.log(e);
      swal("OH NO!", "Fill All Data", "error");
    });
});
