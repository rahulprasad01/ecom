import React from 'react'
import Layout from '../../components/Layout'
import UserMenu from '../../components/UserMenu'

const Orders = () => {
  return (
    <Layout title={"My Orders"}>
        <div className="container-flui p-3 m-3">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu />
                </div>
                <div className="col-md-9">
                    <h1>All orders</h1>
                </div>
            </div>
        </div>
    </Layout>
  );
};

export default Orders;