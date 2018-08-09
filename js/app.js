//create album data
var album = [
  {src: 'img/1.jpg', msg: 'Loving the weather!'},
  {src: 'img/2.jpg', msg: 'Phenomenal view!'},
  {src: 'img/3.jpg', msg: 'This is getting surreal'},
  {src: 'img/4.jpg', msg: 'I really want to live here'},
  {src: 'img/5.jpg', msg: 'Food is excellent too'}
];

//create first image
var mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

//make the caption for main image
var mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

//reflect to HTML
var mainFrame = document.querySelector('#gallery .main');
mainFrame.insertBefore(mainImage, null);
mainFrame.insertBefore(mainMsg, null);

//show thumbnails
var thumbFrame = document.querySelector('#gallery .thumb');
for (var i = 0; i < album.length; i++) {
  var thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFrame.insertBefore(thumbImage, null);
}

//make the clicked photo show in the main frame
thumbFrame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;  
  }
});