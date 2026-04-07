// Slider Buttons
const wrapper = document.querySelector('.blog-wrapper');

document.getElementById('next').onclick = () => {
    wrapper.scrollLeft += 320;
};

document.getElementById('prev').onclick = () => {
    wrapper.scrollLeft -= 320;
};