import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { contactData } from "../../Data/ContactData";

export default function ContactCardGrid() {

  return (
    <Grid container spacing={2} sx={{ width: 680 }}>
      {contactData.map((contact) => {
        return (
          <Grid item key={contact.name} >
            <Card sx={{width: 300}}>
              <CardHeader
                title={contact.name}
                subheader={contact.role}
                avatar={
                  <Avatar >{contact.name?.substring(0, 1).toUpperCase() || "A"}</Avatar>
                }
              />
              <CardContent>
                <Typography>
                  <b>Start Date:</b> {contact.startDate}
                </Typography>
                <Typography>
                  <b>Work Preference:</b> {contact.preference}
                </Typography>
                <List
                sx={{listStyle: 'list-item', listStyleType: 'circle', paddingLeft: 2}}
                  subheader={
                    <ListSubheader id="nested-list-subheader" sx={{ right: 16, position: "inherit", fontSize: '1.25rem', color: 'black', paddingLeft: 0 }}>
                      Skills:
                    </ListSubheader>
                  }
                >
                  {contact.skills.map((element) => {
                    return <li style={{ paddingTop: 0, paddingLeft: 0, paddingBottom: '2px' }} key={element}>{element}</li>
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}