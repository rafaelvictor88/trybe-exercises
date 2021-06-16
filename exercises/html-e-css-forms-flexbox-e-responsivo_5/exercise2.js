let getBtnChap = document.querySelector('.btn-chapters');
let getBtnInf = document.querySelector('.btn-information');
// console.log(getBtnInf);
// console.log(getBtnChap);
getBtnChap.addEventListener('touchstart', function() {
  let getUlChap = document.querySelector('.ul-chapters');
  if (getUlChap.style.display === 'none') {
    getUlChap.style.display = 'block';
  } else if (getUlChap.style.display !== 'none') {
    getUlChap.style.display = 'none';
  }
})

getBtnInf.addEventListener('touchstart', function() {
  let getUlInf = document.querySelector('.ul-information');
  if (getUlInf.style.display === 'none') {
    getUlInf.style.display = 'block';
  } else if (getUlInf.style.display !== 'none') {
    getUlInf.style.display = 'none';
  }
})
