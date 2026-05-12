document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    if (menuToggle) {
        navLinks.forEach((l) => {
            l.addEventListener('click', () => {
                if (menuToggle.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(menuToggle) || new bootstrap.Collapse(menuToggle);
                    bsCollapse.hide();
                }
            });
        });
    }

    const contrastToggleBtn = document.getElementById('contrastToggle');
    if (contrastToggleBtn) {
        contrastToggleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.toggle('high-contrast');
            if (document.body.classList.contains('high-contrast')) {
                localStorage.setItem('contrast', 'high');
            } else {
                localStorage.setItem('contrast', 'normal');
            }
        });

        if (localStorage.getItem('contrast') === 'high') {
            document.body.classList.add('high-contrast');
        }
    }

    const steps = document.querySelectorAll('.step-content');
    const stepIndicators = document.querySelectorAll('.step-circle');
    const nextBtns = document.querySelectorAll('.next-step');
    const prevBtns = document.querySelectorAll('.prev-step');
    let currentStep = 0;

    function showStep(index) {
        steps.forEach((step, i) => {
            if (i === index) {
                step.classList.add('active');
                if (stepIndicators[i]) stepIndicators[i].classList.add('active');
            } else {
                step.classList.remove('active');
                if (i < index) {
                    if (stepIndicators[i]) stepIndicators[i].classList.add('active');
                } else {
                    if (stepIndicators[i]) stepIndicators[i].classList.remove('active');
                }
            }
        });
    }

    if (steps.length > 0) {
        showStep(currentStep);

        nextBtns.forEach(btn => {
            btn.addEventListener('click', () => {
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
