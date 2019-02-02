export default function reducer(state, action) {
    const {type, payload} = action;
    switch (type) {
        case 'updateAcceptor':
            return {
                ...state,
                formObject: {
                    ...state.formObject,
                    acceptor: payload
                },
            };

        case 'updateRate':
            return {
                ...state,
                formObject: {
                    ...state.formObject,
                    rating: payload
                },
            };
        case 'updateFormObject':
            return {
                ...state,
                formObject: {
                    ...state.formObject,
                    [payload.target.id]: payload.target.value,
                },
            };
        case 'updateAttachment':
            debugger;
            return {
                ...state,
                formObject: {
                    ...state.formObject,
                    attachment: payload,
                },
            };
        default:
            return {state}
    }
}
