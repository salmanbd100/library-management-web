import React, { Component } from "react";
import { Col, Row, Card, Button, Modal } from "antd";

export class Book extends React.Component {
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <Col span={6}>
        <Card title={this.props.bookName} bordered={false}>
          <p>
            <b>Author :</b> {this.props.author}
          </p>
          <p>
            <b>Description : </b>A dog is a type of ...{" "}
            <Button type="link" ghost onClick={this.showModal}>
              See more
            </Button>
          </p>
          <Modal
            title={this.props.bookName}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
          >
            <p>{this.props.description}</p>
          </Modal>
          <div className="download">
            <a
              href={this.props.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="primary" ghost>
                Download
              </Button>
            </a>
          </div>
        </Card>
      </Col>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src="./images/home-bg.jpeg" className="home-bg" alt="" />
        <Row gutter={20}>
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
          <Book
            bookName="Book Name"
            author="Salman Rahman"
            description="A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world."
            downloadLink="https://www.google.com/"
          />
        </Row>
      </div>
    );
  }
}

export default Home;
