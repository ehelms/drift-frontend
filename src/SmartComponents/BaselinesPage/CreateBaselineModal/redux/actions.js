import types from './types';
import api from '../../../../api';

function createBaseline(newBaseline, uuid = undefined) {
    return {
        type: types.CREATE_BASELINE,
        payload: api.postNewBaseline(newBaseline, uuid)
    };
}

export default {
    createBaseline
};
