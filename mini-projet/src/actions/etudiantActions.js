export const getEtudiants = (etudiants) => {
    return {
        type : 'GET_ETUDIANTS',
        payload : etudiants
    }
}
export const deleteEtudiant = (id) => {
    return {
        type : 'DELETE_ETUDIANT',
        payload : id
    }
}
export const addEtudiant = (etudiant) => {
    return {
        type : 'ADD_ETUDIANT',
        payload : etudiant
    }
}
export const updateEtudiant = (etudiant) => {
    return {
        type : 'UPDATE_ETUDIANT',
        payload : etudiant
    }
}
export const getEtudiantsFiliere = (filiere) => {
    return {
        type : 'GET_ETUDIANTS_FILIERE',
        payload : filiere
    }
}