import React from 'react'
import Routes from './Routes'
import {Header} from './../components'

const MainApp:React.FC<any>=()=>{
    return <div>
        <Header/>
        <main>
        <Routes/>
        </main>
        
    </div>
}


export default MainApp