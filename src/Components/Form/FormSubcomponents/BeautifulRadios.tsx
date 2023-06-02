import { FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from "@mui/material";
import { minWidth } from "../ContactForm";

export default function BeautifulRadios(props: {defaultPreference: string, preference: string | undefined, handleRadioChange: ((event: React.ChangeEvent<HTMLInputElement>, value: string) => void)}) {
  return (
    <FormGroup sx={{minWidth: minWidth, marginBottom: { xs: 2, md: 0 }, marginRight: { md: 2 }}}>
              <FormLabel component="legend" htmlFor="preference-type-radio">
                Work Preference
              </FormLabel>
              <RadioGroup
                aria-label="preference"
                id="preference-type-radio"
                //defaultValue={defaultPreference}
                value={props.preference}
                name="preference"
                onChange={props.handleRadioChange}
                tabIndex={5}
              >
                <FormControlLabel
                  value={props.defaultPreference}
                  control={<Radio />}
                  label="Work From Home"
                //labelPlacement="start"
                />
                <FormControlLabel
                  value="Hybrid"
                  control={<Radio />}
                  label="Hybrid"
                />
                <FormControlLabel value="In Office" control={<Radio />} label="In Office" />
              </RadioGroup>
            </FormGroup>
  )
}