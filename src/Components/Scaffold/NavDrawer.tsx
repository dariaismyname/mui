import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { useTheme, Theme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactForm from "../Form/ContactForm";
import ContactTable from "../Table/ContactTable";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import { BeautifulTheme } from "../../Theme/BeautifulTheme";

type ThemeWidth = Theme
  & { drawerWidth: number | string }

const drawerWidth = 240;
const transitionDuration = 1000;

const styles = (theme: ThemeWidth) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      "& .MuiBackdrop-root": {
        display: "none"
      }
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "rgba(120, 120, 120, 0.2)"
    },
    content: {
      padding: 3,
      minWidth: drawerWidth,
      marginLeft: 0
    },
    contentShift: {
      minWidth: drawerWidth,
      marginLeft: drawerWidth
    }
  }
}

export default function NavDrawer() {
  const theme = useTheme() as ThemeWidth;
  theme.drawerWidth = drawerWidth
  return (
    <>
      <BrowserRouter>
        <div>
          <AppBar position="fixed" sx={styles(theme).appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Expert Material-UI Styling
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            disableEnforceFocus
            sx={styles(theme).drawer}
            variant="temporary"
            open={true}
            transitionDuration={{
              enter: transitionDuration,
              exit: transitionDuration
            }}

            PaperProps={{ elevation: 9, sx: styles(theme).drawerPaper }}
          >
            <Toolbar />
            <div>
              <List>
                {[{ text: "Contact Form", route: '/form' }, { text: "Card Grid", route: "/grid" }, { text: "Table", route: "/table" }, { text: "Data Grid", route: "/datagrid" }].map((nav, index) => (
                  <ListItem key={nav.text} sx={{ borderBottom: '1px solid black', borderBottomColor: 'primary.main' }}>
                    <Link to={nav.route}>{nav.text}</Link>
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
          <main
            style={{ ...styles(theme).content, ...styles(theme).contentShift }}
          >
            <Toolbar />
            <ThemeProvider theme={BeautifulTheme}>
              <Routes>
                <Route path={"/"} element={<ContactForm />} />
                <Route path={"/form"} element={<ContactForm />} />
                <Route path={"/grid"} element={<ContactCardGrid />} />
                <Route path={"/table"} element={<ContactTable />} />
                <Route path={"/datagrid"} element={<ContactDataGrid />} />
              </Routes>
            </ThemeProvider>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}