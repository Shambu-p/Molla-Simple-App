
import { createSlice } from '@reduxjs/toolkit';
import { firebase } from '../../config';

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
    },
    reducers: {
        allTasks: async (state) => {
            state.tasks = await firebase.firestore().collection('task').get();
        },
        addTask: async (state, action) => {
            
            await firebase.firestore().collection('task').add({
                name: action.name,
                complete: false
            });

            state.tasks = [...state.user, action.payload];

        },
        deleteTask: async (state, action) => {
            state.tasks = state.tasks.filter((t, i) => i != action.payload.index);
        }
    },
});

export const { allTasks, addTask, deleteTask } = taskSlice.actions;

// selectors
export const selectTask = (state) => state.task.tasks;

export default taskSlice.reducer;