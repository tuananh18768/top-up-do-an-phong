import React from 'react';
import { Layout, Space, Table } from 'antd';
const { Column } = Table;

export default function DeliveryHistory() {
    return (
        <div
            className="site-layout-background"
            style={{
                paddingTop: 20,
                minHeight: 360,
                flex:1
            }}
        >
            <div className='border-bottom border-primary'>
                <h2>Delivery History</h2>
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
            <div className='mt-3' style={{width:'95%'}}>
                <Table scroll={{x:1000}}>
                    <Column title="Order ID" />
                    <Column title="Full Name Customer" />
                    <Column title="Number Phone" />
                    <Column title="Locality" />
                    <Column title="Products" />
                    <Column title="Insurance" />
                    <Column title="Revenue" />
                    <Column title="Cost to shipper" />
                    <Column title="Total Value" />
                    <Column title="Agent" />
                    <Column title="Date created" />
                    <Column title="Status" />
                    <Column title="Date Complete" />
                    <Column
                        title="Action"
                        key="action"
                        render={(_) => (
                            <Space size="middle">
                                <div>
                                    <span className='btn btn-primary'><i className="fa-solid fa-eye" />
                                    </span>
                                </div>
                            </Space>
                        )}
                    />
                </Table>
                <h4>Total</h4>
            </div>
        </div>
    )
}
