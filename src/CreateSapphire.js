import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import AdminUI from './AdminUI';
class CreateSapphire extends React.Component{
    constructor(props){
        super(props)
        this.state={
          
            name:'',
            code:'',
            brand:'',
            color:'',
            material:'',
            price:'',
            type:'',
            size_id:'',
            category_id:'',
            image:'',
       

        }
    }
    componentDidMount(){
      if(!sessionStorage.getItem("userData")){
          
          this.props.history.push('/login')
      }
  }
    changeHandler= e => {
        this.setState({[e.target.name]: e.target.value})
    }
    close(){
      const a=document.getElementsByClassName('adminsidenav')[0]
      a.style.display='none';
      const b=document.getElementById('imagecolid');
      b.style.display='block';
    
    }

    submitHandler= e => {
        
        e.preventDefault()
        var formData = new FormData();
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
    
     
        axios.post('http://localhost/sapphire/api/post/create.php',formData,config)
        .then(response=>{console.log(response)})

        console.log(this.state)
    }

    render(){
        const { name, code, brand, color, material, price, type, size_id, category_id, image}=this.state
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
        <div className="col-lg-10 addformdiv" id="imagecolid" style={{backgroundImage:'url(/sadd.jpg)'}} >
      <form  encType="multipart/form-data" className="addform px-5" >
      <h1 className="addformheading pt-5"  style={{color:'black'}}>Sapphire Add Record Pannel</h1>
      <hr></hr>
     
      <div className="form-group"  >
        <label className="addformlabel"  style={{color:'black'}} >Name</label>
     
        <input type="text" className="form-control " name="name" value={name} onChange={this.changeHandler} />
        {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div className="form-group"  >
        <label className="addformlabel"  style={{color:'black'}}   >Code</label>
     
        <input type="text" className="form-control " name="code" value={code}  onChange={this.changeHandler} />
      </div>
      <div className="form-group"  >
        <label className="addformlabel"  style={{color:'black'}}   >Brand</label>
     
        <input type="text" className="form-control "  name="brand" value={brand}  onChange={this.changeHandler} />
        {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div className="form-group"  >
        <label className="addformlabel"  style={{color:'black'}}   >Color</label>
     
        <input type="text" className="form-control " name="color" value={color}  onChange={this.changeHandler} />
      </div>
      <div className="form-group"  >
        <label className="addformlabel"  style={{color:'black'}}   >Material</label>
        <input type="text" className="form-control " name="material" value={material}  onChange={this.changeHandler} />
        {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div className="form-group" >
        <label className="addformlabel"  style={{color:'black'}}  >Price</label>
        <input type="number" className="form-control " name="price" value={price}  onChange={this.changeHandler} />
      </div>
      <div className="form-group" >
        <label className="addformlabel"  style={{color:'black'}}   >Type</label>
        <input type="text" className="form-control " name="type" value={type}  onChange={this.changeHandler}/>
      </div>
      <div className="form-group"  >
        <label className="addformlabel"  style={{color:'black'}}  >Size_id</label>
        <input type="number" className="form-control " name="size_id" value={size_id} onChange={this.changeHandler} />
      </div>
      <div className="form-group"  >
        <label className="addformlabel"  style={{color:'black'}}  >Category_id</label>
        <input type="number" className="form-control " name="category_id" value={category_id} onChange={this.changeHandler}  />
      </div>
      <div className="form-group"  >
        <label className="addformlabel"  style={{color:'black'}}   >File</label>
        <input type="file" className="form-control " name="file"  onChange={(e)=>this.setState({file: e.target.files[0]})}  />
      </div>
     
      <button type="submit" className="btn btn-primary addformbuttons mx-3 "
      onClick={this.submitHandler}>Add Record</button>
       
    <Link to="/" ><button className="btn btn-primary addformbuttons mx-3 " 
      >Back</button></Link>
    </form>
    </div>
         </div>
         </div>
        )
    }
}
export default CreateSapphire;