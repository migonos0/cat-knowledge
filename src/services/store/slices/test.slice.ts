import {Action} from '../../../interfaces/action.interface';
import {CreateSlice} from '../../../types/createSlice.type';
import {Reducer} from '../../../types/reducer.type';
import {testType} from '../actions/types/test.type';
import {GlobalState} from '../useStore';

const initialState = {
    message: '',
};

type SliceState = typeof initialState;

type SliceAction = Action<testType, SliceState>;

const reducer: Reducer<SliceState, SliceAction> = (state, action) => {
    switch (action.type) {
        case 'TEST': {
            return {
                ...state,
                message: action.payload?.message ?? state.message,
            };
        }
        default:
            return state;
    }
};

export interface TestSlice {
    testState: SliceState;
    testDispatcher: (action: SliceAction) => void;
}

export const createTestSlice: CreateSlice<GlobalState, TestSlice> = (
    set,
    get
) => {
    return {
        testState: initialState,
        testDispatcher: (action) =>
            set({
                testState: reducer(get().testState, action),
            }),
    };
};
