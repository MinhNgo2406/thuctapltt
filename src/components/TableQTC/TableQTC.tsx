import React, { useState } from 'react'
import { Table } from 'antd';
import './TableQTC.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';



export default function Tablegsm() {
    const dataSource = [
        {
            key: '1',
            qtc: 'Quản Trị Viên',
            trangthai: <>
                <Switch defaultChecked />
                <div className="switch">
                    Kích hoạt
                </div>
            </>,
            capnhat: <>
                <Link to="/capnhat" className="link">
                    <p className="capnhat1"><u>Cập Nhật</u></p>
                </Link>
            </>,
            xoa: <>
                <Link to="/xoa" className="link">
                    <p className="xoa"><u>Xóa</u></p>
                </Link>

            </>
        },
        {
            key: '2',
            qtc: 'Phòng giao dịch',
            trangthai: <>
                <Switch defaultChecked />
                <div className="switch">
                    Kích hoạt
                </div>
            </>,
            capnhat: <>
                <Link to="/capnhat" className="link">
                    <p className="capnhat1"><u>Cập Nhật</u></p>
                </Link>
            </>,
            xoa: <>
                <Link to="/xoa" className="link">
                    <p className="xoa"><u>Xóa</u></p>
                </Link>
            </>


        },
        {
            key: '3',
            qtc: 'Adminitrator',
            trangthai: <>
                <Switch />
                <div className="switch">
                    Không kích hoạt
                </div>
            </>,
            capnhat: <>
                <Link to="/capnhat" className="link">
                    <p className="capnhat1"><u>Cập Nhật</u></p>
                </Link>
            </>,
            xoa: <>
                <Link to="/xoa" className="link">
                    <p className="xoa"><u>Xóa</u></p>
                </Link>
            </>


        },
        {
            key: '4',
            qtc: 'Nhân Viên',
            trangthai: <>
                <Switch defaultChecked />
                <div className="switch">
                    Kích hoạt
                </div>
            </>,
            capnhat: <>
                <Link to="/capnhat" className="link">
                    <p className="capnhat1"><u>Cập Nhật</u></p>
                </Link>
            </>,
            xoa: <>
                <Link to="/xoa" className="link">
                    <p className="xoa"><u>Xóa</u></p>
                </Link>
            </>


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
            title: 'Quyền truy cập',
            dataIndex: 'qtc',
            key: 'qtc',
            width: 700
        },
        {
            title: 'Trạng thái',
            dataIndex: 'trangthai',
            key: 'trangthai',
            width: 400
        },
        {
            title: '',
            dataIndex: 'capnhat',
            key: 'capnhat',
            width: 90
        },
        {
            title: '',
            dataIndex: 'xoa',
            key: 'xoa',
            width: 90
        },


    ];

    return (
        <div className="Table7">
            <Table className="frames5" dataSource={dataSource} columns={columns} pagination={false} />
        </div>
    )
}
