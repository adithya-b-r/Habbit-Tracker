import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const HabitList: React.FC = () => {
  const { habits } = useSelector((state: RootState) => state.habits);
  const today = new Date().toISOString().split("T")[0];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Grid container alignItems="center">
              <Grid xs={12} md={6}>
                <Typography variant="h6">{habit.name}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ textTransform: "capitalize" }}>{habit.frequency}</Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                  <Button variant="outlined"
                    color={
                      habit.completedDates.includes(today) ? "success" : "primary"
                    }
                    startIcon={<CheckCircleIcon />}>
                    {habit.completedDates.includes(today) ? "Completed" : "Mark complete"}
                  </Button>

                  <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )
      })}
    </Box>
  );
}

export default HabitList