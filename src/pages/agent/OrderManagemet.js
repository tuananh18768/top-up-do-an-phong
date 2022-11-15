import {
    PlusOutlined
} from '@ant-design/icons';
import { Tabs, Button, Modal, Input, Card, Form, Table, Checkbox } from 'antd';
import React, { useState } from 'react';
import TableOrderManager from './TableOrderManager';

const { TextArea } = Input;

const columns = [
    {
        title: 'Sim series'
    },
    {
        title: 'Number of Sim'
    },
    {
        title: 'Brand'
    },
    {
        title: 'Unit price'
    },
    {
        title: 'Discount (%)'
    },
    {
        title: 'VAT (%)'
    },
    {
        title: 'Cost'
    },
]

const data = ""

export default function OrderManagemet() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalCheckPay, setIsModalCheckPay] = useState(false);

    return (
        <div
            className="site-layout-background"
            style={{
                paddingTop: 24,
                paddingRight: 24,
                minHeight: 360,
                flex: 1
            }}
        >
            <div className="border-bottom border-primary">
                <h2>Order Management</h2>
            </div>
            <div className='mt-3'>
                {/* <button type="button" className="btn btn-primary"><i class="fa-solid fa-plus"></i> Order</button> */}
                <Button
                    type='primary'
                    icon={<PlusOutlined />}
                    onClick={() => setIsModalOpen(true)}
                    style={{ height: '50px', fontSize: '16px', display: 'flex', alignItems: 'center' }}
                >
                    Order
                </Button>
                <Modal
                    title={<h2>Add new Order</h2>}
                    open={isModalOpen}
                    onOk={() => {
                        setIsModalOpen(false);
                        setIsModalCheckPay(true)
                    }}
                    onCancel={() => setIsModalOpen(false)}
                    okText="Next"
                    cancelButtonProps={{ danger: true }}
                    width={800}
                >
                    <Form layout="vertical">
                        <h5>Customer information</h5>
                        <Card style={{ width: 750, marginBottom: 20 }}>
                            <div className='d-flex justify-content-between'>
                                <Form.Item
                                    label="First Name"
                                    name="firstName"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                    style={{ width: '40%' }}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Last Name"
                                    name="lastName"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                    style={{ width: '40%' }}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <Form.Item
                                label="Phone Number"
                                name="lastName"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Address"
                                name="lastName"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Card>
                        <h5>Order Information</h5>
                        <Card style={{ width: 750, marginBottom: 20 }}>
                            <Form.Item
                                label="Locality"
                                name="firstName"
                                rules={[{ required: true, message: 'Please input your username!' }]}

                            >
                                <Input />
                            </Form.Item>
                            <label>Product</label>
                            <Table columns={columns} dataSource={data}/>
                            <Button
                                type='primary'
                                icon={<PlusOutlined />}
                                style={{ height: '40px', fontSize: '16px', display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}
                            >
                                Add Sim
                            </Button>
                            <Form.Item>
                                <Checkbox>insurance</Checkbox>
                            </Form.Item>
                            <Form.Item
                                label="Revenue from order"
                                name="firstName"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Card>
                        <Form.Item
                            label="Cost to Shipper"
                            name="firstName"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Total Order Value"
                            name="firstName"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Note"
                            name="firstName"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item
                            label="Agent"
                            name="firstName"
                            rules={[{ required: true, message: 'Auto fill [name] + ([usename])' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
                <Modal title="Customer payment" open={isModalCheckPay}
                    onOk={() => setIsModalCheckPay(false)}
                    onCancel={() => setIsModalCheckPay(false)}
                    okText="Add"
                >
                    <Form layout="vertical">
                        <Form.Item
                            label="Payment methods"
                            name="firstName"
                            rules={[{ required: true, message: 'Auto fill [name] + ([usename])' }]}
                        >
                            <Input />
                        </Form.Item>
                        <div className='d-flex justify-content-between'>
                            <Form.Item
                                label="Customer paid"
                                name="firstName"
                                rules={[{ required: true, message: 'Auto fill [name] + ([usename])' }]}
                                style={{ width: "80%" }}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label=" ">
                                <Button type="primary">
                                    Accept
                                </Button>
                            </Form.Item>
                        </div>
                        <div style={{
                            paddingTop: '20px',
                            borderTop: "1px solid black"
                        }}>
                            <table className='w-100'>
                                <tr>
                                    <td>Total Order Value</td>
                                    <td>100.000.000</td>
                                </tr>
                                <tr>
                                    <td>Customer Paid</td>
                                    <td>100.000.000</td>
                                </tr>
                                <tr>
                                    <td>Customer Debts</td>
                                    <td>100.000.000</td>
                                </tr>
                            </table>
                        </div>
                    </Form>
                </Modal>
            </div>
            <div className='mt-3'>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><i className="fa-solid fa-magnifying-glass" />
                    </button>
                    <i className="fa-solid fa-filter ml-3" style={{ fontSize: '20px' }} />
                </form>
            </div>
            <div className='mt-3'>
                <Tabs
                    defaultActiveKey="1"
                    items={[
                        {
                            label: `All`,
                            key: '1',
                            children: (
                                <>
                                    <TableOrderManager />
                                </>
                            ),
                        },
                        {
                            label: `New Order`,
                            key: '2',
                            children: `Content of Tab Pane 2`,
                        },
                        {
                            label: `Order Completed`,
                            key: '3',
                            children: `Content of Tab Pane 3`,
                        },
                    ]}
                />
            </div>
        </div>
    )
}
