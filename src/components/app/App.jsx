import React,{Component} from 'react';
import Header from '../header/Header';
import Main from '../main/Main';


class App extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <Main/>
                
            </div>
        )
    }

}

export default App;