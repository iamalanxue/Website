const loadCards = (photos) => {
    console.log(photos);
    for (photo of photos){
        let template = `
        <div class="picture">
                <img src="${photo}" class="rotateimg90" alt="">
            </div>
    `;
    document.querySelector('#gallery-container').innerHTML += template;
    }
};

loadCards([
    'images/pic1.JPG',
    'images/pic2.JPG',
    'images/pic3.JPG',
    'images/pic4.JPG',
    'images/pic5.JPG',
    'images/pic6.JPG',
    'images/pic7.JPG',
    'images/pic8.JPG',
    'images/pic9.JPG',
    'images/pic10.JPG',
]);

const implement = document.querySelectorAll()