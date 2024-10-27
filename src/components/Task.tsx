import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/store'
import { addTask } from '../store/taskSlice'

const Task: React.FC = () => {
    const [task, setTask] = useState<string>('')
    const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily')

    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (task.trim()) {
            dispatch(addTask({ task, frequency }))
        }
        setTask('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label='Task Name' fullWidth value={task} onChange={(e) => setTask(e.target.value)} placeholder='Input task name' />
                <FormControl>
                    <InputLabel>Frequency</InputLabel>
                    <Select value={frequency} onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly')}>
                        <MenuItem value='daily'>Daily</MenuItem>
                        <MenuItem value='weekly'>Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type='submit' variant='contained' color='primary'>Add Task</Button>
            </Box>
        </form>
    )
}

export default Task