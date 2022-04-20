window.addEventListener('load', async() => {
    let video = document.querySelector('.video');
    try {
        await video.play();
    } catch (err) {
        video.controls = true;
    }
});