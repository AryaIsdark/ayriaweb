export default function reducer(state, action) {
    const {type, payload} = action;
    switch (type) {
        case 'updateFormObject':
            return {
                ...state,
                formObject: {
                    ...state.formObject,
                    [payload.target.id]: payload.target.value,
                },
            };

        default:
            return {state}
    }
}
