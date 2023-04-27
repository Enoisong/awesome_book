/*eslint-disable*/
function mylists(list) {
    document.getElementById('MyBookRecord').style.display = 'block';
    document.getElementById('mylist').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.querySelector('.maybe').style.color = 'blue';
    document.querySelector('.maybes').style.color = '#000';
    document.querySelector('.maybey').style.color = '#000';
}

function addnew(adds) {
    document.getElementById('MyBookRecord').style.display = 'none';
    document.getElementById('mylist').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
    document.querySelector('.maybes').style.color = 'blue';
    document.querySelector('.maybey').style.color = '#000';
    document.querySelector('.maybe').style.color = '#000';
}

function contact(contacts) {
    document.getElementById('MyBookRecord').style.display = 'none';
    document.getElementById('mylist').style.display = 'none';
    document.getElementById('contact').style.display = 'flex';
    document.querySelector('.maybey').style.color = 'blue';
    document.querySelector('.maybes').style.color = '#000';
    document.querySelector('.maybe').style.color = '#000';
}

const time = document.querySelector('.date');
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',];

function timer() {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();
    time.innerHTML = `${monthNames[month]} ${day} ${year}, ${date.toLocaleTimeString()}`;
}

setInterval(timer, 1000);