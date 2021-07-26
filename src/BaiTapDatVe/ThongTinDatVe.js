import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatVe extends Component {
    render() {
        return (
            <div className="">
                <div className='mt-5'>
                    <button className='gheDuocChon'></button> <span style={{ fontSize: '20px' }} className='text-light ml-2'> Ghế Đã Đặt</span>
                    <br />
                    <button className='gheDangChon'></button> <span style={{ fontSize: '20px' }} className='text-light ml-2'> Ghế Đang Đặt</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: 0 }}></button> <span style={{ fontSize: '20px' }} className='text-light ml-2'> Ghế Chưa Chọn</span>
                </div>

                <div className='mt-5' >
                    <table className="table" border="2">
                        <thead>
                            <tr className='text-light' style={{ fontSize: 35 }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                            {this.props.danhSachGheDangDat.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.soGhe}</td>
                                    <td>{item.gia}</td>
                                    <td><button onClick={() => {
                                        { this.props.huyGhe(item.soGhe) }
                                    }}>Huy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr>

                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongtien, item, index) => {
                                    return tongtien += item.gia;
                                }, 0)}

                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.DatVeReducer.arrGheDangDat,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        huyGhe: (soghe) => {
            let action = {
                type: 'HUY_GHE',
                load: soghe,
            }
            dispatch(action)
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatVe)
