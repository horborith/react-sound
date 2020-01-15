import React, {useState} from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  Container,
} from 'reactstrap';
import './styles.scss';

const Menu: React.FC<any> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menus = [
    {key: 'chill', value: 'chill'},
    {key: 'deep', value: 'deep'},
    {key: 'dubstep', value: 'dubstep'},
    {key: 'house', value: 'house'},
    {key: 'progressive', value: 'progressive'},
    {key: 'tech', value: 'tech'},
    {key: 'trance', value: 'trance'},
    {key: 'atropical', value: 'tropical'},
  ];
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="menu">
      <Container>
        <div className="menu-left">
          <Navbar color="black" light expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                {menus.map((menu) => (
                  <NavItem className="item-name">
                    <NavLink href="/#/">{menu.value}</NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div className="menu-right"></div>
      </Container>
    </div>
  );
};
export default Menu;
