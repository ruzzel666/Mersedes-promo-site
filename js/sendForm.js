const forms = document.querySelectorAll('.form');

const validateForm = (form) => {
    const inputs = form.querySelectorAll('input');
    for (const input of inputs) {
        if (!input.value.trim()) {
            return false;
        }
    }
    return true;
};

forms.forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!validateForm(form)) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        let data = {};

        for (let { name, value } of form.elements) {
            if (name) {
                data[name] = value;
            }
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then(data => {
                alert('Данные успешно отправлены!');
                form.reset();
            })
            .catch(error => {
                alert('Произошла ошибка при отправке данных: ' + error.message);
            });
    });
});