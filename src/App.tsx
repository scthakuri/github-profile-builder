import React, { useState } from 'react'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import { AppContext } from './context/AppContext'
import "./components/styles/app.css";
import Footer from './components/footer';

export default function App() {

    const [username, setUsername] = useState<string>("")

    return (
        <AppContext.Provider
            value={{
                username, setUsername,
                
            }}
        >
            <Navbar />
            
            <div className="slider_container">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-1 col-md-10">
                            <div className="slider_content shadow">
                                <HomePage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />

        </AppContext.Provider>
    )
}
