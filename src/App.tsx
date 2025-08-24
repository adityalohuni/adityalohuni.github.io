import "./App.css";

import { ThemeProvider } from "@/components/theme/ThemeProvider";

import { About } from "@/components/about/About";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col h-full overflow-hidden">
        <About />
      </div>
    </ThemeProvider>
  );
}

export default App;
