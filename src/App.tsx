import { createTheme, MantineProvider } from "@mantine/core";
import InstantSell from "./pages/instantSell/instantSell";
import Header from "./assets/components/header/header";
import "./App.scss";
import "@mantine/core/styles.css";
import UserNotice from "./assets/components/userNotice/userNotice.tsx";

const App = () => {
  const theme = createTheme({
    fontFamily: "Work Sans",
    colors: {
      primary: [
        "#ffe9f1",
        "#ffd1e0",
        "#faa1bd",
        "#f66e99",
        "#f2437a",
        "#f02866",
        "#F41449",
        "#d6094d",
        "#c00043",
        "#a90039",
      ],
    },
    primaryColor: "primary",
    defaultRadius: 10,
  });

  return (
    <MantineProvider theme={theme}>
      <UserNotice />

      <Header />
      <InstantSell />
    </MantineProvider>
  );
};

export default App;
