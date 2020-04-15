import React, {Component} from 'react';
import {useFormik} from 'formik';
import axios from 'axios'

const App = () => {  
  
  
    const formik= useFormik({
      initialValues:{
        name: '',
        born: '',
        death: '',
        description: '',
        extablished: '',
        imageUrl: ''
      },
      onSubmit: values => {
        axios.post('http://localhost:3004/heroes', values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
      }
    })
    return ( 
    <div className = "App" >
      <form onSubmit={formik.handleSubmit}>
        <input 
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}/>
                <input 
          id="born"
          name="born"
          onChange={formik.handleChange}
          value={formik.values.born}/>

<input 
          id="death"
          name="death"
          onChange={formik.handleChange}
          value={formik.values.death}/>

<input 
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}/>

<input 
          id="extablished"
          name="extablished"
          onChange={formik.handleChange}
          value={formik.values.extablished}/>

<input 
          id="imageUrl"
          name="imageUrl"
          onChange={formik.handleChange}
          value={formik.values.imageUrl}/>


          <button type="submit">Submit</button>
      </form>
      </div>
    );
  
}

export default App;