import React, { useState } from 'react';
import { Layout, Space, Table, Tabs, Modal, Image, Button } from 'antd';
import Receive from './Receive';
import RejectShipper from './RejectShipper';
import LockShipper from './LockShipper';
const { Column } = Table;

const data = [
    {
        id: 1,
        fullName: 'Phonglh',
        birthday: "343534534",
        citizenID: 'Lê Hồng Phong',
        gender: 'Lê Hồng Phong',
        email: 'Lê Hồng Phong',
        phoneNumber: 'Lê Hồng Phong',
        address: 'Lê Hồng Phong',
        locality: 'Lê Hồng Phong',
        status: 'Lê Hồng Phong',
    },
    {
        id: 2,
        fullName: 'Phonglh',
        birthday: "343534534",
        citizenID: 'Lê Hồng Phong',
        gender: 'Lê Hồng Phong',
        email: 'Lê Hồng Phong',
        phoneNumber: 'Lê Hồng Phong',
        address: 'Lê Hồng Phong',
        locality: 'Lê Hồng Phong',
        status: 'Lê Hồng Phong',
    },
];

export default function ShipperManagement() {
    const [isOpenDetailShipper, setIsOpenDetailShipper] = useState(false);

    return (

        <div
            className="site-layout-background"
            style={{
                paddingTop: 20,
                paddingRight: 20,
                minHeight: 360,
                flex: 1
            }}
        >
            <h2 className='mt-3'>Shipper Management</h2>
            <div className='border-bottom border-primary'>
            </div>
            <div className='mt-5'>
                <button type="button" className="btn btn-primary"><i class="fa-solid fa-plus"></i> Order</button>
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
                                    <Table dataSource={data}>
                                        <Column title="ID" dataIndex="id" key="id" />
                                        <Column title="Full Name" dataIndex="fullname" key="fullname" />
                                        <Column title="Birthday" dataIndex="birthday" key="birthday" />
                                        <Column title="Citizen ID" dataIndex="citizenID" key="citizenID" />
                                        <Column title="Gender" dataIndex="gender" key="gender" />
                                        <Column title="Email" dataIndex="email" key="email" />
                                        <Column title="Phone Number" dataIndex="phoneNumber" key="phoneNumber" />
                                        <Column title="Address" dataIndex="address" key="address" />
                                        <Column title="Locality" dataIndex="locality" key="locality" />
                                        <Column title="Status" dataIndex="status" key="status" />
                                        <Column
                                            title="Action"
                                            key="action"
                                            render={(_) => (
                                                <Space size="middle">
                                                    <div>
                                                        <span className='mr-4 btn'><i className="fa-solid fa-lock" />
                                                        </span>
                                                        <span className='btn btn-primary'><i className="fa-solid fa-eye" onClick={() => setIsOpenDetailShipper(true)} />
                                                        </span>
                                                    </div>
                                                    <Modal open={isOpenDetailShipper} onOk={() => setIsOpenDetailShipper(false)} onCancel={() => setIsOpenDetailShipper(false)}
                                                        footer={[
                                                            <Button type='primary'>
                                                                Receive
                                                            </Button>,
                                                            <Button type='primary' danger>
                                                                Reject
                                                            </Button>,
                                                            <Button>
                                                                Cancel
                                                            </Button>,
                                                            <br />,
                                                            <Button type='primary'>
                                                                Unlock
                                                            </Button>,
                                                            <Button type='primary' danger>
                                                                Lock
                                                            </Button>,
                                                            <Button>
                                                                Cancel
                                                            </Button>,
                                                        ]}
                                                    >
                                                        <Image
                                                            width={200}
                                                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                                        />
                                                        <span style={{
                                                            marginLeft: "20px",
                                                            fontSize: '16px',
                                                            fontWeight: '700'
                                                        }}>Full Name</span>
                                                        <div className='mt-4'>
                                                            <table className='w-100'>
                                                                <tr>
                                                                    <td><span style={{
                                                                        marginLeft: "20px",
                                                                        fontSize: '16px',
                                                                        fontWeight: '700'
                                                                    }}>Birthday:</span></td>
                                                                    <td>[dd/mm/yyy]</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><span style={{
                                                                        marginLeft: "20px",
                                                                        fontSize: '16px',
                                                                        fontWeight: '700'
                                                                    }}>Citizen:</span></td>
                                                                    <td>[Citizen]</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><span style={{
                                                                        marginLeft: "20px",
                                                                        fontSize: '16px',
                                                                        fontWeight: '700'
                                                                    }}>Gender:</span></td>
                                                                    <td>Male</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><span style={{
                                                                        marginLeft: "20px",
                                                                        fontSize: '16px',
                                                                        fontWeight: '700'
                                                                    }}>Email:</span></td>
                                                                    <td>bachtuananh@gmail.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><span style={{
                                                                        marginLeft: "20px",
                                                                        fontSize: '16px',
                                                                        fontWeight: '700'
                                                                    }}>Phone Number:</span></td>
                                                                    <td>0204204803284</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><span style={{
                                                                        marginLeft: "20px",
                                                                        fontSize: '16px',
                                                                        fontWeight: '700'
                                                                    }}>Address:</span></td>
                                                                    <td>Dien Bien</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><span style={{
                                                                        marginLeft: "20px",
                                                                        fontSize: '16px',
                                                                        fontWeight: '700'
                                                                    }}>Locality:</span></td>
                                                                    <td></td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </Modal>
                                                </Space>
                                            )}
                                        />
                                    </Table>
                                    <h4>Total</h4>
                                </>
                            ),
                        },
                        {
                            label: `Shipper Register`,
                            key: '2',
                            children: <>
                                <Table dataSource={data}>
                                    <Column title="ID" dataIndex="id" key="id" />
                                    <Column title="Full Name" dataIndex="fullname" key="fullname" />
                                    <Column title="Birthday" dataIndex="birthday" key="birthday" />
                                    <Column title="Citizen ID" dataIndex="citizenID" key="citizenID" />
                                    <Column title="Gender" dataIndex="gender" key="gender" />
                                    <Column title="Email" dataIndex="email" key="email" />
                                    <Column title="Phone Number" dataIndex="phoneNumber" key="phoneNumber" />
                                    <Column title="Address" dataIndex="address" key="address" />
                                    <Column title="Locality" dataIndex="locality" key="locality" />

                                    <Column
                                        title="Action"
                                        key="action"
                                        render={(_) => (
                                            <Space size="middle">
                                                <div>
                                                    <span className='btn btn-primary'><i className="fa-solid fa-eye" /></span>
                                                    <span className='btn btn-success' data-toggle="modal" data-target="#exampleModal1"><i className="fa-solid fa-check" /></span>
                                                    <span className='btn btn-danger' data-toggle="modal" data-target="#exampleModal2"><i className="fa-solid fa-x" /></span>
                                                </div>
                                            </Space>
                                        )}
                                    />
                                </Table>
                                <h4>Total: </h4>
                                <Receive />
                                <RejectShipper />
                            </>,
                        },
                        {
                            label: `Shipper locked`,
                            key: '3',
                            children: (
                                <>
                                    <Table dataSource={data}>
                                        <Column title="ID" dataIndex="id" key="id" />
                                        <Column title="Full Name" dataIndex="fullname" key="fullname" />
                                        <Column title="Birthday" dataIndex="birthday" key="birthday" />
                                        <Column title="Citizen ID" dataIndex="citizenID" key="citizenID" />
                                        <Column title="Gender" dataIndex="gender" key="gender" />
                                        <Column title="Email" dataIndex="email" key="email" />
                                        <Column title="Phone Number" dataIndex="phoneNumber" key="phoneNumber" />
                                        <Column title="Address" dataIndex="address" key="address" />
                                        <Column title="Locality" dataIndex="locality" key="locality" />
                                        <Column title="Reason Locked" dataIndex="reseonLocked" key="reseonLocked" />
                                        <Column
                                            title="Action"
                                            key="action"
                                            render={(_) => (
                                                <Space size="middle">
                                                    <div>
                                                        <span className='mr-4 btn btn-dark' data-toggle="modal" data-target="#exampleModal3"><i className="fa-solid fa-lock" />
                                                        </span>
                                                        <span className='btn btn-primary'><i className="fa-solid fa-eye" />
                                                        </span>
                                                    </div>
                                                </Space>
                                            )}
                                        />
                                    </Table>
                                    <h4>Total</h4>
                                    <LockShipper />
                                </>
                            ),
                        },
                    ]}
                />
            </div>
        </div>
    )
}
