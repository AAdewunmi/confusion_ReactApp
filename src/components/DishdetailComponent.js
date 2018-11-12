import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';

class DishDetail extends Component {

  renderDish(dish){
    if(dish !=null){
      return (
        
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
          </Card>
        
        
      );
    }
    else
    {
      return(
        <div></div>
      );
    }
  }
    
     /*
    {this.renderDate(comment.date)}
    */
    
    renderComments(dish) {
    if(dish !=null){
      return (
          dish.comments.map((comment) => (
              <li key={comment.id} >
                  <p>{comment.comment}</p>
                  <p>-- {comment.author}, 
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
                )
                )
            )
    }
    else
    {
      return(
        <div></div>
      );
    }
}
    
  renderDate(date) {
    return (
        new Intl.DateTimeFormat(
            'en-US',
            {
                year: 'numeric',
                month: 'long',
                day: '2-digit'
            }).format(new Date(date))
    )
}
  
  
  render(){
    return (
      <div className='container'>
         
          <div className="row">
              <div className="col-12 col-md-5 m-1">
                  {this.renderDish(this.props.dish)}
              </div>
              <div className="col-12 col-md-5 m-1" style={{ display: 'inline-block' }}> 
                  
                   <h4>Comments</h4>
                        <ul className="list-unstyled">
                        {this.renderComments(this.props.dish)}
                        </ul>
              </div>

          </div>
      </div>
    );
   
  }
}

export default DishDetail;