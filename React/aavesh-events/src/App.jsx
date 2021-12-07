import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header'
import Contactus from './pages/Contactus'
import Home from './pages/Home'

const App = () => {
    return (
        <div>
            <Header />
            <main>
                {/* {<Contactus />} */}
                <Home />
            </main>
            <Footer />
        </div>
    )
}

export default App
