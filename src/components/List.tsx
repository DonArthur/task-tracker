import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store/store'
import { Container, IconButton, ListItem, ListItemText } from '@mui/material'
import { List } from '@mui/material'
import { markTaskCompletedToday, Task } from '../store/taskSlice'
import { CheckCircle, Delete } from '@mui/icons-material'

const TaskList: React.FC = () => {
    const state = useSelector((state: any) => state.tasks.tasks)
    const dispatch = useDispatch<AppDispatch>()
    const [list, setList] = useState<any>([])

    useEffect(() => {
        setList(state)
    }, [state])

    const handleCompleteToday = (task: Task) => {
        // dispatch(removeTask(task))
        dispatch(markTaskCompletedToday({ id: task.id, completedDate: new Date().toISOString() }))
    }

    return (
        <Container>
            <List sx={{ width: '100%' }} dense>
                {list.length > 0 ? list.map((item: Task) => (
                    <ListItem
                        alignItems='flex-start'
                        key={item.id}
                        secondaryAction={
                            <div style={{ display: 'flex', gap: '1rem', }}>
                                <IconButton edge='end' aria-label='check' onClick={() => handleCompleteToday(item)}>
                                    <CheckCircle />
                                </IconButton>
                                <IconButton edge='end' aria-label='delete'>
                                    <Delete />
                                </IconButton>
                            </div>
                        }
                    >
                        <ListItemText
                            primary={item.taskName}
                            secondary={item.frequency}
                        />
                    </ListItem>
                )) : null}
            </List>
        </Container>
    )
}

export default TaskList