import { TextField } from "@mui/material";
import { minWidth } from "../ContactForm";

export default function BeautifulTextField(props: any) {
  return (
    <TextField
      {...props}
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{
        minWidth: minWidth
      }}
    />
  )
}