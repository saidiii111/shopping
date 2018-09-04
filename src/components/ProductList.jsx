import React,  { Component } from 'react';
import { connect } from 'react-redux';

import {addToCard} from '../modules/actions';

class ProductList extends Component {

  render(){
    const products = this.props.products;
    const add = this.props.add;

    // the same const line 12 = 9
    // const {products} = this.props;

    return(
      <ul>
        {products.map((item) => (<li key={item.id}>
           <p>  {item.title}
               ${item.price} {item.inventory > 0 ? `X${item.inventory}` : ''}

          </p>
          <button onClick={() => add(item)} disabled={item.inventory <= 0 }>
            {item.inventory > 0 ?'Add to Cart':'Sold Out'}
          </button>
        </li>))}
      </ul>
    );
  }
}

const mapStoreToProps = (store) => ({products:Object.values(store.products)});
const mapActionsToProps = {
  add:addToCard
}

export default connect(mapStoreToProps, mapActionsToProps)(ProductList);
