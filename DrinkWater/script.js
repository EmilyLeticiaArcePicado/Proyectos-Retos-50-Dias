document.addEventListener('DOMContentLoaded', () => {
    const glasses = document.querySelectorAll('.glass');
    const waterLevel = document.getElementById('water-level');
    const litersDrunk = document.getElementById('liters-drunk');
    const litersRemaining = document.getElementById('liters-remaining');

    const goalWater = 2000; // 2 liters in ml
    let totalWater = 0;

    function updateWaterLevel() {
        const percentage = (totalWater / goalWater) * 100;
        waterLevel.style.height = `${Math.min(percentage, 100)}%`;
        
        const drunk = (totalWater / 1000).toFixed(2);
        const remaining = Math.max(0, ((goalWater - totalWater) / 1000)).toFixed(2);
        
        litersDrunk.textContent = drunk;
        litersRemaining.textContent = remaining;

        // Add a water ripple effect
        waterLevel.classList.add('ripple');
        setTimeout(() => waterLevel.classList.remove('ripple'), 500);
    }

    glasses.forEach(glass => {
        glass.addEventListener('click', () => {
            const volume = parseInt(glass.getAttribute('data-volume'));

            if (glass.classList.contains('active')) {
                totalWater -= volume;
                glass.classList.remove('active');
            } else {
                totalWater += volume;
                glass.classList.add('active');
            }

            updateWaterLevel();

            // Animate the glass
            glass.classList.add('clicked');
            setTimeout(() => glass.classList.remove('clicked'), 300);
        });
    });

    // Initial update
    updateWaterLevel();
});