window.addEventListener('load', () => {

    const slider = document.getElementById('mySlider');

    slider.oninput = function() {
        const imgEl = document.getElementById('grayImg');
        const sliderValue = this.value;
        imgEl.style.width = `${sliderValue}%`
    }

})