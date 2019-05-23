import React,{Component} from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Style from './app.scss';
import Side from '../main/side/Side';
import SinglePost from '../post/SinglePost';

import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
    import { BrowserRouter as Router, Route, Link } from "react-router-dom"


class App extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div class="main">
                <Row>
                 <Col xs="6" sm="8">
                        <Router>
                            <switch>   
                                <Route path="/" exact component=  {Main} />
                                <Route path="/post/:id" exact component={SinglePost}  />
                            </switch>
                    </Router>    
                </Col>
         
                 <Col xs="6" sm="4"><Side/></Col>
                 </Row>
                </div>


                 <Footer/>
            </div>
        )
    }

}

export default App;