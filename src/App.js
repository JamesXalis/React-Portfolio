import { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        switch (currentPage) {
            case 'About Me':
                document.title = currentPage;
                return <AboutMe />;
            case 'Projects':
                document.title = currentPage;
                return <Projects />;
            case 'Resume':
                document.title = currentPage;
                return <Resume />;
            default:
                break;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    // return (
    //     <NextThemesProvider
    //         defaultTheme="system"
    //         attribute="class"
    //         value={{
    //             light: lightTheme.className,
    //             dark: darkTheme.className
    //         }}
    //     >
    //         <NextUIProvider>
    //             <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    //             <main>
    //                 {renderPage()}
    //             </main>
    //             <Footer />
    //         </NextUIProvider>
    //     </NextThemesProvider>
    // );
}

export default App;