// Ініціалізація бібліотеки анімацій (AOS)
AOS.init({
    duration: 1000, // тривалість анімації появи блоків
    once: true      // анімація програється лише один раз
});

function openEnvelope() {
    // 1. Знаходимо елементи
    const envelope = document.getElementById('envelope');
    const overlay = document.getElementById('envelope-overlay');
    
    // 2. Запускаємо анімацію відкриття конверта (CSS клас .open)
    envelope.classList.add('open');
    
    // 3. Через 1.5 секунди (коли конверт відкрився і лист виїхав)
    setTimeout(() => {
        // Робимо оверлей прозорим
        overlay.style.opacity = '0';
        
        // 4. Ще через 1 секунду повністю прибираємо оверлей з екрану
        setTimeout(() => {
            overlay.style.display = 'none';
            // Дозволяємо скролити сторінку
            document.body.classList.remove('locked');
        }, 1000);
        
    }, 1500);
}
