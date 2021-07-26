import React, { Component } from 'react'
import './style.css'
import ThongTinDatVe from './ThongTinDatVe'
import danhSachGhe from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapDatVe extends Component {
    renderHangGhe = () => {
        return danhSachGhe.map((item, index) => {
            return <div key={index}>
                <HangGhe hangGhe={item} index={index} />
            </div>
        })
    }
    render() {
        return (
            <div className='bookingMovie' style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: 'cover' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 text-center text-light">
                            <h1 className=' display-4 mb-3'>BÀI TẬP ĐẶT VÉ FE66</h1>
                            <div style={{ fontSize: '20px' }}>Màn hình</div>
                            <div className='d-flex justify-content-center mt-2'>
                                <div className="screen"></div>

                            </div>
                            <div className="mt-1">
                                {this.renderHangGhe()}
                            </div>

                        </div>
                        <div className="col-4 text-light">
                            <h1 className=' display-5 mb-3'>DANH SÁCH GHẾ BẠN CHỌN</h1>
                            <ThongTinDatVe />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
