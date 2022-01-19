import { useState } from "react";
import { Form, Input, Button } from "antd";
import "../../App.css"

function Registration(){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();

  async function registerUser(credentials) {
    const response = await fetch('http://localhost:8081/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const data = await response.json();
    console.log(data)
    return data
  }


  const onFinish = async e => {
      if(confirmPassword === password){
        const registered = await registerUser({ 
          firstName,
          lastName,
          email,
          password
        });
        if(registered.error) {
          setError(registered.error)
        }else if(registered.message){
          setError("User registered!")
          
        } else {
          setError(registered.msg['0'].msg)
        }
      } else {
        setError("Passwords don't match!")
      }
      
    };
    

    return(
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        >
        <div style={{textAlign: "center", color:"brown"}}>{error}</div>
        <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your first name!' }]}
        onChange={e => setFirstName(e.target.value)}
        >
        <Input />
        </Form.Item>
        <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name!' }]}
        >
        <Input onChange={e => setLastName(e.target.value)} />
        </Form.Item>
        <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
        >
        <Input onChange={e => setEmail(e.target.value)} type = "email" />
        </Form.Item>

        <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        >
        <Input.Password onChange={e => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item
        label="Confirm password"
        name="confirmPassword"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password onChange={e => setConfirmPassword(e.target.value)} />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Registration