import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme, Image, Navbar } from '@nextui-org/react';


function Navigation({ currentPage, handlePageChange }) {
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();
    const labels = ['About Me', 'Projects', 'Resume']



    return (
        <>
            {labels.map((label) => {
                if (label === currentPage) {
                    return (
                        <Navbar.Item key={label} isActive>
                            <a
                                href={`#${label.includes(' ') ? label.split(' ')[0].toLowerCase() + '-' + label.split(' ')[1].toLowerCase() : label.toLowerCase()}`}
                                onClick={() => handlePageChange(label)}
                            >
                                {label}
                            </a>
                        </Navbar.Item>
                    );
                } else {
                    return (
                        <Navbar.Item key={label}>
                            <a
                                href={`#${label.includes(' ') ? label.split(' ')[0].toLowerCase() + '-' + label.split(' ')[1].toLowerCase() : label.toLowerCase()}`}
                                onClick={() => handlePageChange(label)}
                            >
                                {label}
                            </a>
                        </Navbar.Item>
                    );
                }
            })
            }
            <Switch
                checked={isDark}
                shadow
                bordered
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
            <Image
                width={24}
                height={24}
                alt="Theme icon"
                objectFit="scale-down"
            />
        </>
    );
}

export default Navigation;