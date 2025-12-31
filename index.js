function handleNavbarToggler() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navIcon = navbarToggler.querySelectorAll('.icon');
    if (navIcon[1].classList.contains('d-none')) {
        navIcon[0].classList.add('d-none');
        navIcon[1].classList.remove('d-none');
    } else {
        navIcon[0].classList.remove('d-none');
        navIcon[1].classList.add('d-none');
    }
}

const handleBooking = () => {
    alert("Wedding Booking Confirmed!");
}

const handleMessage = () => {
    alert("Message Sended Successfully!");
}
