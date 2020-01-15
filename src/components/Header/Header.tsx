import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Container,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
} from 'reactstrap';
import {IoIosRadio, IoIosSearch, IoIosPerson} from 'react-icons/io';
import './styles.scss';

const Header: React.FC<any> = () => {
  return (
    <div>
      <Navbar className="menu_Header" expand="md">
        <Container className="container_Header">
          <Row>
            <Col sm="6">
              <IoIosRadio size={20} className="icon_Header" />
              <NavbarBrand href="/" className="title_Header">
                SOUNDREDUX
              </NavbarBrand>
            </Col>
            <Col sm="6" className="right_Header m-auto">
              <div className="search_Content">
                <div className="search_Box ">
                  <IoIosSearch className="search_Icon" />
                  <Input className="search_Input" placeholder="SEARCH" />
                </div>
              </div>
              <div className="profile_Header">
                <div className="profile">
                  <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                      <IoIosPerson className="icon_Profile" />
                    </DropdownToggle>
                    <DropdownMenu right className="dropdown_Profile">
                      <Button className="btnSignin">
                        Sign into SoundCloud
                      </Button>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
