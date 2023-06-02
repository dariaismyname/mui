import { TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { minWidth } from "../ContactForm";

export default function BeautifulDesktopDatePicker(props: any) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        label="Date"
        inputFormat="MM/DD/YYYY" //depends on date lib
        renderInput={(params) => {
          return <TextField {...params} sx={{ minWidth: minWidth }} />;
        }}
      />
    </LocalizationProvider>
  )
}