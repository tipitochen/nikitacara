document.addEventListener("DOMContentLoaded", () => {
    const mouth = document.querySelector('.mouth');
    let mouthState = false;

    // Animación de apertura y cierre de boca
    setInterval(() => {
        if (mouthState) {
            mouth.style.height = '20px';
        } else {
            mouth.style.height = '10px';
        }
        mouthState = !mouthState;
    }, 1500);
});
