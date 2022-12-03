import { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Projects';
import ContactMe from './pages/ContactMe';
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
            case 'Portfolio':
                document.title = currentPage;
                return <Portfolio />;
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


        <main>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer/>
        </main>
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