import React from 'react'
import { Table } from 'antd';
import './TableQLCB.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

export default function Tablegsm() {

    const dataSource = [
        {
            key: '1',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000001</u></p>
                </Link>
            </>,
            loai: 'ATM',
            address: '...',
            name: 'Cảm biến dịch chuyển &  gia tốc: Mất kết nối',
            time: '10-06-2021 20:00:00'

        },
        {
            key: '2',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000002</u></p>
                </Link>
            </>,
            loai: 'ATM',
            address: '16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
            name: 'Cảm biến cửa trên máy ATM: Báo động',
            time: '10-06-2021 20:20:00'

        },
        {
            key: '3',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000003</u></p>
                </Link>
            </>,
            loai: 'ATM',
            address: '1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            name: 'Cảm biến điều khiển tại chổ bằng Remote RF: Bật',
            time: '10-06-2021 20:03:00'

        },
        {
            key: '4',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000004</u></p>
                </Link>
            </>,
            loai: 'ATM',
            address: 'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
            name: 'Cảm biến nhiệt độ: Cao',
            time: '10-06-2021 20:20:00'

        },
        {
            key: '5',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000005</u></p>
                </Link>
            </>,
            loai: 'ATM',
            address: 'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
            name: 'Cảm biến nhiệt độ: Thấp',
            time: '10-06-2021 20:21:00'

        },
        {
            key: '6',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000006</u></p>
                </Link>
            </>,
            loai: 'Phòng giao dịch',
            address: 'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
            name: 'Cảm biến dịch chuyển: Biến động',
            time: '10-06-2021 20:12:00'

        },
        {
            key: '7',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000007</u></p>
                </Link>
            </>,
            loai: 'Phòng giao dịch',
            address: '16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
            name: 'Cảm biến rò điện: Báo động',
            time: '10-06-2021 20:54:00'

        },
        {
            key: '8',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000008</u></p>
                </Link>
            </>,
            loai: 'ATM',
            address: 'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
            name: 'Cảm biến khói: Báo động',
            time: '10-06-2021 20:22:00'

        },
        {
            key: '9',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000009</u></p>
                </Link>
            </>,
            loai: 'ATM',
            address: '16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
            name: 'Pin dự phòng: Không sạc pin',
            time: '10-06-2021 20:44:00'

        },
        {
            key: '10',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000010</u></p>
                </Link>
            </>,
            loai: 'Phòng giao dịch',
            address: 'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, QUận Cầu Giấy, TP Hà Nội',
            name: 'Điện áp nguồn: Bình thường',
            time: '10-06-2021 20:54:00'

        },
        {
            key: '11',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000011</u></p>
                </Link>
            </>,
            loai: 'ATM',
            address: 'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, TP Hà Nội',
            name: 'Cảm biến rung: Báo động',
            time: '10-06-2021 20:12:00'

        },
        {
            key: '12',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000012</u></p>
                </Link>
            </>,
            loai: 'Phòng giao dịch',
            address: 'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            name: 'Cảm biến ngoài máy ATM: Báo động',
            time: '10-06-2021 20:12:00'

        },
        {
            key: '13',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000013</u></p>
                </Link>
            </>,
            loai: 'Phòng giao dịch',
            address: 'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, TP Hà Nội',
            name: 'Cảm biến nhiệt: Thấp',
            time: '10-06-2021 20:12:00'

        },
        {
            key: '14',
            id: <>
                <Link to="/id" className="link">
                    <p className="id"><u>0000014</u></p>
                </Link>
            </>,
            loai: 'Phòng giao dịch',
            address: 'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            name: 'Cảm biến rò điện: Báo động',
            time: '10-06-2021 20:00:00'

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
            title: 'GSM ID',
            dataIndex: 'id',
            key: 'id',
            width: 144.6
        },
        {
            title: 'Loại GSM',
            dataIndex: 'loai',
            key: 'loai',
            width: 170
        },
        {
            title: 'Địa Chỉ',
            dataIndex: 'address',
            key: 'address',
            width: 450
        },
        {
            title: 'Nội dung cảnh báo',
            dataIndex: 'name',
            key: 'name',
            width: 500
        },
        {
            title: 'ngày giờ',
            dataIndex: 'time',
            key: 'time',
            width: 190
        },

    ];

    return (
        <div className="TableQLCB">
            <Table columns={columns} dataSource={dataSource} pagination={{ showSizeChanger: false, defaultCurrent: 2, total: 10000, pageSize: 100 }} className="TableQLCBdata" />
        </div>
    )
}
