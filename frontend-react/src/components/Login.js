import { Form, Input, Button } from "antd";
import PropTypes from 'prop-types';
import { useState } from "react";

export default function Login({setUser}){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState("");
  

  async function loginUser(credentials) {
    const response = await fetch('http://localhost:8081/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
			body: JSON.stringify(credentials)
    })
    const data = await response.json();
    return data
  }


  const onFinish = async e => {
      
      const token = await loginUser({
        email,
        password
      });
      if(token.token) {
        setUser(token);
        setError("")
      }else if(token.error){
        setError(token.error)
      } else {
        setError(token.msg['0'].msg)
      }
    };
    

    return(
      <>
        <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ remember: false }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <div style={{textAlign: "center", color:"red"}}>{error}</div>
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

      <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    </>
  );
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
};