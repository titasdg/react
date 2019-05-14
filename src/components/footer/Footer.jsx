import React,{Component} from 'react';
import styles from './footer.scss';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
          <Row>
          <Col>
          <h1>@Copy rights belongs to Blue blog</h1>
          
          </Col>
        </Row>
            </div>

        );
    }




}