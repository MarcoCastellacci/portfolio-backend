const initializeState = {
    proyects: [],
}

const pagesReducer = (state = initializeState, action) => {
    switch (action.type) {
        case 'CREATE_PROYECT':
            return {
                ...state,
                page: action.payload
            }
        case 'GET_PROYECTS':
            return {
                ...state,
                proyects: action.payload
            }
        default:
            return state
    }
}
export default pagesReducer;