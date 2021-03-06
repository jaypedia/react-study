import React from 'react';
import 'antd/dist/antd.css';
import { Input, Select, Button, Form, Radio, Row, Col, Space } from 'antd';
import {
  ReloadOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons';

function Searchbar({ onSearch, filterGanre, sort, order, resetStates }) {
  const { Search } = Input;
  const { Option } = Select;

  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
    resetStates();
  };

  const handleChange = v => {
    order(v?.target?.value);
  };

  return (
    <Form form={form}>
      <Row
        justify="center"
        align="middle"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col xs={24} xl={10}>
          <Form.Item name="search">
            <Search
              placeholder="Search movies"
              onSearch={onSearch}
              size="large"
            />
          </Form.Item>
        </Col>
        <Col xs={12} xl={4}>
          <Form.Item name="ganre">
            <Select defaultValue="Ganre" size="large" onChange={filterGanre}>
              <Option value="Action">Action</Option>
              <Option value="Drama">Drama</Option>
              <Option value="Documentary">Documentary</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={12} xl={4}>
          <Form.Item name="sort">
            <Select defaultValue="Sort" size="large" onChange={sort}>
              <Option value="title">Title</Option>
              <Option value="year">Year</Option>
              <Option value="rating">Rating</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={10} xl={3}>
          <Form.Item name="sort-option">
            <Radio.Group
              defaultValue="asc"
              size="large"
              onChange={handleChange}
            >
              <Radio.Button value="asc">
                <SortAscendingOutlined />
              </Radio.Button>
              <Radio.Button value="desc">
                <SortDescendingOutlined />
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col xs={4} xl={1}>
          <Form.Item>
            <Button className="reload" size="large" onClick={handleReset}>
              <ReloadOutlined />
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default Searchbar;
