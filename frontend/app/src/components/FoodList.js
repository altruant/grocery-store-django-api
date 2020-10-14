import React, { Component } from 'react';
import FoodItem from './FoodItem';

class FoodList extends Component {

  render() {


    return(
      this.props.menu.map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-xl-3 mb-4">
          <FoodItem addItem={this.props.addItem} item={item} />
        </div>
      ))
    )
  }
}

export default FoodList;
