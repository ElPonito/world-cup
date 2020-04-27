import React from 'react'
import conf from './conf'

function App() {
    const login = () => {
        window.location.href = conf.loginUrl
    }
    return (
        <button onClick={login}>LOG-IN</button>
    )
}

export default App
