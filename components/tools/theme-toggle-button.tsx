import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";
import { useEffect, useState } from "react";

export function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="fixed bottom-6 right-6 bg-secondary/80 backdrop-blur-md rounded-full border border-border/50 z-50"
                disabled
            />
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 bg-secondary/80 backdrop-blur-md rounded-full border border-border/50 z-50"
        >
            {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
    );
}
