import React,{Component} from 'react';
import styles from './header.scss';
import { UncontrolledCarousel } from 'reactstrap';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Jumbotron,
     Button } from 'reactstrap';

 import {  Container } from 'reactstrap';
    

/**********************Carousel items****************************** */
     const items = [
      {
        src: 'https://tripmap.lt/wp-content/uploads/2018/11/kanada-work-and-travel-programa.jpg',
        altText: 'Slide 1',
        caption: 'Lorem ipsum dolor sit amet, nostra porro, ac elementum, et et. Faucibus viverra pede. Aliquet etiam, volutpat vitae aliquam, elit sit sollicitudin. Feugiat pretium gravida. Auctor bibendum.',
        header: 'TRAVEL TO EXZOTIC LOCATIONS'
      },
      {
        src: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2017/03/blueberries-anthocyanins-guide-image.jpg',
        altText: 'Slide 2',
        caption: 'Mattis massa feugiat, lobortis duis suspendisse, malesuada ante faucibus. Mauris commodo, enim vitae. Sit integer sit, in ultrices arcu, mus dui. Id aut, volutpat volutpat, est enim. Sollicitudin mauris sit, lectus orci justo. Vel eget ac. Lobortis nulla facilisis. Porta et lorem, at mattis, habitasse integer lobortis. Enim sit porttitor. Magna nunc, nulla neque sed.',
        header: 'EAT EXOTIC FOOD'
      },
      {
        src: 'https://img.static-fb.com/images/media/3E2C283C-2510-4984-9F3AF6BF0942406F?min_width=480',
        altText: 'Slide 3',
        caption: 'Eros semper convallis ut nec, dignissim sed ullamcorper habitasse, justo nunc arcu, convallis placeat sed etiam. Morbi sodales enim, sagittis massa nisl placerat egestas posuere id, ac cursus elementum pede, nibh rerum arcu. Suscipit non suspendisse ut convallis.',
        header: 'SEE SOMETHING NEW'
      }
    ];

/**********************Header class************************** */

 class Header extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <div className="navigation">
          <Navbar color="" light expand="md">
            <NavbarBrand href="/">Blog</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                     Create New Post
                    </DropdownItem>
                    <DropdownItem>
                      Create new Cateogry
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        
        </div>  <div className="jumbatron">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
        <div className="carousel-class">
        <UncontrolledCarousel items={items}  indicators={false}/>
        </div>
        </div>
        
      );
    }
  }

export default Header;