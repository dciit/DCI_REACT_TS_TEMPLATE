import { ReduxInterface } from "../interface/main.interface"

const initialState: ReduxInterface = {
    code: '',
    login: false,
    name: '',
    sure: ''
}

const IndexReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: true,
                name: action.payload.name,
                sure: action.payload.sure,
                code: action.payload.code
            }
        case 'LOGOUT':
            return {
                ...state,
                login: false,
                name: '',
                sure: '',
                code: ''
            }
        default:
            return state
    }
}
export default IndexReducer;
