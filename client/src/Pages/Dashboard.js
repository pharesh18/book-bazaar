import React from 'react'
import '../Components/Dashboard.css';
import DashboardHeader from '../Components/DashboardHeader';
import DashboardMainContainer from '../Components/DashboardMainContainer';
import DashboardSidebar from '../Components/DashboardSidebar';
import AdminHome from './AdminHome';

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <DashboardSidebar></DashboardSidebar>
                <div className="dashboard--right">
                    <DashboardHeader></DashboardHeader>
                    <DashboardMainContainer></DashboardMainContainer>
                </div>
            </div>
        </>
    )
}

export default Dashboard