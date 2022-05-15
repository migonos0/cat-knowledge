import {GlobalState} from '../useStore';

export const testAction =
    (dispatcher: GlobalState['testDispatcher']) =>
    (message: GlobalState['testState']['message']) => {
        try {
            dispatcher({
                type: 'TEST',
                payload: {
                    message: message,
                },
            });
        } catch (error) {
            console.log('Oh no');
        }
    };
