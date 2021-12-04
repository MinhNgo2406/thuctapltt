import React from 'react'
import { Table } from 'antd';
import './TableAL.css';
import 'antd/dist/antd.css';

export default function Tablegsm() {

    const dataSource = [
        {
            key: '1',
            time: '10:06:2021 20:00:00',
            thaotac: 'Log in',
            loginname: 'Admin',
            note: ''
        },
        {
            key: '2',
            time: '10-06-2021 20:50:00',
            thaotac: 'Log out',
            loginname: 'Admin',
            note: ''
        },
        {
            key: '3',
            time: '10-06-2021 21:00:00',
            thaotac: 'Log in',
            loginname: 'Admin',
            note: ''
        },
        {
            key: '4',
            time: '10-06-2021 20:15:00',
            thaotac: 'Thêm thiết bị',
            loginname: 'Admin',
            note: 'Thêm thiết bị vào thành công!'
        },
        {
            key: '5',
            time: '10-06-2021 20:15:00',
            thaotac: 'Thêm điểm giám sát',
            loginname: 'Admin',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        },
        {
            key: '6',
            time: '10-06-2021 17:00:00',
            thaotac: 'Xóa thiết bị',
            loginname: 'Admin',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        },
        {
            key: '7',
            time: '10-06-2021 08:00:00',
            thaotac: 'Log in',
            loginname: 'Admin',
            note: ''
        },
        {
            key: '8',
            time: '10-06-2021 10:00:00',
            thaotac: 'Xóa thiết bị',
            loginname: 'Admin',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        },
        {
            key: '9',
            time: '10-06-2021 00:00:00',
            thaotac: 'Cập nhật điểm giám sát',
            loginname: 'Admin',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        },
        {
            key: '10',
            time: '10-06-2021 12:00:00',
            thaotac: 'Thêm điểm giám sát',
            loginname: 'Admin',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        },
        {
            key: '11',
            time: '10-06-2021 16:00:00',
            thaotac: 'Log out',
            loginname: 'Admin',
            note: ''
        },
        {
            key: '12',
            time: '10-06-2021 22:00:00',
            thaotac: 'Log in',
            loginname: 'Admin',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        },
        {
            key: '13',
            time: '10-06-2021 11:00:00',
            thaotac: 'Cập nhật điểm giám sát',
            loginname: 'Admin',
            note: ''
        },
        {
            key: '14',
            time: '10-06-2021 08:00:00',
            thaotac: 'Log out',
            loginname: 'Admin',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        },


    ];
    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            width: 14
        },
        {
            title: 'Ngày Giờ',
            dataIndex: 'time',
            key: 'time',
            width: 300
        },
        {
            title: 'Thao tác',
            dataIndex: 'thaotac',
            key: 'thaotac',
            width: 250

        },
        {
            title: 'Tên Đăng Nhập',
            dataIndex: 'loginname',
            key: 'loginname',
            width: 0

        },
        {
            title: 'Ghi Chú',
            dataIndex: 'note',
            key: 'note',

        }


    ];

    return (
        <div className="Table4">    
                <Table className="botron" columns={columns} dataSource={dataSource} pagination={{ showSizeChanger: false, defaultCurrent: 2, total: 10000, pageSize: 100 }} />
        </div>
    )
}
