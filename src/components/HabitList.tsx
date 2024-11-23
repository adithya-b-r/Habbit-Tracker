import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store';
import { Box, Button, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { toggleHabit, deleteHabit, Habit } from '../store/habbit-slice';

const HabitList: React.FC = () => {
  const { habits } = useSelector((state: RootState) => state.habits);
  const today = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch<AppDispatch>();

  const getStreak = (habit: Habit) => {
    let streak = 0;
    const currentDate = new Date();

    while (true) {
      const dateString = currentDate.toISOString().split("T")[0];

      if (habit.completedDates.includes(dateString)) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    return streak;
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Grid container alignItems="center">
              <Grid sx={(theme) => ({
                [theme.breakpoints.down('sm')]: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                },
              })} xs={12} md={6}>
                <Typography variant="h6">{habit.name}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ textTransform: "capitalize" }}>{habit.frequency}</Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Box marginTop="12px" sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                  <Button
                    variant="outlined"
                    color={habit.completedDates.includes(today) ? "success" : "primary"}
                    startIcon={<CheckCircleIcon />}
                    onClick={() => {
                      dispatch(toggleHabit({ id: habit.id, date: today }));
                    }}
                    sx={(theme) => ({
                      [theme.breakpoints.down('sm')]: {
                        fontSize: '.9rem', // Example: Smaller text for small screens
                        padding: '8px 4px', // Adjust padding
                        width: '60%'
                      },
                    })}
                  >
                    {habit.completedDates.includes(today) ? "Completed" : "Mark complete"}
                  </Button>

                  <Button variant="outlined" color="error" startIcon={<DeleteIcon />}
                    onClick={() =>
                      dispatch(deleteHabit({ id: habit.id }))
                    }
                  >
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">
                Current Streak: {getStreak(habit)} days
              </Typography>

              <LinearProgress
                variant='determinate'
                value={(getStreak(habit) / 30) * 100}
                sx={{ mt: 1 }}
              >

              </LinearProgress>
            </Box>
          </Paper>
        )
      })}
    </Box>
  );
}

export default HabitList