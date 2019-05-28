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
           likes:[],
           show:true,
           name: '',
           comment: ''
      
        }
     
        this.handdleComment=this.handdleComment.bind(this)
        this.handdleClick = this.handdleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addComment = this.addComment.bind(this);
    }
    componentDidMount() {
        const { id } = this.props.match.params;
       fetch('http://laravel.local/api/post-comments/'+id)
           .then(response => response.json())
           .then(data => {
               const likes=data.post.likes;
               this.setState(
                   {
                   likes:likes,
                   posts: data.post,
                   comments:data.comments
               })
               
           })
        
   }

   componentDidUpdate(){
       
    const { update } = this.state;
     
        if(update==true)
        {
            const { id } = this.props.match.params;
            fetch('http://laravel.local/api/post-comments/'+id)
                .then(response => response.json())
                .then(data => {
                    const likes=data.post.likes;
                    this.setState(
                        {
                       
                        comments:data.comments,
                    })
                })
                }
        }
         
        handleChange (event) {
            this.setState( {[event.target.name]: event.target.value} )
           
          }
   handleSubmit(event) {
    const { id } = this.props.match.params;
    const { show,name,comment } = this.state;

    let comments={"name":name,"comment":comment,"post_id":id};
    console.log(name,comment);
    console.log(comments);
    
    event.preventDefault();
    let data = new FormData(event.target);
    data.append('post_id',id);

    fetch('http://laravel.local/api/add-comment', {
      method: 'POST',
      body: data,
    }).then(
        this.addComment(comments),
        this.setState(
            {
                show:!show,
            }
        )
    )
    console.log(show);  
    //this.setState() 
    }
    addComment(comment) {
        this.setState({
          loading: false,
          comments: [comment, ...this.state.comments]
        });
      }

   handdleComment=()=>{
      const { show } = this.state;

      this.setState({show:!show}) 
   }

   handdleClick(){
    const { id } = this.props.match.params;
    fetch('http://laravel.local/api/add-like/'+id)
    this.setState(prevState =>({
            
       likes:prevState.likes+1
    
}));
   
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
                            <Button onClick={this.handdleClick}>Like <span> {this.state.likes}</span></Button>
                                {this.state.show &&  
                                            <form onSubmit={this.handleSubmit}>
                                                
                                            <input id="name" name="name" type="text" placeholder="name" onChange={event => this.handleChange(event)}/>
                                          
                                            <input id="comment" name="comment" type="text" placeholder="Comment" onChange={event => this.handleChange(event)}/>

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