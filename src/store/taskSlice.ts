import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
    id: string;
    taskName: string;
    frequency: 'daily' | 'weekly';
    completedDates: string[];
    createdAt: string;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ task: string, frequency: 'daily' | 'weekly' }>) => {
            const newTask: Task = {
                id: Date.now().toString(),
                taskName: action.payload.task,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString(),
            }

            state.tasks.push(newTask)
        },
        markTaskCompletedToday: (state, action: PayloadAction<{ id: string, completedDate: string }>) => {
            let task: any = state.tasks.filter(task => task.id === action.payload.id)

            console.log(task)
        },
        removeTask: (state = initialState, action: PayloadAction<Task>) => {
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload.id)
            }
        },
    },
})

export const { addTask, removeTask, markTaskCompletedToday } = taskSlice.actions
export default taskSlice.reducer