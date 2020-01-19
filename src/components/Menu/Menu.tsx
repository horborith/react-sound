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
import {AiTwotoneFunnelPlot} from 'react-icons/ai';
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
              <Nav className="mr-auto manu-contain" navbar>
                {menus.map((menu) => (
                  <NavItem className="menu-name">
                    <NavLink href="/#/">{menu.value}</NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div className="menu-right">
          <div className="menu-time">
            <AiTwotoneFunnelPlot className="filter-icon" />
            <a className="menu-duration" href="/#">
              7 days
            </a>
            <a className="menu-duration" href="/#">
              30 days
            </a>
            <a className="menu-duration mr-4" href="/#">
              90 days
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Menu;
