import { createSlice } from '@reduxjs/toolkit';
import { firebase } from '../../config';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: null,
    },
    reducers: {
        allUsers: async (state) => {
            state.users = await firebase.firestore().collection('task').get();
        },
        addUser: async (state, action) => {
            
            await firebase.firestore().collection('task').add({
                name: action.name,
                complete: false
            });

            state.users = [...state.user, action.payload];

        },
    },
});

export const { allUsers, addUser } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.users;

export default userSlice.reducer;