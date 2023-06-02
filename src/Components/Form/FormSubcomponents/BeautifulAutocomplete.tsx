import { Autocomplete, TextField } from "@mui/material";
import { minWidth } from "../ContactForm";

export default function BeautifulAutocomplete(props: any) {
  return (
    <Autocomplete
      {...props}
      sx={{ minWidth: minWidth }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
      renderInput={(params) => {
        return (
          <TextField
            name="role"
            {...params}
          />
        );
      }}
      renderOption={(props, option, state) => {
        return (
          <li {...props}>
            {`${option}`}
          </li>
        ); //display value
      }}
    />
  )
}