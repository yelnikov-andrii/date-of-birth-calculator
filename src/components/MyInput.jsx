import { DatePicker } from "@mui/x-date-pickers";

function MyInput({value, setValue}) {
    return ( 
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
     );
}

export default MyInput;