import React, { Component } from "react";
import { Menu, Input } from "antd";
const { Search } = Input;

class Header extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>

        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="1">Menu1</Menu.Item>
          <Menu.Item key="2">Menu2</Menu.Item>
        </Menu>
        <Search
        className="search"
          placeholder="Search Books"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
    );
  }
}

export default Header;
