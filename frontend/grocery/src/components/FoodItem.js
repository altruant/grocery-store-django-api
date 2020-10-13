import React, { Component } from 'react';
// import Order from './Order';


class FoodItem extends Component {

  render() {
    return(
      <div className="card food-item">
        <div className="card-img-top" style={{overflow: 'hidden', maxWidth: '100%', height: '33vh'}}>
          <img className='food-img' style={{filter: 'brightness(85%)'}}src={this.props.item.image} alt={this.props.item.menu_item}/>
        </div>
        <button style={{position: 'absolute'}} onClick={() => this.props.addItem(this.props.item)} className='btn btn-primary add'><span className="iconify" data-icon="emojione-monotone:heavy-plus-sign" data-inline="false"></span><span className='button-text'>Add</span></button>
        <div className="card-body">
          <h5 style={{fontWeight: '700', position: 'absolute', marginTop: '-10vh', color: '#fff'}}>{this.props.item.menu_item}</h5>
          <p style={{fontStyle: 'italic', fontWeight: '600'}}>{this.props.item.price}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio vero laudantium at aperiam harum maxime cumque iste, ad commodi facere incidunt pariatur iusto. Commodi.
          </p>
        </div>
      </div>
    )
  }
}

export default FoodItem;
