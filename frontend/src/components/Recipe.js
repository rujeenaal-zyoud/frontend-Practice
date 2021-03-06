import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'

class Recipe extends Component {
    render() {
        return (
          // here we put item becaucse in previce map put item
            <Card style={{ width: '18rem' }} key ={this.props.idx}>
            <Card.Img variant="top" src={this.props.item.image} />
            <Card.Body>
              <Card.Title>{this.props.item.label}</Card.Title>
              
              <ul>
                  {this.props.item.ingredientLines}
               
              </ul>



              <Button variant="dark" onClick={()=>this.props.addToFav(this.props.item)}>add To Favotaite</Button>
            </Card.Body>
          </Card>  
        )
    }
}

export default Recipe;
