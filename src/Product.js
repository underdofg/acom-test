import React, { Component } from 'react'
import { Card} from 'antd';

import "./App.css"
import StarRatings from 'react-star-ratings';
import NumberFormat from 'react-number-format';

export class Product extends Component { 
    render() { 
        const product = this.props.dataDetail;
        // console.log(product);

        const date1 = new Date(product.created_at);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7)); 
        // console.log(diffDays);
        
    return (
      <Card
          hoverable
          style= {{ 
            width: 270,
            paddingLeft: '2px',
            margin:'10px' }}
          cover={
            <img 
            style = {{
              marginBottom:'20px'
            }}
            alt='product' 
            src={product.image_url} 
            /> }
         >
         <div 
          style={{
            height:'10px' ,
            font: '13px',
            width: '370', 
            borderBottom: '20px', 
            marginTop: '100x'}}>
              {product.title}
          </div>
         <div style={{ 
           marginTop: '45px',
           marginBottom: '7px',
           font:'10 px', 
           fontWeight:'initial'}}>
             {diffWeeks} weeks ago
          </div>  
         <StarRatings 
            style = {{padding:'4px'}}
            rating = {product.vote}
            starRatedColor="red"
            starDimension="20px"
            starSpacing="1px"
          />
          <NumberFormat
            style = {{ fontWeight:'bolder' }}
            value={product.price} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'฿'} 
            renderText={value => 
              <div 
                style= {{
                  paddingTop: '30px', 
                  fontWeight:'bold', 
                  fontSize:'17px'}} >
                  {value}.00
              </div>} />
      </Card>
    )
 }
}

export default Product
