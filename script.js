const container = document.querySelector('.container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        container.scrollTo({
            left: container.clientWidth * currentIndex,
            behavior: 'smooth'
        });
        updateButtons();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < container.children[0].children.length - 1) {
        currentIndex++;
        container.scrollTo({
            left: container.clientWidth * currentIndex,
            behavior: 'smooth'
        });
        updateButtons();
    }
});

function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === container.children[0].children.length - 1;
}

updateButtons();