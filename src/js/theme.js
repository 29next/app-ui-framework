
// datepicker
document.addEventListener('DOMContentLoaded', function () {
    const dateInputs = document.querySelectorAll('input[data-datepicker]');

    dateInputs.forEach(input => {
        let options = {};

        const customOptions = input.getAttribute('data-datepicker');
        if (customOptions) {
            try {
                const parsed = JSON.parse(customOptions);
                options = Object.assign(options, parsed);
            } catch (e) {
                console.error('Invalid JSON in data-datepicker:', customOptions);
            }
        }
        flatpickr(input, options);
    });
});


// choices
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('select[data-choices]').forEach((select) => {
    const options = select.getAttribute('data-choices');
    new Choices(select, options ? JSON.parse(options) : {});
  });
});
