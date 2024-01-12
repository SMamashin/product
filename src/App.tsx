import React, { useEffect } from 'react';
import { products } from './data/products';
import { Product } from './components/Product'


function App() {

  useEffect(() => {
    console.log("effect")
  }, [])

  return (
    <div className="main mx-auto max-w-2xl pt-5">

    {
     products.map(product => <Product product={product} key={product.id} />)
    }

        {/* <Product product={ products[0] }/>
        <Product product={ products[1] }/> */}
    </div>
  )
}

export default App;
