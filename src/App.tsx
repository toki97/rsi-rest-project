import React from "react";
import { QueryClientProvider } from "react-query";
import AppRoutes from "./pages/AppRoutes";
import queryClient from "./setup/reactQueryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
