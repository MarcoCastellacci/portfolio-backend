const initializeState = {
    tecnologies: [],
}

const tecnoReducer = (state = initializeState, action) => {
    switch (action.type) {
        case 'CREATE_TECNO':
            return {
                ...state,
                tecno: action.payload
            }
        case 'GET_TECNOS':
            return {
                ...state,
                tecnologies: action.payload
            }
        default:
            return state
    }
}
export default tecnoReducer;