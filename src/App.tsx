/* eslint-disable @typescript-eslint/no-unused-vars */

import Home from "./pages/home";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
