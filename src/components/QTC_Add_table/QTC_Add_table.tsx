import React from 'react'
import './QTC_Add_table.css';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { Table } from 'antd';

export default function QTC_Add_table() {
    const dataSource = [
        {
            key: '1',
            nhomchucnang: 'Dashboard',
            chucnang: '',
            xem: <>
                <Checkbox defaultChecked={false} />
            </>,
            themsuaxoa: <>
                <Checkbox defaultChecked={false} />
            </>
        },
        {
            key: '2',
            nhomchucnang: 'Cảnh báo',
            chucnang: '',
            xem: <>
                <Checkbox defaultChecked={false} />
            </>,
            themsuaxoa: <>
                <Checkbox defaultChecked={false} />
            </>
        },
        {
            key: '3',
            nhomchucnang: 'Báo cáo',
            chucnang: '',
            xem: <>
                <Checkbox defaultChecked={false} />
            </>,
            themsuaxoa: <>
                <Checkbox defaultChecked={false} />
            </>
        },
        {
            key: '4',
            nhomchucnang: 'Cài đặt hệ thống',
            chucnang: '',
            xem: "",
            themsuaxoa: ""
        },
        {
            key: '5',
            nhomchucnang: '',
            chucnang: 'Thiết bị giám sát',
            xem: <>
                <Checkbox defaultChecked={false} />
            </>,
            themsuaxoa: <>
                <Checkbox defaultChecked={false} />
            </>
        },
        {
            key: '6',
            nhomchucnang: '',
            chucnang: 'người dùng hệ thống',
            xem: <>
                <Checkbox defaultChecked={false} />
            </>,
            themsuaxoa: <>
                <Checkbox defaultChecked={false} />
            </>
        },
        {
            key: '7',
            nhomchucnang: '',
            chucnang: 'Audit log',
            xem: <>
                <Checkbox defaultChecked={false} />
            </>,
            themsuaxoa: <>
                <Checkbox defaultChecked={false} />
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
            title: 'Nhóm chức năng',
            dataIndex: 'nhomchucnang',
            key: 'nhomchucnang',
            width: 200
        },
        {
            title: 'Chức năng',
            dataIndex: 'chucnang',
            key: 'chucnang',
            width: 150
        },
        {
            title: 'xem',
            dataIndex: 'xem',
            key: 'xem',

        },
        {
            title: 'Thêm/Xóa/Sửa',
            dataIndex: 'themsuaxoa',
            key: 'themsuaxoa',

        }

    ];

    return (
        <div className="QTC_Add0">
            <div className="QTC_Add2">
                <div className="tenquyentruycap">
                    <div className="TQTC">
                        <br />
                        <label className="TQTCtext">Tên quyền truy cập: </label><br />
                        <input type="text" className="TQTCbox" name="DQL" placeholder="Nhập quyền truy cập" /><br />
                        <br />
                        <label className="ngoisao1">*</label>
                        <div className="trangthai">
                            <label className="trangthaitext">Trạng Thái: </label><br />
                            <>
                                <div className="checkbox1">
                                    <Checkbox defaultChecked={false} />

                                </div>
                                <div className="dkh2">
                                    Chưa kích hoạt
                                </div>
                            </>
                        </div>
                        <label className="ngoisao2">*</label>
                        <label className="ttngoisao">là những thông tin bắt buộc</label>
                    </div>

                </div>
                <div className="Table9">
                    <Table dataSource={dataSource} columns={columns} pagination={false} />
                </div>
            </div>
            <Link to="/QTC" className="btnluu1">
                <button type="button" className="btnluu">
                    <p className="btntennutluu">Lưu</p>
                </button>
            </Link>
            <Link to="/QTC" className="btnhuy1">
                <button type="button" className="btnhuy">
                    <p className="btntennuthuy">Hủy</p>
                </button>
            </Link>
        </div>

    )
}
