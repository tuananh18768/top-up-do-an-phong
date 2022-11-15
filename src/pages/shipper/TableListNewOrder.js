import { Space, Table } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Column } = Table;
const data = [
    {
        key: '1',
        orderID: 1,
        fullName: 'Brown',
        phoneNumber: "343534534",
        locality: 'New York No. 1 Lake Park',
        products: 20,
        revenue: 'dfsdfsdfdsf',
        costToShiper: '200$',
        totalValue: "2342",
        agent: 'dsdfsdf',
        dateCreated: '10/10/2022',
        status: "true",
    },
    {
        key: '1',
        orderID: 1,
        fullName: 'Brown',
        phoneNumber: "343534534",
        locality: 'New York No. 1 Lake Park',
        products: 20,
        revenue: 'dfsdfsdfdsf',
        costToShiper: '200$',
        totalValue: "2342",
        agent: 'dsdfsdf',
        dateCreated: '10/10/2022',
        status: "true",
    },
    {
        key: '1',
        orderID: 1,
        fullName: 'Brown',
        phoneNumber: "343534534",
        locality: 'New York No. 1 Lake Park',
        products: 20,
        revenue: 'dfsdfsdfdsf',
        costToShiper: '200$',
        totalValue: "2342",
        agent: 'dsdfsdf',
        dateCreated: '10/10/2022',
        status: "true",
    },
];

const TableListNewOrder = () => (
    <Table dataSource={data}>
        <Column title="Order ID" dataIndex="orderID" key="orderID" />
        <Column title="Full Name" dataIndex="fullName" key="fullName" />
        <Column title="Phone number" dataIndex="phoneNumber" key="phoneNumber" />
        <Column title="Locality" dataIndex="locality" key="locality" />
        <Column title="Products" dataIndex="products" key="products" />
        <Column title="Insurance" dataIndex="insurance" key="insurance" />
        <Column title="Revenue" dataIndex="revenue" key="revenue" />
        <Column title="Cost To Shiper" dataIndex="costToShiper" key="costToShiper" />
        <Column title="Total Value" dataIndex="totalValue" key="totalValue" />
        <Column title="Agent" dataIndex="agent" key="agent" />
        <Column title="Date Created" dataIndex="dateCreated" key="dateCreated" />
        <Column
            title="Action"
            key="action"
            render={(_) => (
                <Space size="middle">
                    <Link to="detailOfOrderOne"><span className='btn btn-primary'>View</span></Link>
                    <span className='btn btn-primary' data-toggle="modal" data-target="#bookModal">Book</span>
                </Space>
            )}
        />
    </Table>
);

export default TableListNewOrder;