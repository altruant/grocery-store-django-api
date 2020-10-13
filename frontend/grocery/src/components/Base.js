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
    const menu = [{
      "menu_item": "Pur Value",
      "price": "$9.10",
      "image": "https://images-na.ssl-images-amazon.com/images/I/81fz7QuWlkL._SL1500_.jpg"
    }, {
      "menu_item": "Wine - White, Concha Y Toro",
      "price": "$17.93",
      "image": "https://conchaytoro.com/content/uploads/2018/09/vino-blanco-quesos.jpg"
    }, {
      "menu_item": "Bacardi Breezer - Tropical",
      "price": "$8.64",
      "image": "https://i.pinimg.com/originals/a4/53/65/a4536511f5b67beca7e8233ed1e28c90.jpg"
    }, {
      "menu_item": "Cranberries - Fresh",
      "price": "$9.94",
      "image": "https://resize.hswstatic.com/w_1024/gif/fresh-cranberries.jpg"
    }, {
      "menu_item": "Chocolate Bar - Coffee Crisp",
      "price": "$14.55",
      "image": "https://ii2.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/32599_XXX_v1.tif&wid=650&cvt=jpeg"
    }, {
      "menu_item": "Cheese - Stilton",
      "price": "$8.42",
      "image": "https://cdn.shopify.com/s/files/1/2836/2982/products/stilton-cheese-recipe_grande.jpg?v=1533098517"
    }, {
      "menu_item": "Corn Kernels - Frozen",
      "price": "$6.91",
      "image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/08/Frozen-Corn-the-Right-Way-500x500.jpg"
    }, {
      "menu_item": "Chicken - Leg / Back Attach",
      "price": "$6.75",
      "image": "https://image.freepik.com/free-photo/top-view-raw-chicken-legs_23-2148189853.jpg"
    }, {
      "menu_item": "Sandwich Wrap",
      "price": "$14.04",
      "image": "https://ae01.alicdn.com/kf/HTB1JND4SXXXXXa6aFXXq6xXFXXXx/200-Pink-Stripe-Sandwich-Wrap-Paper-Wax-Coating-Greaseproof-For-Hamburger-Food-Wrapping-Candy-Gift-Soap.jpg"
    }, {
      "menu_item": "Bay Leaf",
      "price": "$6.97",
      "image": "https://prods3.imgix.net/images/articles/2017_04/non-feat-bay-leaves-explainer.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370"
    }, {
      "menu_item": "Chinese Lemon Pork",
      "price": "$9.60",
      "image": "https://lifemadesweeter.com/wp-content/uploads/Instant-Pot-Chinese-Lemon-Chicken-Pressure-Cooker-Photo-Recipe-Picture-Pressure-Cooker-480x270.jpg"
    }, {
      "menu_item": "Jam - Marmalade, Orange",
      "price": "$17.34",
      "image": "https://www.rockrecipes.com/wp-content/uploads/2016/01/Orange-Marmalade-3.jpg"
    }, {
      "menu_item": "Cheese - Cream Cheese",
      "price": "$10.59",
      "image": "https://dinnerthendessert.com/wp-content/uploads/2020/01/Stabilized-Whipped-Cream-3-900x900.jpg"
    }, {
      "menu_item": "Cheese - Bakers Cream Cheese",
      "price": "$8.63",
      "image": "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_271ec7e7-4d93-4df5-b8c7-6868d9778af7.JPG"
    }, {
      "menu_item": "Tea - Vanilla Chai",
      "price": "$6.56",
      "image": "https://cdn3.tmbi.com/toh/GoogleImagesPostCard/Vanilla-Chai-Tea_exps48863_THCA1917912B01_07_1bC_RMS.jpg"
    }, {
      "menu_item": "Pork Loin Bone - In Frenched",
      "price": "$17.66",
      "image": "https://s3.amazonaws.com/grazecart/reverencefarms/images/1551218381_5c75b6cdbb591.jpg"
    }, {
      "menu_item": "Cheese - Swiss Sliced",
      "price": "$11.35",
      "image": "https://previews.123rf.com/images/markstout/markstout1205/markstout120500076/13604397-a-stack-of-swiss-cheese-slices.jpg"
    }, {
      "menu_item": "Cleaner - Pine Sol",
      "price": "$7.19",
      "image": "https://images-na.ssl-images-amazon.com/images/I/71slUhmV3gL._SL1300_.jpg"
    }, {
      "menu_item": "Mayonnaise - Individual Pkg",
      "price": "$9.50",
      "image": "https://images.costcobusinessdelivery.com/ImageDelivery/imageService?profileId=12028466&imageId=1040649__1&recipeName=350"
    }, {
      "menu_item": "Puree - Passion Fruit",
      "price": "$12.82",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61inOHyyyML._SX425_.jpg"
    }]
    this.setState({menu})
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
