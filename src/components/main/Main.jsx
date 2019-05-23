import React,{Component} from 'react';
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import styles from './main.scss';
import Side from './side/Side';
import Post from '../post/Post';
import postData from '../../data/PostData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

 class Main extends Component {  	

     constructor(){
         super()
         this.state={
            posts:[]
         }
     }
     componentDidMount() {
        fetch("http://laravel.local/api/post")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data
                })
            })
    }
    render(){
        const postComponents = this.state.posts.map(post=>{
            return(
                <Post id={post.id} title={post.title} content={post.content} />
            )
        });
        return(
            <div>
              
          
           <Row>
         
             {postComponents}
           
          
        
               </Row> 
        
         

            </div>



        );
    }


}

export default Main;