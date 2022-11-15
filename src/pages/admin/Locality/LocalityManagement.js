import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    BarsOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { Space, Table, Button, Modal, Input } from 'antd';
const { Column } = Table;
const { Search } = Input;

const data = [
    {
        idlocality: 1,
        name: 'Phonglh',
        createDate: "343534534",
        creator: 'Lê Hồng Phong',
    },
    {
        idlocality: 2,
        name: 'Phonglh',
        createDate: "343534534",
        creator: 'Lê Hồng Phong',
    },
];

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

export default function LocalityManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (

        <div
            className="site-layout-background"
            style={{
                paddingTop: 20,
                paddingRight: 20,
                
                minHeight: 360,
                flex:1
            }}
        >
            <h2 style={{ display: 'inline-block' }}>Locality Management</h2>
            <div className='border-bottom border-primary'>
            </div>
            <div className='mt-3'>
                <Button type='primary' icon={<PlusOutlined />} onClick={showModal} style={{ height: '50px', fontSize: '16px', display: 'flex', alignItems: 'center' }}>Locality</Button>
                <Modal title="Add new locality" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="ADD" cancelButtonProps={{ danger: true }}>
                    <label>Name</label>
                    <Input placeholder="Basic usage" />
                </Modal>
            </div>
            <div className='mt-3'>

                <Search placeholder="input search text" enterButton
                    style={{ width: '400px' }} size="large" />
                <i className="fa-solid fa-filter ml-3" style={{ fontSize: '30px' }} />
            </div>
            <div className='mt-3'>
                <Table dataSource={data}>
                    <Column title="ID Locality" dataIndex="idlocality" key="idlocality" />
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Create Date" dataIndex="createDate" key="createDate" />
                    <Column title="Creator" dataIndex="creator" key="creator" />
                    <Column
                        title="Action"
                        key="action"
                        render={(_) => (
                            <Space size="middle">
                                <div>
                                    <Button
                                        style={{ color: 'green', marginRight: '10px', borderColor: "green" }}
                                        onClick={() => setIsEditModalOpen(true)}
                                    >
                                        <i className="fa-solid fa-pen" />
                                    </Button>
                                    <Modal
                                        title="Edit locality"
                                        open={isEditModalOpen}
                                        onOk={() => { setIsEditModalOpen(false) }}
                                        onCancel={() => { setIsEditModalOpen(false) }}
                                        okText="Save"
                                        cancelButtonProps={{ danger: true }}>
                                        <label>Name</label>
                                        <Input placeholder="Basic usage" />
                                    </Modal>
                                    <Button danger><i className="fa-solid fa-trash" /></Button>
                                </div>
                            </Space>
                        )}
                    />
                </Table>
            </div>
        </div>
    )
}
