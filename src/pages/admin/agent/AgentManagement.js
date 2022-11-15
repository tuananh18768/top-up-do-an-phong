import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    BarsOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import TableAgentLocked from './TableAgentLocked';
import TableAgentManagement from './TableAgentManagement';
const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const items1 = [
    {
        key: "one",
        icon: <UserOutlined />
    },
    {
        key: 'menu',
        icon: <BarsOutlined />
    }
];

export default function AgentManagement() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div
            className="site-layout-background"
            style={{
                minHeight: 360,
                paddingTop:'20px',
                flex: 1
            }}
        >
            <h2>Agent Management</h2>
            <div className='border-bottom border-primary'>
            </div>
            <div className='mt-3'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa-solid fa-plus"></i> Agent</button>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Agent</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">User Name</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Ful Name</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Phone Number</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>

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
                <div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="all-tab" data-toggle="tab" data-target="#all" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="agentlocked-tab" data-toggle="tab" data-target="#agentlocked" type="button" role="tab" aria-controls="profile" aria-selected="false">Agent Locked</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active p-3" id="all" role="tabpanel" aria-labelledby="all-tab">
                            <div>
                            <TableAgentManagement />
                            <h5>Total:</h5>
                            </div>
                        </div>
                        <div className="tab-pane fade p-3" id="agentlocked" role="tabpanel" aria-labelledby="agentlocked-tab">
                            <TableAgentLocked />
                            <h5>Total:</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
