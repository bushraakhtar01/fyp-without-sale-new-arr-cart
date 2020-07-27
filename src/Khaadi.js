import React, { Component } from 'react';
import  AdminUI from './AdminUI';
import TopNav from './TopNav';
import axios from 'axios';

import {Link} from "react-router-dom";
import Home from './Home';


class Khaadi extends Component{

 
  constructor(props){
  super(props); 
  this.state={
      brands: [{}],
      isEdit: false,
      isDelete: false,
      id: ''
      }
  }

  async componentDidMount(){
    if(!sessionStorage.getItem("userData")){
      this.props.history.push('/login')
  }else{
      const url="http://localhost/php_rest_myblog/api/post/read.php";
      const response=await fetch(url);
      const data= await response.json();
     this.setState({brands:data.data});
     console.log(this.state.brands)

  }
}

update(record){
this.setState({
  isEdit: true,
  id: record.id,
  name: record.name,
  code: record.code,
  brand: record.brand,
  color: record.color,
  material: record.material,
  type: record.type,
  price: record.price,
  size_id: record.size_id,
  category_id: record.category_id
})


 
}
delete(record){


 
  axios.post("http://localhost/php_rest_myblog/api/post/delete.php/", {
      id: record.id
  })
  .then(response=>{
   const newState= this.state.brands.slice();
  newState.splice(newState.indexOf(record), 1)
  this.setState({
      brands:newState
  })
  
  }).catch(error=>{
      console.log(error);
  })

}
popUp= e => {
  this.setState({isDelete: true})
}

changeHandler= e => {
  this.setState({[e.target.name]: e.target.value})
}

submitHandler = e  =>{
  e.preventDefault()
  var formData = new FormData();
  formData.append("id",this.state.id)
  formData.append("name", this.state.name);
  formData.append("code", this.state.code);
  formData.append("brand", this.state.brand);
  formData.append("color", this.state.color);
  formData.append("material",this.state.material);
  formData.append("price", this.state.price);
  formData.append("type", this.state.type);
 formData.append("size_id", this.state.size_id);
  formData.append("category_id", this.state.category_id);
  formData.append("file", this.state.file);
  const config = {
      headers: { 
          'content-type': 'multipart/form-data'
      }
  }


  axios.post('http://localhost/php_rest_myblog/api/post/update.php',formData,config)
  .then(response=>{console.log(response)})


}
close(){
  const a=document.getElementsByClassName('adminsidenav')[0]
  a.style.display='none';
  const b=document.getElementById('imagecolid');
  b.style.display='block';

}
render(){

  const {brands} = this.state

 if(this.state.isEdit==true){


  return(
    <div className="container-fluid admincontainer">
              
    <div className="row">
    <div className="col-lg-2 col-md-12 col-sm-12 col-12 bg-dark adminsidenav">
    <p className="adminclose" onClick={this.close}>X</p>
    <Link to='/home'><img src="adminlogo.png" className="adminpic"></img></Link>

    <h2 className="adminhead">Admin</h2>
    <p className="webhead">Web Developer</p>
    
    <ul className="adminsidenavlist">
    <Link to="/alkaram"><li>
    Alkaram
    </li></Link> 
    <hr></hr>
    <Link to="/gulahmed"><li>
    Gul Ahmed
    </li></Link> 
    <hr></hr>
    
    <Link to="/khaadi"><li>
    Khaadi
    </li></Link> 
    <hr></hr>
    
    <Link to="/nishaat"><li>
    Nishat
    </li></Link> 
    <hr></hr>
    
    <Link to="/sapphire"><li>
    Sapphire
    </li></Link> 
    <hr></hr>
    
    <Link to="/sanasafinaz"><li>
    Sana Safinaz
    </li></Link> 
    <hr></hr>
    
    <Link to="/userqueries"><li>
    User Queries/Comments
    </li></Link> 
    <hr></hr>
    
    </ul>
    </div>
  <div className="col-lg-10 addformdiv" id="imagecolid" style={{backgroundImage:"url(/addcover.jpg)"}} >
<form  encType="multipart/form-data" className="addform px-5" >
<h1 className="addformheading pt-5">Khaadi Update Record Pannel</h1>
<hr></hr>
<div className="form-group"  >
  <label className="addformlabel" >Id</label>

  <input type="text" className="form-control "  name="id" defaultValue={this.state.id} onChange={this.changeHandler} />
 
</div>

<div className="form-group"  >
  <label className="addformlabel" >Name</label>

  <input type="text" className="form-control "  name="name" defaultValue={this.state.name} onChange={this.changeHandler} />
 
</div>
<div className="form-group"  >
  <label className="addformlabel"   >Code</label>

  <input type="text" className="form-control " name="code" defaultValue={this.state.code}  onChange={this.changeHandler} />
</div>
<div className="form-group"  >
  <label className="addformlabel"   >Brand</label>

  <input type="text" className="form-control "  name="brand" defaultValue={this.state.brand} onChange={this.changeHandler} />
 
</div>
<div className="form-group"  >
  <label className="addformlabel"   >Color</label>

  <input type="text" className="form-control " name="color" defaultValue={this.state.color}  onChange={this.changeHandler} />
</div>
<div className="form-group"  >
  <label className="addformlabel"   >Material</label>
  <input type="text" className="form-control " name="material" defaultValue={this.state.material}  onChange={this.changeHandler} />
 
</div>
<div className="form-group" >
  <label className="addformlabel"  >Price</label>
  <input type="number" className="form-control " name="price" defaultValue={this.state.price} onChange={this.changeHandler} />
</div>
<div className="form-group" >
  <label className="addformlabel"   >Type</label>
  <input type="text" className="form-control " name="type" defaultValue={this.state.type}  onChange={this.changeHandler}/>
</div>
<div className="form-group"  >
  <label className="addformlabel"  >Size_id</label>
  <input type="number" className="form-control " name="size_id" defaultValue={this.state.size_id} onChange={this.changeHandler} />
</div>
<div className="form-group"  >
  <label className="addformlabel"  >Category_id</label>
  <input type="number" className="form-control " name="category_id" defaultValue={this.state.category_id} onChange={this.changeHandler}  />
</div>
<div className="form-group"  >
  <label className="addformlabel"   >File</label>
  <input type="file" className="form-control"  name="file"  onChange={(e)=>this.setState({file: e.target.files[0]})}  />
</div>

<button type="submit" className="btn btn-primary addformbuttons mx-3 "
onClick={this.submitHandler}>Update Record</button>
 
<Link to="/" ><button className="btn btn-primary addformbuttons mx-3 " 
>Back</button></Link>
</form>
</div>
   </div>
   </div>
   
 
// <div className="jumbotron jumbotron-fluid" style={{marginLeft: '160px', marginTop:'10px',backgroundImage: 'url(kcover.jpg)',backgroundSize:'cover'}}>
// <div className="container">
            
//             <h1 className="display-4" style={{ marginLeft: '210px',fontFamily:'helvatica', letterSpacing:'2px',color:'#ef9a9a'}}>Khaadi Update Pannel</h1>
//             <hr class="my-4" ></hr>
//           </div>
//       <AdminUI />

  
//   <form  encType="multipart/form-data" style={{ marginTop:'80px', marginLeft: '300px',color:'white'}}>
//   <div className="form-group" style={{marginLeft:'-80px'}}>
//     <label  style={{fontSize:'20px', letterSpacing:'2px',fontWeight: 'bold'}} >Id</label>
 
//     <input type="number" className="form-control col-7" name="id" defaultValue={this.state.id}  />
//   </div>
 
//   <div className="form-group"  style={{marginLeft:'-80px'}}>
//     <label style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}} >Name</label>
 
//     <input type="text" className="form-control col-7" name="name" defaultValue={this.state.name} onChange={this.changeHandler} />
//    
//   </div>
//   <div className="form-group"  style={{marginLeft:'-80px'}}>
//     <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Code</label>
 
//     <input type="text" className="form-control col-7"  name="code" defaultValue={this.state.code}  onChange={this.changeHandler}  />
//   </div>
//   <div className="form-group"  style={{marginLeft:'-80px'}}>
//     <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Brand</label>
 
//     <input type="text" className="form-control col-7" name="brand" defaultValue={this.state.brand}  onChange={this.changeHandler} />
//    
//   </div>
//   <div className="form-group"  style={{marginLeft:'-80px'}}>
//     <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Color</label>
 
//     <input type="text" className="form-control col-7" name="color" defaultValue={this.state.color}  onChange={this.changeHandler} />
//   </div>
//   <div className="form-group"  style={{marginLeft:'-80px'}}>
//     <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Material</label>
//     <input type="text" className="form-control col-7"  name="material" defaultValue={this.state.material}  onChange={this.changeHandler} />
//    
//   </div>
//   <div className="form-group"  style={{marginLeft:'-80px'}}>
//     <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}} >Price</label>
//     <input type="number" className="form-control col-7" name="price" defaultValue={this.state.price}  onChange={this.changeHandler} />
//   </div>
//   <div className="form-group"  style={{marginLeft:'-80px'}}>
//     <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Type</label>
//     <input type="number" className="form-control col-7"  name="type" defaultValue={this.state.type}  onChange={this.changeHandler}/>
//   </div>
//   <div className="form-group"  style={{marginLeft:'-80px'}}>
//     <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}} >Size_id</label>
//     <input type="number" className="form-control col-7" name="size_id" defaultValue={this.state.size_id} onChange={this.changeHandler}  />
//   </div>
//   <div className="form-group"  style={{marginLeft:'-80px'}}>
//     <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}} >Category_id</label>
//     <input type="number" className="form-control col-7" name="category_id" defaultValue={this.state.category_id} onChange={this.changeHandler}  />
//   </div>
//   <div className="form-group"  style={{marginLeft:'-80px'}}>
//     <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >File</label>
//     <input type="file" className="form-control col-7"  name="file"  onChange={(e)=>this.setState({file: e.target.files[0]})}  />
//   </div>
//  <div>
//   <button type="submit" className="btn btn-primary col-7" style={{backgroundColor:'#00695c',borderColor:'#00695c', marginLeft:'-60px'}} 
//    onClick={this.submitHandler}>Submit</button>
//    </div>
  
//    <button className="btn btn-primary col-7" style={{backgroundColor:'#ef9a9a',borderColor:'#ef9a9a',  marginLeft:'-60px',marginTop:'10px'}}

//   ><Link to="/" ></Link>Back</button>

// </form>
// </div>
  );
     
 }

if(this.state.isDelete==true){

return(
<div >
        {/* Button trigger modal */}
        {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button> */}
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
 
);


}

  return(     
    <div>
                       
    <div className="container-fluid admincontainer">
        
<div className="row">
<div className="col-lg-2 col-md-12 col-sm-12 col-12 bg-dark adminsidenav">
<p className="adminclose" onClick={this.close}>X</p>
<Link to='/home'><img src="adminlogo.png" className="adminpic"></img></Link>
<h2 className="adminhead">Admin</h2>
<p className="webhead">Web Developer</p>

<ul className="adminsidenavlist">
<Link to="/alkaram"><li>
Alkaram
</li></Link> 
<hr></hr>
<Link to="/gulahmed"><li>
Gul Ahmed
</li></Link> 
<hr></hr>

<Link to="/khaadi"><li>
Khaadi
</li></Link> 
<hr></hr>

<Link to="/nishaat"><li>
Nishat
</li></Link> 
<hr></hr>

<Link to="/sapphire"><li>
Sapphire
</li></Link> 
<hr></hr>

<Link to="/sanasafinaz"><li>
Sana Safinaz
</li></Link> 
<hr></hr>

<Link to="/userqueries"><li>
User Queries/Comments
</li></Link> 
<hr></hr>

</ul>
</div>
<div className="col-lg-10  adminpage" id="imagecolid">
<h1 className="adminheading pt-lg-5 pt-md-5 pt-sm-5 pt-4 px-5">Welcome Khaadi to Admin Pannel</h1>
<hr></hr>
<h2 className="adminparagraph px-5 pt-0">View all the brands available to pehnaway, their respective data and see user queries.</h2>
<Link to="/createApi" ><button type="button" className="btn btn-outline-success ml-lg-5 ml-md-4 ml-sm-3 ml-2 p-1 mt-3"><i className="plus icon"></i> Add Record</button></Link>

<div className="row px-lg-4 px-md-4 pt-lg-5 pt-md-5 pt-sm-5 pt-3">
  {this.state.brands.map(brand=>
<div className="col-lg-4 col-md-4 col-sm-6 col-6">
<img className="adminimages px-2 pb-4" src={"http://localhost/php_rest_myblog/api/post/" + brand.image}></img>
<div className="px-2 pb-5"> 
  <h4 className="recordssubheadings">{brand.name}</h4>
  <hr></hr>
  <h4 className="recordssubheadings">{brand.code}</h4>
  <hr></hr>
  <h4 className="recordssubheadings">{brand.category_name}</h4>
  <hr></hr>
  <h5 className="recordssmallheadings">{brand.color}</h5>
  <hr></hr>
  <h5 className="recordssmallheadings">{brand.material}</h5>
  <hr></hr>
  <h5 className="recordssmallheadings">{brand.size_type}</h5>
  <hr></hr>
  <h5 className="recordssmallheadings">PKR {brand.price}</h5>
  <div className=" pt-2">
  <i class="fa fa-pencil-square-o fa-2x" onClick={this.update.bind(this, brand)} aria-hidden="true"></i>
  <i class="fa fa-trash-o fa-2x px-2"  onClick={this.delete.bind(this,brand)} aria-hidden="true"></i>
  </div>



  </div>
</div>
  )}
</div>
</div>
</div>

</div>

</div>

  
      



);
}
}
export default (Khaadi);
