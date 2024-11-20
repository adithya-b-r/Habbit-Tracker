import { Box, TextField, FormControl, FormLabel, FormHelperText, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { useState } from 'react'

const AddHabitForm = () => {
  const [name, setName] = useState<String>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
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