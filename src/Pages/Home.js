import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Input, Icon } from "antd";
const { Header, Content, Sider } = Layout;
const { Search } = Input;

class Home extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div className="home">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">
              <Link to="/">
                <img src="./images/logo.png" alt="" />
              </Link>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/books">Books</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/users">Users</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
              <Search
                placeholder="Search ...."
                onSearch={value => console.log(value)}
                enterButton
              />
            </Header>
            <Content
              style={{
                margin: "16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Home;
