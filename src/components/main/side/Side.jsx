import React,{Component} from 'react';
import styles from './side.scss';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

export default class Side extends Component{
    render(){
        return(
            <div class="side">
            <h1>Categories</h1>
                  <ListGroup>
        <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
      </ListGroup>
            </div>

        );
    }




}