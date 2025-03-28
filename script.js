let containers = document.querySelectorAll('.container');
let miniCon = document.querySelectorAll('.container-mini');

for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener('mouseenter', function () {
        let overlay = containers[i].querySelector('.overlay');
        let details = containers[i].querySelector('.details')
        if (overlay) {
            overlay.style.display = 'flex'; // Show the overlay
        }
        details.style.display = 'none';
    });

    containers[i].addEventListener('mouseleave', function () {
        let overlay = containers[i].querySelector('.overlay');
        let details = containers[i].querySelector('.details')
        if (overlay) {
            overlay.style.display = 'none'; // Hide the overlay
        }
        details.style.display = 'block';
    });
};

for (let i = 0; i < miniCon.length; i++) {
    miniCon[i].addEventListener('mouseenter', function () {
        console.log('mini here')
    });

    miniCon[i].addEventListener('mouseleave', function () {
        console.log('mini left');
    });
};
