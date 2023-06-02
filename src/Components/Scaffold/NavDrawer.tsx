import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { useTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactForm from "../Form/ContactForm";
import ContactTable from "../Table/ContactTable";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import { BeautifulTheme } from "../../Theme/BeautifulTheme";

type ThemeWidth = Theme & { drawerWidth: number | string };

const list = [
  { text: "Contact Form", route: "/form" },
  { text: "Contact Card Grid", route: "/grid" },
  { text: "Contact Table", route: "/table" },
  { text: "Contact Data Grid", route: "/datagrid" },
];

const drawerWidth = 240;
const themeStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  };
};

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120,120,120,0.2)",
  },
  content: {
    marginLeft: drawerWidth + 10,
    padding: 3,
    marginTop: 10,
  },
};
export default function NavDrawer() {
  const theme = useTheme() as ThemeWidth;
  theme.drawerWidth = drawerWidth;
  return (
    <BrowserRouter>
      <div>
        <AppBar position="fixed" sx={themeStyles(theme).appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Advanced mui
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          disableEnforceFocus
          variant="temporary"
          open
          sx={simpleStyles.drawer}
          PaperProps={{
            sx: simpleStyles.drawerPaper,
            elevation: 9,
          }}
        >
          <Toolbar />
          <List>
            {list.map((nav) => (
              <ListItem key={nav.text}>
                <Link to={nav.route}>{nav.text}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main style={simpleStyles.content}>
          <Toolbar />
          <ThemeProvider theme={BeautifulTheme}>
            <Routes>
              <Route path="/" element={<ContactForm />} />
              <Route path="/form" element={<ContactForm />} />
              <Route path="/grid" element={<ContactCardGrid />} />
              <Route path="/table" element={<ContactTable />} />
              <Route path="/datagrid" element={<ContactDataGrid />} />
            </Routes>
          </ThemeProvider>
        </main>
      </div>
    </BrowserRouter>
  );
}
