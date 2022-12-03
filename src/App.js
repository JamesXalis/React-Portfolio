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
            case 'Contact Me':
                document.title = currentPage;
                return <ContactMe />;
            case 'Resume':
                document.title = currentPage;
                return <Resume />;
            default:
                break;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </>
    );
}


return (
    <div className="App">
        <header className="App-header">
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
);


export default App;