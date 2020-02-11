import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Product from "./Product";

export class products extends Component {

    renderProducts() {
        return this.props.products.map(product =>
         <Col type='flex' justify='center' className="3" gutter={5}>
            <Product dataDetail={product} />
         </Col>
       )
    }
    render() {
        return (
          <Row type='flex' justify='center' className="2">
            {this.renderProducts()}
          </Row>
        )
    }
}

export default products
