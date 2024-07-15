import { Input, Button } from "@chakra-ui/react"
import { useState } from "react"

function Login() {

    const [inputs, setInputs] = useState({
        email:'',
        password: '',
        confirmPassword:''
    })

  return (
    <>
        <Input
            placeholder='Email'
            fontSize={14}
            type='email'
            value={inputs.email}
            onChange={(e) => setInputs({...inputs,email:e.target.value})}
            size={"sm"}
        />

        <Input 
            placeholder='Password'
            fontSize={14}
            type='password'
            value={inputs.password}
            onChange={(e) => setInputs({...inputs,password:e.target.value})}
            size={"sm"}
        />

        <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14} >
            Log In
        </Button>   
    </>
  )
}

export default Login