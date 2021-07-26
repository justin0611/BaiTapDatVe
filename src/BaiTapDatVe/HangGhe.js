import React, { Component } from 'react'
import { connect } from 'react-redux';
class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((item, index) => {


            let cssGheDaDat = '';
            let disabled = false;
            if (item.daDat) {
                cssGheDaDat = 'gheDuocChon'
                disabled = true;
            }

            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === item.soGhe)
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon';

            }


            return <button onClick={() => {
                this.props.datGhe(item)
            }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>{index + 1}</button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((item, index) => {
            return <div className='hangso' key={index}>{item.soGhe}</div>
        })
    }
    renderHangGhe = () => {
        if (this.props.index === 0) {
            return <div className='d-flex' >
                {this.renderSoHang()}
            </div>
        } else {
            return <div style={{}}  >
                {this.renderGhe()}
            </div>
        }
    }
    render() {
        return (
            <div className='text-left text-light row' style={{ fontSize: 30, marginLeft: 50 }}>
                <div className="col-1">{this.props.hangGhe.hang} </div>
                <div className="col-11">{this.renderHangGhe()}</div>


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
        datGhe: (ghe) => {
            let action = {
                type: 'DAT_GHE',
                load: ghe,
            }
            dispatch(action)
        },

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)
