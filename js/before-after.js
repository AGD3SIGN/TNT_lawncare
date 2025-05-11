document.addEventListener('DOMContentLoaded', function () {
    // Get all before-after sliders
    const sliders = document.querySelectorAll('.before-after-slider');

    sliders.forEach(slider => {
        const afterImage = slider.querySelector('.after-image');
        const sliderHandle = slider.querySelector('.slider-handle');
        let isResizing = false;

        // Set initial position (50%)
        afterImage.style.width = '50%';
        sliderHandle.style.left = '50%';

        // Function to handle mouse/touch movement
        function handleMove(e) {
            if (!isResizing) return;

            let clientX;

            // Check if it's a touch event or mouse event
            if (e.type === 'touchmove') {
                clientX = e.touches[0].clientX;
            } else {
                clientX = e.clientX;
            }

            // Get slider dimensions and position
            const sliderRect = slider.getBoundingClientRect();
            const sliderWidth = sliderRect.width;
            const sliderLeft = sliderRect.left;

            // Calculate position as percentage
            let position = (clientX - sliderLeft) / sliderWidth * 100;

            // Constrain position between 0% and 100%
            position = Math.max(0, Math.min(100, position));

            // Update after image width and handle position
            afterImage.style.width = `${position}%`;
            sliderHandle.style.left = `${position}%`;
        }

        // Function to start resizing
        function startResize() {
            isResizing = true;
            // Add event listeners for move and end events
            document.addEventListener('mousemove', handleMove);
            document.addEventListener('touchmove', handleMove);
            document.addEventListener('mouseup', stopResize);
            document.addEventListener('touchend', stopResize);
        }

        // Function to stop resizing
        function stopResize() {
            isResizing = false;
            // Remove event listeners
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('touchmove', handleMove);
            document.removeEventListener('mouseup', stopResize);
            document.removeEventListener('touchend', stopResize);
        }

        // Add event listeners for start events
        sliderHandle.addEventListener('mousedown', startResize);
        sliderHandle.addEventListener('touchstart', startResize);

        // Prevent default behavior for touch events to avoid scrolling
        sliderHandle.addEventListener('touchstart', function (e) {
            e.preventDefault();
        });
    });
});