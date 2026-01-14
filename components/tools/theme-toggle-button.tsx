import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";

export function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 bg-secondary/80 backdrop-blur-md rounded-full border border-border/50"
        >
            {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
    );
}
