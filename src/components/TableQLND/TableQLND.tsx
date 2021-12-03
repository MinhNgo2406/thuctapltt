import React from 'react'
import { Table } from 'antd';
import './TableQLND.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

export default function Tablegsm() {

    const dataSource = [
        {
            key: '1',
            tdn: 'ND1120',
            hovaten: 'Tạ Duy Nguyên',
            sdt: '030 252 0311',
            email: 'dnnsns@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Tiền Giang</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            tdn: 'ND2212',
            hovaten: 'Lê Quang liêm',
            sdt: '090 024 0256',
            email: 'lequangliem@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Hà Nội</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            tdn: 'ND3920',
            hovaten: 'Phương Mỹ Lệ',
            sdt: '097 754 0254',
            email: 'Pml@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Đồng Nai</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            tdn: 'ND2929',
            hovaten: 'Lê Thành Huy',
            sdt: '079 656 4541',
            email: 'Lth@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Vũng Tàu</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            key: '5',
            tdn: 'ND1201',
            hovaten: 'Nguyễn Thành An',
            sdt: '097 754 0254',
            email: 'nta@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Vũng Tàu</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            key: '6',
            tdn: 'ND1202',
            hovaten: 'Đinh Hoài An',
            sdt: '030 054 0544',
            email: 'Dha@gmail.com.vn',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Tiền Giang</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            key: '6',
            tdn: 'ND1202',
            hovaten: 'Đinh Hoài An',
            sdt: '030 054 0544',
            email: 'Dha@gmail.com.vn',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Tiền Giang</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            key: '7',
            tdn: 'ND9322',
            hovaten: 'Văn Lệ Thu',
            sdt: '093 025 0232',
            email: 'vlt@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Hà Nội</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            key: '8',
            tdn: 'ND3923',
            hovaten: 'Vũ Minh Khôi',
            sdt: '030 054 0544',
            email: 'vmkk@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Hà Nội</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            key: '9',
            tdn: 'ND2302',
            hovaten: 'Trần Gia Lập',
            sdt: '030 054 0544',
            email: 'tgl2020@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Hà Nội</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            key: '9',
            tdn: 'ND2302',
            hovaten: 'Trần Gia Lập',
            sdt: '030 054 0544',
            email: 'tgl2020@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Hà Nội</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            key: '10',
            tdn: 'ND3943',
            hovaten: 'Đinh Hoài An',
            sdt: '030 054 0544',
            email: 'monglung@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Hà Nội</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            key: '11',
            tdn: 'ND5632',
            hovaten: 'Đinh Hoài An',
            sdt: '030 054 0544',
            email: 'gahs@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - TP.HCM</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            key: '12',
            tdn: 'ND7458',
            hovaten: 'Nguyễn Công Minh',
            sdt: '097 754 0254',
            email: 'ncmm@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Cần Thơ</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            key: '13',
            tdn: 'ND9438',
            hovaten: 'Bùi Tấn Toàn',
            sdt: '030 054 0544',
            email: 'Btt2020@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Hà Nội</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            key: '14',
            tdn: 'ND7432',
            hovaten: 'Mai Văn Sĩ',
            sdt: '030 054 0544',
            email: 'maisi@gmail.com',
            dvql: <>
                <Link to="/dvql" className="link">
                    <p className="dvql"><u>ATM - Cần Thơ</u></p>
                </Link>
            </>,
            capnhat: <>
                <Link to="/QLNDU" className="link">
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
            title: 'Tên đăng nhập',
            dataIndex: 'tdn',
            key: 'tdn',
            width: 150
        },
        {
            title: 'Họ và Tên',
            dataIndex: 'hovaten',
            key: 'hovaten',
            width: 150
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'sdt',
            key: 'sdt',
            width: 90
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 90
        },
        {
            title: 'Đơn vị quản lý',
            dataIndex: 'dvql',
            key: 'dvql',
            width: 200
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
        <div className="Table10">
            <Table columns={columns} dataSource={dataSource} pagination={{showSizeChanger:false,defaultCurrent:2,total:10000,pageSize:100}} className="TableQLCBdata"/>
        </div>
    )
}
