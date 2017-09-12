import React, {Component} from 'react'
import Header from './Header'
import Datasets from './Datasets/Datasets'

class App extends Component{
    render(){
        return (
            <div>
                <Header />
                <Datasets />
            </div>
        )
    }
}

export default App