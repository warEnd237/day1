document.addEventListener('DOMContentLoaded', ()=> {
    const images = document.querySelectorAll('.image');
    images.forEach(image => {
        image.addEventListener('click', () => {
            images.forEach(img => {
                img.classList.remove('enlarged');
            });

            image.classList.add('enlarged');
        });
    });

});
