import React,{Component} from 'react';
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";
    import Post from './Post';
    import Comments from './Comments';


 class SinglePost extends Component {
    constructor(){
        super()
        this.state={
           posts:[],
           comments:[],
           show:true
      
        }
        this.handdleComment=this.handdleComment.bind(this)
    }
    componentDidMount() {
        const { id } = this.props.match.params;
       fetch('http://laravel.local/api/post-comments/'+id)
           .then(response => response.json())
           .then(data => {
               this.setState(prevState =>(
                   {
                   posts: data.post,
                   comments:data.comments
               }
               ));
           })
           this.handleSubmit = this.handleSubmit.bind(this);
   }
   componentDidUpdate(){
       const { id } = this.props.match.params;
       fetch('http://laravel.local/api/post-comments/'+id)
           .then(response => response.json())
           .then(data => {
               this.setState(prevState =>(
                   {
                   
                   comments:data.comments
               }
               ));
           })
      
   }
   handleSubmit(event) {
    const { id } = this.props.match.params;
    const { show } = this.state;
    event.preventDefault();
    let data = new FormData(event.target);
    data.append('post_id',id);
   
    fetch('http://laravel.local/api/add-comment', {
      method: 'POST',
      body: data,
    });
    this.setState({show:!show}) 
}
   handdleComment=()=>{
      const { show } = this.state;
      this.setState({show:!show}) 
   }
   
    render(){
        const postComments = this.state.comments.map(comments=>{
            return(
                <Comments name={comments.name} comment={comments.comment} />
            )
        });
    
        return(
                 <Col xs="12" sm="12">
                 
                    <div  className="post">
                        <Card>
                            <CardImg top width="100%" src="http://blog.via.com/wp-content/uploads/2015/12/Optimized-South.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>{this.state.posts.title}</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>{this.state.posts.content}</CardText>
                            <Button onClick={this.handdleComment}>Comment</Button>
                            <Button onClick={this.handdleClick}>Like <span> {this.state.counter}</span></Button>
                                {this.state.show &&  
                                            <form onSubmit={this.handleSubmit}>
                                                
                                            <input id="name" name="name" type="text" placeholder="name" />
                                          
                                            <input id="comment" name="comment" type="text" placeholder="Comment" />

                                            <button>Send data!</button>
                                            </form>}
                             {postComments}
                            </CardBody>
                        </Card>
                    </div>
                    
                </Col>
        );
    }


}

export default SinglePost;