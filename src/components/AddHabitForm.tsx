import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addHabit } from '../store/habbit-slice';

const AddHabitForm = () => {
  const [name, setName] = useState<string>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
  const dispatch = useDispatch<AppDispatch>();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(name.trim()){
      dispatch(
        addHabit({
          name,
          frequency
        })
      )

      setName("");
    }
  }

return (
  <form onSubmit={handleSubmit}>
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
    }}>

      <TextField
        label="Habit Name"
        value={name}
        placeholder="Enter habit name"
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />

      <FormControl fullWidth>
        <InputLabel>Frequency</InputLabel>
        <Select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
        >
          <MenuItem value="Daily">Daily</MenuItem>
          <MenuItem value="Weekly">Weekly</MenuItem>
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary">Add Habit</Button>
    </Box>
  </form>
)
}

export default AddHabitForm