import React from 'react';
import TableListNewOrder from './TableListNewOrder';

export default function ListNewOrder() {
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
            <div className="border-bottom border-primary">
                <h2>List New Order</h2>
            </div>
            <div className='mt-3'>
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
                <TableListNewOrder />
                <h5>Total:</h5>
            </div>
            {/* Modal */}
            <div className="modal fade" id="bookModal" tabIndex={-1} aria-labelledby="bookModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 class="modal-title" id="bookModalLabel">Book</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Are you want to book this Order?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Yes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
