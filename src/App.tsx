import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { QueryClientProvider } from "react-query";
import AppRoutes from "./pages/AppRoutes";
import queryClient from "./setup/reactQueryClient";
import theme from "./theme";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
