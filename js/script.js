// Slider Buttons
// const wrapper = document.querySelector('.blog-wrapper');

// document.getElementById('next').onclick = () => {
//     wrapper.scrollLeft += 320;
// };

// document.getElementById('prev').onclick = () => {
//     wrapper.scrollLeft -= 320;
// };

// header and footer snippet call in every page
// fetch('header.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('header').innerHTML = data;
//     });

    function loadComponent(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
        document.getElementById(id).innerHTML = data;
        });
    }

    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");