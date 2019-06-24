import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GetBooks } from "../store/actions";
class Books extends Component {
  componentDidMount() {
    this.props.GetBooks();
  }
  
  render() {
    console.log("object", this.props.books);
    return <div>Books</div>;
  }
}

function mapStateToProps({ books }) {
  return {
    books
  };
}

function mapActionToProps(dispatch) {
  return bindActionCreators({ GetBooks }, dispatch);
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(Books);
