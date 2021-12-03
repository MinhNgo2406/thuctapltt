import React from 'react'
import { Table } from 'antd';
import './TableATM.css';
import 'antd/dist/antd.css';

export default function Tablegsm() {

    const dataSource = [
        {
            key: '1',
            name: 'Cảm biến dịch chuyển &  gia tốc: Mất kết nối',
            nql: 'Trần Gia Lập',
            time: '10:06:2021 20:00:00',
            trangthai: <>
                <label className="red">Chưa Xử Lý</label><br />
            </>


        },
        {
            key: '2',
            name: 'Cảm biến cửa dưới: Mát kết nối',
            nql: 'Lê Quang liêm',
            time: '15-06-2021 21:15:35',
            trangthai: <>
                <label className="red">Chưa Xử Lý</label><br />
            </>


        },
        {
            key: '3',
            name: 'Cảm biến cửa dưới: Mát kết nối',
            nql: 'Phương Mỹ Lệ',
            time: '11-06-2021 23:01:50',
            trangthai: <>
                <label className="green">Đã Xử Lý</label><br />
            </>


        },
        {
            key: '4',
            name: 'Bật cảnh báo: Bật cảnh báo thiết bị bằng remote',
            nql: 'Lê Thành Huy',
            time: '08-06-2021 20:14:50',
            trangthai: <>
                <label className="green">Đã Xử Lý</label><br />
            </>


        },
        {
            key: '5',
            name: 'Cảm biến dịch chuyển & gia tốc: Mất kết nối',
            nql: 'Nguyễn Thành An',
            time: '01-06-2021 22:08:10',
            trangthai: <>
                <label className="red">Chưa Xử Lý</label><br />
            </>


        },
        {
            key: '6',
            name: 'Cảm biến cửa dưới: Mát kết nối',
            nql: 'Đinh Hoài An',
            time: '15-06-2021 22:13:00',
            trangthai: <>
                <label className="green">Đã Xử Lý</label><br />
            </>


        },
        {
            key: '7',
            name: 'Cảm biến dịch chuyển & gia tốc: Mất kết nối',
            nql: 'Văn Lệ Thu',
            time: '18-06-2021 14:12:24',
            trangthai: <>
                <label className="red">Chưa Xử Lý</label><br />
            </>


        },
        {
            key: '8',
            name: 'Cảm biến cửa dưới: Mát kết nối',
            nql: 'Vũ Minh Khôi',
            time: '08-06-2021 00:36:11',
            trangthai: <>
                <label className="red">Chưa Xử Lý</label><br />
            </>


        },
        {
            key: '9',
            name: 'Cảm biến dịch chuyển & gia tốc: Mất kết nối',
            nql: 'Trần Gia Lập',
            time: '19-06-2021 23:00:00',
            trangthai: <>
                <label className="red">Chưa Xử Lý</label><br />
            </>


        },
        {
            key: '10',
            name: 'Cảm biến cửa dưới: Mát kết nối',
            nql: 'Đinh Hoài An',
            time: '12-06-2021 12:15:57',
            trangthai: <>
                <label className="green">Đã Xử Lý</label><br />
            </>


        },
        {
            key: '11',
            name: 'Cảm biến dịch chuyển & gia tốc: Mất kết nối',
            nql: 'Đinh Hoài An',
            time: '18-06-2021 19:05:00',
            trangthai: <>
                <label className="red">Chưa Xử Lý</label><br />
            </>


        },
        {
            key: '12',
            name: 'Cảm biến cửa dưới: Mát kết nối',
            nql: 'Nguyễn Công Minh',
            time: '07-06-2021 20:34:12',
            trangthai: <>
                <label className="red">Chưa Xử Lý</label><br />
            </>


        },
        {
            key: '13',
            name: 'Cảm biến dịch chuyển & gia tốc: Mất kết nối',
            nql: 'Bùi Tấn Toàn',
            time: '11-06-2021 22:00:56',
            trangthai: <>
                <label className="red">Chưa Xử Lý</label><br />
            </>


        },
        {
            key: '14',
            name: 'Cảm biến cửa dưới: Mát kết nối',
            nql: 'Mai Văn Sĩ',
            time: '14-06-2021 21:12:00',
            trangthai: <>
                <label className="red">Chưa Xử Lý</label><br />
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
            title: 'Nội dung cảnh báo',
            dataIndex: 'name',
            key: 'name',
            width: 500
        },
        {
            title: 'Người quản lý',
            dataIndex: 'nql',
            key: 'nql',
            width: 300

        },
        {
            title: 'Thời gian',
            dataIndex: 'time',
            key: 'time',
            width: 300

        },
        {
            title: 'Trạng thái',
            dataIndex: 'trangthai',
            key: 'trangthai',

        }


    ];

    return (
        <div className="Table3">
            <Table columns={columns} dataSource={dataSource} pagination={{showSizeChanger:false,defaultCurrent:2,total:10000,pageSize:100}} className="TableQLCBdata"/>

        </div>
    )
}
