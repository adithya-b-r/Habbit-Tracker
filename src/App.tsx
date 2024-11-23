import { Provider } from 'react-redux'
import store from './store/store'
import './App.css'
import { Container, Typography } from '@mui/material'
import AddHabitForm from './components/AddHabitForm'
import HabitList from './components/HabitList'
import HabitStats from './components/HabitStats'


function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography 
        component="h1"
        variant="h2" 
        align="center" 
        color='primary'
        sx={{
          WebkitTextStroke: "1px royalblue",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "0.1rem",
          marginY: "1.5rem",
          fontSize: {
            xs: "2rem", // Small screens
            sm: "2.5rem", // Medium screens
            md: "3rem",   // Larger screens
          },
        }}
      >
        Habit Tracker
      </Typography>
        <AddHabitForm/>
        <HabitList/>
        <HabitStats/>
      </Container>
    </Provider>
  )
}

export default App
