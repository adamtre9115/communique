import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ButtonMenu extends Component {
    state = {
        dropdownOpen: false
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render(){
        return (
            // categories of news to select 
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Categories
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={this.props.category} value='trending'>Trending</DropdownItem>
                    <DropdownItem onClick={this.props.category} value='business'>Business</DropdownItem>
                    <DropdownItem onClick={this.props.category} value='entertainment'>Entertainment</DropdownItem>
                    <DropdownItem onClick={this.props.category} value='health'>Health</DropdownItem>
                    <DropdownItem onClick={this.props.category} value='sports'>Sports</DropdownItem>
                    <DropdownItem onClick={this.props.category} value='technology'>Technology</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}
export default ButtonMenu