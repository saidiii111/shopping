import React,  { Component } from 'react';
import { connect } from 'react-redux';

class ProductList extends Component {

  render(){
    const products = this.props.products;
    // the same const line 7 = 9
    // const {products} = this.props;

    return(
      <ul>
        {products.map((item) => (<li key={item.id}>
           <p>  {item.title}
               ${item.price}
               X{item.inventory}
          </p>
          <button>Add to Cart</button>
        </li>))}
      </ul>
    );
  }
}

const mapStoreToProps = (store) => ({products:Object.values(store.products)});


export default connect(mapStoreToProps )(ProductList);
