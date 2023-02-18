let counter = 59;
function showSeconds() {
  let timer = document.getElementById('displayTime');
  timer.innerHTML = counter;
  if (counter == 0) counter = 60;
  counter = counter - 1;
}
let interval = setInterval(showSeconds, 1000);

function changeImage() {
  // console.log('hii');
  var image = document.getElementById('image');
  let body = document.getElementById('body');
  let tbody = document.getElementsByClassName('bg-theme');
  let td = document.getElementsByTagName('td');
  if (image.src.match('dark2')) {
    image.src = 'switch (1).png';
    body.classList.add('white-theme');
    body.classList.remove('dark-theme');
    for (let i = 0; i < tbody.length; i++) {
      tbody[i].style.backgroundColor = 'rgb(231, 231, 231)';
    }
    for (let i = 0; i < td.length; i++) {
      td[i].style.border = '0px solid black';
    }
  } else {
    image.src = 'dark2.avif';
    body.classList.add('dark-theme');
    body.classList.remove('white-theme');
    for (let i = 0; i < tbody.length; i++) {
      tbody[i].style.backgroundColor = 'rgb(37, 37, 37)';
    }
  }
}

fetch('https://backend-node-6o88.onrender.com/getData').then((response) => {
  response.json().then((data) => {
    // console.log(data);
    var temp = '';
    let i = 1;
    data.forEach((item) => {
      // console.log(item.name);
      temp += '<tr class="bg-theme">';
      temp += '<td class="td">' + i + '</td>';
      temp += '<td>' + item.name + '</td>';
      temp +=
        '<td>' + '₹ ' + Number(item.last).toLocaleString('en-US') + '</td>';
      temp +=
        '<td>' +
        '₹ ' +
        Number(item.buy).toLocaleString('en-US') +
        ' / ' +
        '₹ ' +
        Number(item.sell).toLocaleString('en-US') +
        '</td>';
      temp += '<td>' + item.volume + '</td>';
      temp += '<td>' + item.base_unit + '</td>';
      temp += '</tr>';
      document.getElementById('data').innerHTML = temp;
      i++;
    });
    document.getElementById('data').innerHTML = temp;
  });
});
