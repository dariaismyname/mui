import { minWidth } from "../ContactForm";
import { Select } from "@mui/material";

export default function BeautifulSelect(props: any) {
  return (
    <Select
      {...props}
      id="skill-select"
      labelId="skill-select-label"
      sx={{minWidth: minWidth, marginBottom: { xs: 2, md: 0 }, marginRight: { md: 2 }}}
    />
  )
}