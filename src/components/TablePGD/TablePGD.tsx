import React from 'react'
import { Table } from 'antd';
import './TablePGD.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

export default function Tablegsm() {

    const dataSource = [
        {
            key: '1',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000001</u></p>
                </Link>
            </>,
            address: '...',
            name: 'Cảm biến dịch chuyển &  gia tốc: Mất kết nối',
            scb: '121'

        },
        {
            key: '2',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000002</u></p>
                </Link>
            </>,

            address: '16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
            name: 'Cảm biến cửa trên máy ATM: Báo động',
            scb: '353'

        },
        {
            key: '3',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000003</u></p>
                </Link>
            </>,

            address: '1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            name: 'Cảm biến điều khiển tại chổ bằng Remote RF: Bật',
            scb: '3535'

        },
        {
            key: '4',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000004</u></p>
                </Link>
            </>,

            address: 'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
            name: 'Cảm biến nhiệt độ: Cao',
            scb: '235'

        },
        {
            key: '5',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000005</u></p>
                </Link>
            </>,

            address: 'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
            name: 'Cảm biến nhiệt độ: Thấp',
            scb: '864'

        },
        {
            key: '6',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000006</u></p>
                </Link>
            </>,

            address: 'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
            name: 'Cảm biến dịch chuyển: Biến động',
            scb: '3412'

        },
        {
            key: '7',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000007</u></p>
                </Link>
            </>,

            address: '16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
            name: 'Cảm biến rò điện: Báo động',
            scb: '564'

        },
        {
            key: '8',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000008</u></p>
                </Link>
            </>,

            address: 'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
            name: 'Cảm biến khói: Báo động',
            scb: '321'

        },
        {
            key: '9',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000009</u></p>
                </Link>
            </>,

            address: '16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
            name: 'Pin dự phòng: Không sạc pin',
            scb: '4754'

        },
        {
            key: '10',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000010</u></p>
                </Link>
            </>,

            address: 'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, QUận Cầu Giấy, TP Hà Nội',
            name: 'Điện áp nguồn: Bình thường',
            scb: '388'

        },
        {
            key: '11',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000011</u></p>
                </Link>
            </>,

            address: 'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, TP Hà Nội',
            name: 'Cảm biến rung: Báo động',
            scb: '2112'

        },
        {
            key: '12',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000012</u></p>
                </Link>
            </>,

            address: 'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            name: 'Cảm biến ngoài máy ATM: Báo động',
            scb: '434'

        },
        {
            key: '13',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000013</u></p>
                </Link>
            </>,

            address: 'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, TP Hà Nội',
            name: 'Cảm biến nhiệt: Thấp',
            scb: '0452'

        },
        {
            key: '14',
            id: <>
                <Link to="/id2" className="link">
                    <p className="id2"><u>0000014</u></p>
                </Link>
            </>,

            address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            name: 'Cảm biến rò điện: Báo động',
            scb: '242'

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
            width: 400
        },
        {
            title: 'Địa Chỉ',
            dataIndex: 'address',
            key: 'address',
            width: 3000
        },
        {
            title: 'Số cảnh báo',
            dataIndex: 'scb',
            key: 'scb',
            width: 450
        },


    ];

    return (
        <div className="Table2">
            <Table columns={columns} dataSource={dataSource} pagination={{showSizeChanger:false,defaultCurrent:2,total:10000,pageSize:100}} className="TableQLCBdata"/>
        </div>
    )
}
