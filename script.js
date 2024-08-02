document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.c-stepper__item');
    const personalForm = document.getElementById('personal-info-form');
    const educationForm = document.getElementById('education-info-form');
    const reviewPersonal = document.getElementById('review-personal');
    const reviewEducation = document.getElementById('review-education');

    function activateStep(index) {
        steps.forEach((step, i) => {
            step.classList.toggle('active', i <= index);
        });

        if (index === 2) {
            updateReviewInfo();
        }
    }

    function updateReviewInfo() {
        reviewPersonal.innerHTML = `
            <strong>Name:</strong> ${personalForm.elements['name'].value}<br>
            <strong>Email:</strong> ${personalForm.elements['email'].value}<br>
            <strong>Phone:</strong> ${personalForm.elements['phone'].value}<br>
            <strong>Address:</strong> ${personalForm.elements['address'].value}<br>
            <strong>City:</strong> ${personalForm.elements['city'].value}<br>
            <strong>State:</strong> ${personalForm.elements['state'].value}<br>
            <strong>Pincode:</strong> ${personalForm.elements['pincode'].value}<br>
            <strong>Country:</strong> ${personalForm.elements['country'].value}
        `;
        reviewEducation.innerHTML = `
            <strong>Degree:</strong> ${educationForm.elements['degree'].value}<br>
            <strong>Field of Study:</strong> ${educationForm.elements['field'].value}<br>
            <strong>University:</strong> ${educationForm.elements['university'].value}<br>
            <strong>Year of Graduation:</strong> ${educationForm.elements['grad-year'].value}
        `;
    }

    window.nextStep = function(index) {
        activateStep(index);
    };

    window.prevStep = function(index) {
        activateStep(index);
    };

    window.submitForm = function() {
        alert('Form submitted!');
    };
});