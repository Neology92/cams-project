const check = (fieldName, field, rules) => {
    // Check rules
    for (let i = 0; i < rules.length; i += 1) {
        const { expression, response } = rules[i];

        if (expression(field.value)) {
            return {
                [fieldName]: {
                    ...field,
                    state: 'error',
                    errorMessage: response,
                },
            };
        }
    }

    // If everything is ok
    return {
        [fieldName]: {
            ...field,
            state: 'approve',
            errorMessage: '',
        },
    };
};

export default check;
