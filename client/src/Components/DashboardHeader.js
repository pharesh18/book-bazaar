import React from 'react'

const DashboardHeader = () => {
    return (
        <div className="right--header">
            <div className="title">
                <h3>Dashboard</h3>
            </div>
            <div className="admin">
                <span>ADMIN</span>
                <img src="../images/login.png" alt="" />
            </div>
        </div>
    )
}

export default DashboardHeader