import { Provider } from "react-redux"
import store from "./store/store"
import { Container, Typography } from "@mui/material"
import Task from "./components/Task"
import List from "./components/List"

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth='md'>
        <Typography component='h1' variant='h2' align='center'>Task Tracker</Typography>
        <Task />
        <List />
      </Container>
    </Provider>
  )
}

export default App
