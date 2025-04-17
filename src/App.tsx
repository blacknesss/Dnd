import Footer from './widgets/footer/footer';
import Header from './widgets/header/header';
import Main from './widgets/main/main';

function App() {
    return (
        <>
            <div style={{ maxWidth: '1400px', margin: 'auto' }}>
                <div
                    style={{
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '30px',
                        justifyContent: 'space-between',
                    }}
                >
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
