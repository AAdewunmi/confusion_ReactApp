import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody,
       Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

  function RenderDish({dish}){
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
    
    function RenderComments({comments}) {
    if(comments !=null){
      return (
          comments.map((comment) => (
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
  /*  
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
  */
  
  const DishDetail = (props) => { 
    if(props.dish !=null){
    return (
      <div className='container'>
         
          <div className="row">
                
           <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
        
              <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
              </div>  
        
              <div className="col-12 col-md-5 m-1">
                  <RenderDish dish={props.dish} />
              </div>
        
              <div className="col-12 col-md-5 m-1" style={{ display: 'inline-block' }}> 
                   <h4>Comments</h4>
                      <ul className="list-unstyled">
                        <RenderComments comments={props.comments} />
                      </ul>
              </div>
        
          </div>
      </div>
    );
    }else
    {
      return(
        <div></div>
      );
    }
      
  }


export default DishDetail;