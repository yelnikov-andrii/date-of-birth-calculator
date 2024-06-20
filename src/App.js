import { Box, Container } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MyInput from "./components/MyInput";
import { useState } from "react";
import Matrix from "./components/Matrix";

function App() {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="xl">
        <Box>
          <MyInput 
            value={value}
            setValue={setValue}
          />
        </Box>
        <Matrix 
          value={value}
        />
      </Container>
    </LocalizationProvider>

  );
}

export default App;
