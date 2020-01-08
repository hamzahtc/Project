
const initialState = {
    etudiants:[]
};

export default function(state = initialState,action){
    switch(action.type){
                case 'GET_ETUDIANTS':
                    return {
                        ...state,
                        etudiants : action.payload
                    }
                case 'DELETE_ETUDIANT':
                    return {
                        ...state,
                        etudiants : state.etudiants.filter(etudiant => etudiant._id !== action.payload)
                    }
                case 'ADD_ETUDIANT':
                    return {
                        ...state,
                        etudiants : [action.payload, ...state.etudiants]
                    }
                case 'UPDATE_ETUDIANT':
                    return {
                        ...state,
                        etudiants : state.etudiants.map(etudiant => etudiant._id !== action.payload._id ? etudiant : action.payload)
                    }
                default : {
                    return state;
                    }
    }
}