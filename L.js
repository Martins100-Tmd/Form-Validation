document.getElementById('First').addEventListener('blur', () => {
    const input = document.getElementById('First');

    const re = /^[a-zA-Z]{2,17}-?\s?[a-zA-Z]{2,17}$/;
    
    const result = re.test(input.value);
    console.log(result)
    
    if (!re.test(input.value)) {
        input.classList.add('is-invalid');
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('border-success');
        input.classList.add('border-2');
    }
})

document.getElementById('third').addEventListener('blur', () => {
    const input = document.getElementById('third');

    const re = /^([0-9]{5})?([0-9]{6})?$/;
    
    const result = re.test(input.value);
    console.log(result)
    
    if (!re.test(input.value)) {
        input.classList.add('is-invalid');
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('border-success');
        input.classList.add('border-2');
    }
})

document.getElementById('fourth').addEventListener('blur', () => {
    const input = document.getElementById('fourth');

    const re = /^(([0-9]{3})-?\s?.?([0-9]{3})-?\s?.?([0-9]{4}))?([0-9]{11})?$/;
    
    const result = re.test(input.value);
    console.log(result)
    
    if (!re.test(input.value)) {
        input.classList.add('is-invalid');
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('border-success');
        input.classList.add('border-2');
    }
})

document.getElementById('fifth').addEventListener('blur', () => {
    const input = document.getElementById('fifth');

    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    
    const result = re.test(input.value);
    console.log(result)
    
    if (!re.test(input.value)) {
        input.classList.add('is-invalid');
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('border-success');
        input.classList.add('border-2');
    }
})
document.getElementById('sixth').addEventListener('blur', () => {
    const input = document.getElementById('sixth');

    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9-\.\.]+)\.([a-zA-Z]{2,5})$/;
    
    const result = re.test(input.value);
    console.log(result)
    
    if (!re.test(input.value)) {
        input.classList.add('is-invalid');
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('border-success');
        input.classList.add('border-2');
    }
})
// const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

// const str = '@@@Mart2';

// const result = re.test(str);

// console.log(result) 