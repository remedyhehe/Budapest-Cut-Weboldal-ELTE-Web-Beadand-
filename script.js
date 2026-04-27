document.addEventListener("DOMContentLoaded", function() {
    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            if (menuToggle.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(menuToggle) || new bootstrap.Collapse(menuToggle);
                bsCollapse.hide();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Multistep form logic
    const steps = document.querySelectorAll('.step-content');
    const stepIndicators = document.querySelectorAll('.step-circle');
    const nextBtns = document.querySelectorAll('.next-step');
    const prevBtns = document.querySelectorAll('.prev-step');
    let currentStep = 0;

    function showStep(index) {
        steps.forEach((step, i) => {
            if (i === index) {
                step.classList.add('active');
                stepIndicators[i].classList.add('active');
            } else {
                step.classList.remove('active');
                // Optional: keep previous steps active visually
                if (i < index) {
                    stepIndicators[i].classList.add('active');
                } else {
                    stepIndicators[i].classList.remove('active');
                }
            }
        });
    }

    if (steps.length > 0) {
        showStep(currentStep);

        nextBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // In a real app we'd trigger HTML5 validation here. 
                // For layout purposes, proceeding directly.
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    showStep(currentStep);
                }
            });
        });

        prevBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (currentStep > 0) {
                    currentStep--;
                    showStep(currentStep);
                }
            });
        });

        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                currentStep = 0;
                showStep(currentStep);
            });
        }
    }
});
