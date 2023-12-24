
function showSuccessMessage() {
    Swal.fire({
        title: "<span style='color: #ff0000;'>Sorry! Sending message is not activated yet</span>",
        html: "Contact me: <a href='https://www.linkedin.com/in/fadilfbenabdi' target='_blank'>My LinkedIn Account <i class='fab fa-linkedin' style='font-size: 1.5em'></i></a><hr>",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: "No",
        confirmButtonText: "Yes",
        focusConfirm: false,
    })
    .then((result) => {
        // Handle the result here if needed
        if (result.isConfirmed) {
            // User clicked "Yes"
            // Redirect to LinkedIn
            window.open('https://www.linkedin.com/in/fadilfbenabdi', '_blank');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // User clicked "No"
            // Add your logic here
            console.log("User clicked No");
        }
    });
}


