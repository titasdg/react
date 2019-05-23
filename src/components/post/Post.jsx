import React,{Component} from 'react';
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";



 class Post extends Component {
     constructor(){
         super()
         this.state = {
             counter:0
         }
         this.handdleClick = this.handdleClick.bind(this)
      
     }
     handdleClick(){
         this.setState(prevState =>({
            
                 counter:prevState.counter+1
             
         }));
     }
   
    render(){
        return(
           
                 <Col xs="12" sm="6">
                 <Link to={`post/${this.props.id}`}>
                    <div id={this.props.id} className="post">
                        <Card>
                            <CardImg top width="100%" src="http://blog.via.com/wp-content/uploads/2015/12/Optimized-South.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>{this.props.title}</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>{this.props.content}</CardText>
                            <Button>Button</Button>
                            <Button onClick={this.handdleClick}>Like <span> {this.state.counter}</span></Button>
                          
                            </CardBody>
                        </Card>
                    </div>
                    </Link>
                </Col>

            
           



        );
    }


}

export default Post;