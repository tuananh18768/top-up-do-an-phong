import { Space, Table, Button, Modal, Input } from 'antd';
import React, { useState } from 'react';
const { Column } = Table;

const { TextArea } = Input;

const data = [
    {
        agentID: 1,
        userName: 'Phonglh',
        password: "343534534",
        fullName: 'Lê Hồng Phong',
        phoneNumber: "0987005806",
        email: 'Phonglhgch18715@fpt.edu.vn',
    },
    {
        agentID: 2,
        userName: 'Phonglh',
        password: "343534534",
        fullName: 'Lê Hồng Phong',
        phoneNumber: "0987005806",
        email: 'Phonglhgch18715@fpt.edu.vn',
    },
    {
        agentID: 3,
        userName: 'Phonglh',
        password: "343534534",
        fullName: 'Lê Hồng Phong',
        phoneNumber: "0987005806",
        email: 'Phonglhgch18715@fpt.edu.vn',
    },
];

const TableAgentManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return <Table dataSource={data}>
        <Column title="Agent ID" dataIndex="agentID" key="agentID" />
        <Column title="User Name" dataIndex="userName" key="userName" />
        <Column title="Password" dataIndex="password" key="password" />
        <Column title="Full Name" dataIndex="fullName" key="fullName" />
        <Column title="Phone number" dataIndex="phoneNumber" key="phoneNumber" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column
            title="Action"
            key="action"
            render={(_) => (
                <Space size="middle">
                    <Button onClick={showModal}><i class="fa-solid fa-lock"></i></Button>
                    <Modal title="Are you sure about Lock Agent? Enter the reason"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText="Lock"
                        footer={[
                            <Button key="submit" type="primary" danger onClick={handleOk}>
                                Lock
                            </Button>,
                            <Button key="back" onClick={handleCancel}>
                            Cancel
                          </Button>
                        ]}
                    >
                        <h6>Reason</h6>
                        <TextArea rows={4} />
                    </Modal>
                    <i class="fa-solid fa-eye text-primary"></i>
                </Space>
            )}
        />
    </Table>
};

export default TableAgentManagement;