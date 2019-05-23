import React,{Component} from 'react';
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";



 class Comments extends Component {
  
   
    render(){
        return(
           
                 <Col xs="12" sm="6">
                 <h2>{this.props.name}</h2>
                 <p>{this.props.comment}</p>
                
                </Col>

            
           



        );
    }


}

export default Comments;