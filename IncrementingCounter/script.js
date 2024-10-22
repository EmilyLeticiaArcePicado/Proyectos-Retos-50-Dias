const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const currentCount = +counter.innerText;
        
        // Adjust the increment for smoother animation
        const increment = Math.ceil(target / 200);

        if (currentCount < target) {
            counter.innerText = currentCount + increment > target ? target : currentCount + increment;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target; // Ensure that the target is set at the end
        }
    }

    // Start the animation after a small delay
    setTimeout(updateCounter, 100); 
});

