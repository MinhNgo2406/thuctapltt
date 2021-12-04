import React from 'react'
import { Table } from 'antd';
import './Tablegsm.css';
import 'antd/dist/antd.css';
import V1 from '../../assets/GSM modern on Map/Vector.png';
import V2 from '../../assets/GSM modern on Map/Vector2.png';
import V3 from '../../assets/GSM modern on Map/Warrning.png';
import V4 from '../../assets/GSM modern on Map/Vector4.png';
import V5 from '../../assets/GSM modern on Map/Vector5.png';
import V6 from '../../assets/GSM modern on Map/Warrningg.png';
import V7 from '../../assets/GSM modern on Map/Line 7.png'
import V8 from '../../assets/GSM modern on Map/Solid.png'
import V9 from '../../assets/GSM modern on Map/Infor.png'
import { Link } from 'react-router-dom';
export default function Tablegsm() {

    const dataSource = [
        {
            key: '1',
            sn: '0000001',
            type: 'ATM',
            name: 'ATM - Giang Văn Minh',
            address: '16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V2} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <Link to="/trangthai1" className="link">
                    <div className="v8">
                        <img src={V9} alt="" />
                    </div>
                </Link>
                <Link to="/trangthai2" className="link">
                    <div className="v9">
                        <img src={V8} alt="" />
                    </div>
                </Link>

            </>

        },
        {
            key: '2',
            sn: '0000002',
            type: 'ATM',
            name: 'ATM - Giang Văn Minh',
            address: '16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
            icon: <>
                <div className="v1">
                    <img src={V4} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <div className="v8">
                    <img src={V9} alt="" />
                </div>
                <div className="v9">
                    <img src={V8} alt="" />
                </div>
            </>
        },
        {
            key: '3',
            sn: '0000003',
            type: 'ATM',
            name: 'ATM - Nguyễn Ái Quốc',
            address: '1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V2} alt="" />
                </div>
                <div className="v3">
                    <img src={V6} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <div className="v8">
                    <img src={V9} alt="" />
                </div>
                <div className="v9">
                    <img src={V8} alt="" />
                </div>
            </>
        },
        {
            key: '4',
            sn: '0000009',
            type: 'Phòng giao dịch',
            name: 'Phòng giao dịch - Cờ Đỏ',
            address: 'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <div className="v8">
                    <img src={V9} alt="" />
                </div>
                <div className="v9">
                    <img src={V8} alt="" />
                </div>
            </>
        },
        {
            key: '5',
            sn: '0000005',
            type: 'ATM',
            name: 'ATM - Nguyễn Ái Quốc',
            address: 'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, Hà Nội',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <div className="v8">
                    <img src={V9} alt="" />
                </div>
                <div className="v9">
                    <img src={V8} alt="" />
                </div>
            </>
        },
        {
            key: '6',
            sn: '0000021',
            type: 'Phòng giao dịch',
            name: 'Phòng giao dịch',
            address: '1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            icon: <>
                <div className="v1">
                    <img src={V4} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V6} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <div className="v8">
                    <img src={V9} alt="" />
                </div>
                <div className="v9">
                    <img src={V8} alt="" />
                </div>
            </>
        },
        {
            key: '7',
            sn: '0000011',
            type: 'ATM',
            name: 'ATM - Nguyễn Ái Quốc',
            address: '1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <div className="v8">
                    <img src={V9} alt="" />
                </div>
                <div className="v9">
                    <img src={V8} alt="" />
                </div>
            </>
        },
        {
            key: '8',
            sn: '0000064',
            type: 'Phòng giao dịch',
            name: 'Phòng giao dịch',
            address: 'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <div className="v8">
                    <img src={V9} alt="" />
                </div>
                <div className="v9">
                    <img src={V8} alt="" />
                </div>
            </>
        },
        {
            key: '9',
            sn: '0000010',
            type: 'Phòng giao dịch',
            name: 'Phòng giao dịch Trung Yên',
            address: 'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, Hà Nội',
            icon: <>
                <div className="v1">
                    <img src={V4} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <div className="v8">
                    <img src={V9} alt="" />
                </div>
                <div className="v9">
                    <img src={V8} alt="" />
                </div>
            </>
        },
        {
            key: '10',
            sn: '0000035',
            type: 'ATM',
            name: 'ATM - Nguyễn Thanh Đằng',
            address: 'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
            icon: <>
                <div className="v1">
                    <img src={V1} alt="" />
                </div>
                <div className="v2">
                    <img src={V5} alt="" />
                </div>
                <div className="v3">
                    <img src={V3} alt="" />
                </div>
                <div className="v4">
                    <img src={V7} alt="" />
                </div>
            </>,
            icon2: <>
                <div className="v8">
                    <img src={V9} alt="" />
                </div>
                <div className="v9">
                    <img src={V8} alt="" />
                </div>
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
            title: 'Mã thiết bị/Series number',
            dataIndex: 'sn',
            key: 'sn',
            width: 144.6
        },
        {
            title: 'Loại điểm giám sát',
            dataIndex: 'type',
            key: 'type',
            width: 170
        },
        {
            title: 'Tên điểm giám sát',
            dataIndex: 'name',
            key: 'name',
            width: 180
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            width: 750
        },
        {
            title: 'Trạng Thái',
            dataIndex: 'icon',
            key: 'icon',
            width: 100
        },
        {
            title: '',
            dataIndex: 'icon2',
            key: 'icon2',
        },
    ];

    return (
        <div className="Table">
            <div className="kkhungtron">
                <Table className="khungtron" dataSource={dataSource} columns={columns} pagination={false} />
            </div>
        </div>
    )
}
