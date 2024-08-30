import IconMoon from "./IconMoon";
import IconSun from "./IconSun";
import { useEffect, useState } from "react";

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        console.log("Use effect")

        if(darkMode) {
            document.documentElement.classList.add('dark')
        }else {
            document.documentElement.classList.remove('dark')
        }

    }, [darkMode])

    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold uppercase tracking-[0.3em] text-white">
                    TODO
                </h1>
                <button onClick={() => { setDarkMode(!darkMode) }}>
                    {
                        darkMode ? <IconSun /> : <IconMoon />
                    }
                </button>
            </div>
        </header>
    );
};

export default Header;
