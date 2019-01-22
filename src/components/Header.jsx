import React, { Component } from 'react';
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
    DropdownItem
    } from 'reactstrap';
import { connect } from 'react-redux';

class HeaderReact extends Component {

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

    onLogoutSelect = () => {
        if(window.confirm('Are you sure want to Logout?')) {
            
        }
    }

    render() {
        if(this.props.username === "") {
            
            return (
                <div style={{ margin: '0 0 90px 0' }}>
                    <Navbar color="light" light expand="md" fixed="top" className="shadow">
                        <NavbarBrand href="/">{this.props.NavBrand}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/register">Register</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                <DropdownItem>
                                    My Profile
                                </DropdownItem>
                                <DropdownItem>
                                    Settings
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Logout
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            )

        } else {
            return (
                
                <div style={{ margin: '0 0 90px 0' }}>
                    <Navbar color="light" light expand="md" fixed="top" className="shadow">
                    <NavbarBrand href="/" style={{ fontSize: "16px" }}>
                    <b>{this.props.NavBrand}</b>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar style={{ fontSize: "14px", fontWeight: "bold" }}>
                            <NavItem>
                            <NavLink href="/">Hello, {this.props.username}</NavLink>
                            </NavItem>
                            &nbsp;
                            <NavItem>
                            <NavLink href="/">
                            <i className="fa fa-home fa-lg"></i>&nbsp;Home
                            </NavLink>
                            </NavItem>
                            {this.isProducer()}
                            &nbsp;
                            <NavItem>
                            <NavLink href="#" onClick={this.onLogoutSelect}>
                            <i className="fa fa-sign-out fa-lg"></i>
                            &nbsp;Logout
                            </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.auth.username
    }
}

export default connect(mapStateToProps)(HeaderReact);