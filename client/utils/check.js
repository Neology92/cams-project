const check = (rules, field) => {
    // Check rules
    for (let i = 0; i < rules.length; i += 1) {
        const { expression, response } = rules[i];

        if (expression(field.value)) {
            return {
                ...field,
                state: 'error',
                errorMessage: response,
            };
        }
    }
    // If everything is ok
    return {
        ...field,
        state: 'approve',
        errorMessage: '',
    };
};

export default check;
