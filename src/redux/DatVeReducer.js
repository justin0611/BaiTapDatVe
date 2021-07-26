const stateDefault = {
    arrGheDangDat: [

    ]
}

const DatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let arrGheDangDatUpdate = [...state.arrGheDangDat]
            let index = arrGheDangDatUpdate.findIndex(ghe => ghe.soGhe === action.load.soGhe);
            if (index !== -1) {
                arrGheDangDatUpdate.splice(index, 1);
            } else {
                arrGheDangDatUpdate.push(action.load)
            }

            state.arrGheDangDat = arrGheDangDatUpdate;
            return { ...state }
        }
        case 'HUY_GHE': {
            let arrGheDangDatUpdate = [...state.arrGheDangDat]
            let index = arrGheDangDatUpdate.findIndex(ghe => ghe.soGhe === action.load);
            if (index !== -1) {
                arrGheDangDatUpdate.splice(index, 1);
            }

            state.arrGheDangDat = arrGheDangDatUpdate;
            return { ...state }
        }
        default: return { ...state }
    }
}

export default DatVeReducer;

