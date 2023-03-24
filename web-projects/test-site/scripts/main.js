let myImage = document.querySelector('img');

myImage.onclick =  ()=> {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
//箭头函数用（）=>代替function();

document.querySelector('html').addEventListener('click', () => {
  alert("DON'T TOUCH ME!!!!!");
});

  
