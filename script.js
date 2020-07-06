const container = document.getElementsByClassName('container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')



var ticketPrice = +movieSelect.value


// update price and seats
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const totalSeatsSelected = selectedSeats.length;

        count.innerHTML = totalSeatsSelected
        total.innerHTML = totalSeatsSelected * ticketPrice

}

//Movie Select Event

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    updateSelectedCount()
})


// Seat Click Event
container[0].addEventListener('click', e => {

    
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){

        e.target.classList.toggle('selected')
        updateSelectedCount()
    }
})