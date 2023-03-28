import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    function prefersDarkTheme() {
        const preference = window.localStorage.getItem("darkTheme");
        if (preference !== null) {
            return preference === "true";
        }

        return (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
    }

    function toggleTheme() {
        if (dark) {
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }

        setDark(!dark);
        window.localStorage.setItem("darkTheme", `${!dark}`);
    }

    const [hasMounted, setHasMounted] = useState(false);
    const [dark, setDark] = useState(false);
    const [mode, setMode] = useState<"dark" | "light">("light");

    useEffect(() => {
        setMode(dark ? "dark" : "light");
    }, [dark]);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    if (prefersDarkTheme() && !dark) {
        setDark(true);
        document.body.classList.add("dark");
    }

    return (
        <DarkModeToggle
            mode={mode}
            dark=""
            light=""
            size="sm"
            inactiveTrackColor="#fffcfb"
            inactiveTrackColorOnHover="#fffcfb"
            inactiveTrackColorOnActive="#fffcfb"
            activeTrackColor="#2b7bd9"
            activeTrackColorOnHover="#2b7bd9"
            activeTrackColorOnActive="#2b7bd9"
            inactiveThumbColor="#0b1120"
            activeThumbColor="gold"
            onChange={toggleTheme}
        />
    );
}
