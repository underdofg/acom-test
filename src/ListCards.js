import React, { Component } from 'react'
import { Row,Col } from 'antd';

import Products from './Products'
import Footer from './Footer';


export class ListCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
      }
    componentWillMount() {
        // console.log(this)
        fetch('https://bitbucket.org/acommerce/homework-challenges/raw/38efa6503538cd3a118ec3d11cd064ea5874b41f/list.json')
        .then(response => {
            return response.json();
        }).then(data => {
            this.setState({ data: data})
            // this.state.data.map(data => console.log(data.vote))
        })
    } 
    render() {
        return (
         <Row>
           <div style={{ paddingLeft:'15px', paddingTop:'20px'}}>
             Items 1-12of23  
           </div>
           <br></br>
            <Col type='flex' justify='center' spam={20}>
                <Products products = {this.state.data}/>
            </Col>
            <br></br>
            <Footer />
         </Row>
        )
    }
}

export default ListCards
