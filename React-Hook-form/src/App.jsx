
import './App.css'
import {useForm} from "react-hook-form"

function App() {
  
  const{
    register,
    handleSubmit,
    watch,
    formState: {error},

  } =useForm();


  function onSubmit(data){
    console.log("Submitting the form" , data)
  }

  return (
  
    <form>
      <div>
        <label>First name</label>
        <input {...register('firstName',{required: true,
          minLength:{value:3,message:"Min length atleast 3"},
          maxLength:6
        })}/>
      </div>
      <br/>
      <div>
        <label>Middle name</label>
        <input {...register('middleName')}/>
      </div>
      <br/>
      <div>
        <label>last name</label>
        <input {...register('lastName')}/>
      </div>
      <br/>
      <input type="submit"/>
    </form>
   
     
    
  )
}

export default App
