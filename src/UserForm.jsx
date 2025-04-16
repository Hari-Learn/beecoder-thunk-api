import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { adduser } from "./redux/userSlice";

const UserForm = ()=>{
    const {register, handleSubmit,reset,formState:{errors}} = useForm();
    const dispatch = useDispatch();

    const submitData = (data) => {
        console.log(data)
        dispatch(adduser(data))
        reset()
    }
    return(
        <form onSubmit={handleSubmit(submitData)} className="mb-4">
            <div className="mb-3">
                <label htmlFor="name"  className="form-label">User Name</label>
                <input type="text"   
                 placeholder="Your Name" id="name"               
                 className={`form-control ${errors.name ? 'is-invalid' : ''}`}                 
                {...register('name',{required:'Name is required'})} />
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                 
            </div>
           
            <div className="mb-3">
                <label htmlFor="email"  className="form-label"> Email Address</label>
                <input type="email"  placeholder="name@gmail.com" id="email"
                 className={`form-control ${errors.email ? 'is-invalid' : ''}`}  
                {...register('email',{required:'Email is required'})}  />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
            
            <input className="btn btn-primary" type="submit" value="Add User"  />

        </form>
    )
}
export default UserForm