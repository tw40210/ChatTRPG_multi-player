import {WAIT_PLOT, RESET_PLOT, SEND_COMMAND, FETCH_PLOT} from '../constances/actionTypes'

const PlotText = (plot = {PlotText:[], idx:1, isWait:false}, action) => {
    switch (action.type) {
        case RESET_PLOT:
            return {PlotText:[], idx:1, isWait:false};
        case FETCH_PLOT:
            return {...plot, PlotText:action.payload, idx:plot.idx+1, isWait:false};
        case SEND_COMMAND:
            return {...plot, isWait:true};
        case WAIT_PLOT:
            return {...plot, isWait:true};
        default:
            return plot;
    }

}

export default PlotText;