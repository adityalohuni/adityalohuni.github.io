import { useState } from "react";
import "./App.css";
import aditya_png from "@/assets/aditya_grey.png";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ModeToggle } from "@/components/theme/ModeToggle";

import { About } from "@/components/about/About";
import { BlogPage } from "@/components/blog/BlogPage";

import { motion } from "motion/react";

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
