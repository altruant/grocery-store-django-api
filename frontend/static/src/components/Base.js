import React, { Component } from 'react';
import FoodList from './FoodList'
import Order from './Order'

class Base extends Component {
  constructor(props) {
    super(props);

    this.state= {
      menu: [],
      order: [],
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    const order = [...this.state.order, item]
    this.setState({order})
  }

  componentDidMount() {
    fetch('/api/v1/')
      .then(response => response.json())
      .then(data => this.setState( {menu: data} ))
      .then(error => console.log('Error', error))
  }

  render() {
    return (
      <div className="parent">
        <h1>Wild Thyme Gourmet</h1>
        <div className="row d-flex list">
        <FoodList addItem={this.addItem} menu={this.state.menu} />
        </div>
        <Order order={this.state.order}/>
      </div>
    )
  }
}

export default Base;
