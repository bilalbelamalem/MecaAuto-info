const initialState = {
    villes: [
        { id: 1, nom: "Agadir" },
        { id: 2, nom: "Rabat" },
        { id: 3, nom: "Casablanca" },
    ],
    users: [
        { id: 1, nom: "Mahmoudi", prenom: "Myoussef", ville: 2, piece: "turbo" },
        { id: 2, nom: "Belamalem", prenom: "bilal", ville: 1, piece: "vilebrequin" },
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_User":
            return { ...state, users: [...state.users, action.payload] };
        case "Update_User":
            const updatedUsers = state.users.map((user) =>
                user.id === parseInt(action.payload.id)
                    ? { ...user, nom: action.payload.nom, prenom: action.payload.prenom, ville: parseInt(action.payload.ville), piece: action.payload.piece }
                    : user
            );
            return { ...state, users: updatedUsers };
        case "Delete_User":
            return { ...state, users: [...state.users.filter((u) => u.id !== parseInt(action.payload))] };
        case "Filter_User":
            return {
                ...state,
                usersFilter: [...state.users.filter((u) => u.ville === parseInt(action.payload))],
            };
        case "Clear_Filter_User":
            return { ...state, usersFilter: null };
        default:
            return state;
    }
};

export default reducer;
