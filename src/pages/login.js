import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const Login = () =>{

    const schema = yup.object().shape({
        name : yup.string().required("name is required"),
        gmail : yup.string().email().required("gmail is required"),
        age : yup.number().min(18).integer().required("age must be above 18"),
        pwd : yup.string().min(8).max(16).required(),
        cpwd : yup.string().oneOf([yup.ref("pwd"), null], "passwords must match").required()
    }

    );
    
    
    const {handleSubmit, register, formState:{errors}} = useForm({
        resolver : yupResolver(schema)
    }
    )
    
    const onSubmit = (data) => {
        console.log(data)
    }
    
    
    return(
        
        
        <form class= "login" onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <input class="name" type= "text" placeholder="enter your name"   {...register("name")}/>
            <p>{errors.name?.message}</p>
            <input class="email" type= "text" placeholder="enter your email"  {...register("gmail")}/>
            <p>{errors.gmail?.message}</p>
            <input class="age" type= "number" placeholder="enter your age"  {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input  class="pwd" type= "password" placeholder="enter your password"  {...register("pwd")}/>
            <p>{errors.pwd?.message}</p>
            <input  class="cpwd" type= "password" placeholder="confirm your password"  {...register("cpwd")}/>
            <p>{errors.cpwd?.message}</p>
            <input class="submit" type="submit" />
        </form>
        
        
    )
}