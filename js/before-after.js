document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.before-after-slider');

    sliders.forEach(slider => {
        const handle = slider.querySelector('.slider-handle');
        const afterImage = slider.querySelector('.after-image');
        let isResizing = false;

        // Initial position
        afterImage.style.width = '50%';
        handle.style.left = '50%';

        // Mouse events
        handle.addEventListener('mousedown', startResize);
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);

        // Touch events for mobile
        handle.addEventListener('touchstart', startResizeTouch);
        window.addEventListener('touchmove', resizeTouch);
        window.addEventListener('touchend', stopResize);

        function startResize(e) {
            e.preventDefault();
            isResizing = true;
        }

        function startResizeTouch(e) {
            e.preventDefault(); // Prevent default to stop page scrolling
            isResizing = true;
        }

        function resize(e) {
            if (!isResizing) return;

            // Prevent default behavior to avoid page scrolling
            e.preventDefault();

            const sliderRect = slider.getBoundingClientRect();
            const position = (e.clientX - sliderRect.left) / sliderRect.width * 100;

            // Limit position between 0% and 100%
            const limitedPosition = Math.max(0, Math.min(100, position));

            afterImage.style.width = `${limitedPosition}%`;
            handle.style.left = `${limitedPosition}%`;
        }

        function resizeTouch(e) {
            if (!isResizing) return;

            // Prevent default behavior to avoid page scrolling
            e.preventDefault();

            const touch = e.touches[0];
            const sliderRect = slider.getBoundingClientRect();
            const position = (touch.clientX - sliderRect.left) / sliderRect.width * 100;

            // Limit position between 0% and 100%
            const limitedPosition = Math.max(0, Math.min(100, position));

            afterImage.style.width = `${limitedPosition}%`;
            handle.style.left = `${limitedPosition}%`;
        }

        function stopResize() {
            isResizing = false;
        }
    });
});