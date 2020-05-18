import "../css/SearchBarButton.css";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class SearchBarButton extends Component {
  /*
    Custom bootstrap button that changes into a search bar when pressed
  */

  state = { showForm: false };
  showForm() {
    return (
      <Form inline>
        <FormControl className="form-custom" type="text" placeholder="Search" />
        <Button className="btn-postclick">Search</Button>
      </Form>
    );
  }

  showButton() {
    return (
      <Button className="btn-preclick" onClick={() => this.onClick()}>
        Search
      </Button>
    );
  }

  onClick() {
    this.setState({ showForm: true });
  }

  render() {
    const showForm = this.state.showForm;
    let display;
    if (!showForm) {
      display = this.showButton();
    } else {
      display = this.showForm();
    }

    return display;
  }
}

export default SearchBarButton;
