import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Icon, Form, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { useDispatch } from 'react-redux'
import { login } from '../../Store/User/action'

function Login(props: FormComponentProps) {
    const history = useHistory();
    const dispatch = useDispatch()
    function handleSubmit(e: React.FormEvent) {
        props.form.getFieldValue('username')
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if(!err) {
                setTimeout(() => {
                    const token: string = 'test'
                    dispatch(login(values.username, token))
                    history.push('/')
                })
            }
        })
    }
    const { getFieldDecorator, getFieldValue, setFieldsValue } = props.form;
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your username!'
                        }
                    ]
                })(<Input suffix={getFieldValue('username') ? <Icon type="close-circle" theme="twoTone" onClick={() => setFieldsValue({username: ''})}/>: <span/>}/>)}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('psssword', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your password!'
                        }
                    ]
                })(<Input type="password" suffix={getFieldValue('psssword') ? <Icon type="close-circle" theme="twoTone" onClick={() => setFieldsValue({psssword: ''})}/>: <span/>}/>)}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
}

const LoginForm = Form.create()(Login);

export default LoginForm;
