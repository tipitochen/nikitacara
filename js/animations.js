document.addEventListener("DOMContentLoaded", () => {
    const mouth = document.querySelector('.mouth');
    let mouthState = false;

    // Animación de apertura y cierre de boca
    setInterval(() => {
        if (mouthState) {
            mouth.style.height = '90px';
        } else {
            mouth.style.height = '60px';
        }
        mouthState = !mouthState;
    }, 1500);
});
