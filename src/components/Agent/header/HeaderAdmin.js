import React from 'react'
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

export default function HeaderAdmin() {
    return (
        <Header
            className="site-layout-background"
            style={{
                padding: 0,
                height: '68px'
            }}
        >
            <Menu style={{ height: '68px' }} theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} className='justify-content-end' />
        </Header>
    )
}
