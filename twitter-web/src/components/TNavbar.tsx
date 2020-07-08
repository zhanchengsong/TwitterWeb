import React from 'react';
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
    NavbarText,
    Dropdown
  } from 'reactstrap';

interface INavbarProps {
    username: string
}

interface INavbarState {
    isOpen: boolean;
    isLoggedIn: boolean;
    username: string; 
    dpOpen: boolean;
    
}

class TNavbar extends React.Component<INavbarProps, INavbarState> {
    constructor(props: INavbarProps) {
        super(props);
        this.state = {
            isOpen: false,
            isLoggedIn: true,
            username: "TestUser",
            dpOpen: false
        }
    }

    private toggleOpen = () => {
        if (this.state.isOpen == true) {
            this.setState({isOpen: false})
        } else {
            this.setState({isOpen: true})
        }
    }

    private toggleDropdown = () => {
        if (this.state.dpOpen == true) {
            this.setState({dpOpen:false})
        } else {
            this.setState({dpOpen:true})
        }
    }

    private logout = () => {
        this.setState({isLoggedIn:false});
    }

    public static defaultProps = {
        username: "DefaultProps"
    }
    public render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggleOpen} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                </Nav>
                {this.state.isLoggedIn && (< Dropdown isOpen={this.state.dpOpen} toggle={this.toggleDropdown}>
                    <DropdownToggle caret>
                         {this.state.username}
                        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Logged in as</DropdownItem>
                        <DropdownItem>{this.state.username}</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Settings</DropdownItem>
                        <DropdownItem onClick={this.logout}>Log out</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>)}
                </Collapse>
            </Navbar>
            </div>        
        );
    }

}

export default TNavbar;
