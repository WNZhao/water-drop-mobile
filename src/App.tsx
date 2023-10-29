import { useMutation, useQuery } from '@apollo/client';
import './App.css';
import React, { useState } from 'react';
import { Button, Calendar, Form, Input } from 'antd-mobile';
import { FIND, UPDATE } from './graphql/demo';

function App() {
  useState();

  const { loading, data } = useQuery(FIND, {
    variables: {
      id: 'a885979b-b1aa-467b-ab9e-2ca69f1918a1',
    },
  });

  const [update] = useMutation(UPDATE);

  const onclickUpdateHandler = (
    v: React.MouseEvent<HTMLButtonElement, Event>
  ) => {
    console.log(v);
    update({
      variables: {
        id: 'a885979b-b1aa-467b-ab9e-2ca69f1918a1',
        params: {
          ...v,
        },
      },
    });
  };
  return (
    <div>
      <Calendar />
      <p>
        data:
        {JSON.stringify(data)}
      </p>
      <p>
        loading:
        {`${loading}`}
      </p>
      <Form
        layout="horizontal"
        onFinish={onclickUpdateHandler}
        footer={
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        }
      >
        <Form.Item name="name" label="姓名">
          <Input />
          {/* <input type="text" onChange={onchangeNameHandler} /> */}
        </Form.Item>

        <Form.Item name="desc" label="描述">
          <Input />
          {/* <input type="text" onChange={onchangeDescHandler} /> */}
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
