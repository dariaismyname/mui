import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { minWidth } from "../ContactForm";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const popperSX = {
  color: "yellow",
  "& [role=grid]": {
    "& button.MuiPickersDay-today": {
      backgroundColor: "primary.light",
    },
  },
};

export default function BeautifulDesktopDatePicker(props: {
  value: string | undefined;
  onChange: (value: string | null | undefined) => void;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        disablePast
        label="Date"
        inputFormat="MM/DD/YYYY"
        views={["day"]}
        renderInput={(params) => {
          return <TextField {...params} sx={{ minWidth: minWidth }} />;
        }}
        components={{
          OpenPickerIcon: CalendarTodayIcon,
        }}
        InputProps={{
          sx: { "& .MuiSvgIcon-root": { color: "primary.main" } },
        }}
        PopperProps={{
          sx: popperSX,
        }}
      />
    </LocalizationProvider>
  );
}