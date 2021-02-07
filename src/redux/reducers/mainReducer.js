const inisialState = {
    totalNews: [],
    oneNews: {},
}

const mainReducer = (state = inisialState, action) => {
    switch(action.type) {
        case 'ADD_NEWS':
            return {
                ...state,
                totalNews: action.news                
            }
        case 'ADD_ONE_NEWS':
            return {
                ...state,
                oneNews: action.oneNews
            }
        default: 
            return state

    }
}

export default mainReducer;