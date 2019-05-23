import React,{Component} from 'react';
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";
    import Post from './Post';


 class SinglePost extends Component {
    constructor(){
        super()
        this.state={
           posts:[]
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
       fetch('http://laravel.local/api/post/'+id)
           .then(response => response.json())
           .then(data => {
               this.setState({
                   posts: data
               })
           })
   }
   
    render(){
    
        return(
                 <Col xs="12" sm="12">
                 
                    <div  className="post">
                        <Card>
                            <CardImg top width="100%" src="http://blog.via.com/wp-content/uploads/2015/12/Optimized-South.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>{this.state.posts.title}</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>{this.state.posts.content}</CardText>
                            <Button>Button</Button>
                            <Button onClick={this.handdleClick}>Like <span> {this.state.counter}</span></Button>
                          
                            </CardBody>
                        </Card>
                    </div>
                    
                </Col>

            
           



        );
    }


}

export default SinglePost;