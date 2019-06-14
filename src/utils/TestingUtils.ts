import { ShallowWrapper, ReactWrapper } from 'enzyme';

/**
 * Gets Test ID for component for testing purposes.
 * According to React Native documentation, setting testID can make performance worse,
 * so we can set these ids only in development environment.
 * https://facebook.github.io/react-native/docs/view#testid
 * @param {string} testId  Test id that should be set.
 * @returns {string | undefined}    If is PROD envirenment these id will be undefined.
 */
export const setTestID = (testId: string): string | undefined => {
    if (__DEV__) {
        return testId;
    }

    return undefined;
};

/**
 * Get ReactWrapper or ShallowWrapper that contains found nodes.
 * @param {ShallowWrapper<any, any, any> | ReactWrapper<any, any, any>}  wrapper     Wrapper got by shallow or mount method.
 * @param {string}                                                       testId   Test Id which contains wrapper that we want to find.
 * @returns {ShallowWrapper<any, any, any> | ReactWrapper<any, any, any>} Returns ShallowWrapper (for shallow method) or ReactWrapper (for mount method).
 */
export const findByTestID = (
    wrapper: ShallowWrapper<any, any, any> | ReactWrapper<any, any, any>,
    testId: string
    ): ShallowWrapper<any, any, any> | ReactWrapper<any, any, any> => {
        return wrapper.findWhere((node: ShallowWrapper<any, any, any> | ReactWrapper<any, any, any>) => node.prop('testID') === testId);
};