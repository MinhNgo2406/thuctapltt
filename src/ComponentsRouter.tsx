import React from 'react'
import './ComponentsRouter.css';
import Topbar from '../src/components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import DashBoard from './components/DashBoard/DashBoard';

export default function ComponentsRouter() {
    return (
        <div className="WrapperRouter">
            <Topbar />
            <div className="container">
                <Sidebar />
                <DashBoard />  
            </div>
        </div>
    )
}
