import {_publicConfig} from './_public';

/**
 * Check if args is undefined
 * @param {Object} val
 */
export const isUndefined = function (val) {
    return val === void 0;
};


/**
 * Check if args is a Document element
 * @param {Object} elem
 * @returns {Boolean}
 */
export const isDocument = function (elem) {

    return !isUndefined(elem) &&
        elem instanceof Document &&
        elem.nodeType === 9
};

/**
 * Check if args is a HTML Node
 * @param {Object} elem
 * @returns {Boolean}
 */
export const isNode = function (elem) {
    return !isUndefined(elem) &&
        elem instanceof HTMLElement &&
        elem.nodeType === 1
};

/**
 *  Check if args is a list of HTML Node
 * @param {Array} eList
 */
export const isNodeList = function (eList = {}) {
    let type = Object.prototype.toString.call(eList)

    return !isUndefined(eList) &&
        (type === '[object HTMLCollection]' || type === '[object HTMLCollection]') &&
        length in eList &&
        (eList.length === 0 || exports.isNode(eList[0]))
};

/**
 *  Check if args is a string
 * @param {Object} val
 */
export const isString = function (val = '') {
    return typeof val === 'string' ||
        val instanceof String
};

/**
 * Check if args is a function
 * @param {Object} val
 */
export const isFn = function (val) {
    return !isUndefined(val) &&
        typeof val === 'function' &&
        Object.prototype.toString.call(val) === '[object Function]'
};


/**
 * Check if args is an array
 * @param {Object} val
 */
export const isArray = function (val) {
    return !isUndefined(val) &&
        Array.isArray(val) &&
        Object.prototype.toString.call(val) === '[object Array]'
};

/**
 * Check if args is null
 * @param {Object} val
 */
export const isNull = function (val) {
    return val === null;
};

/**
 * Check if args is null
 * @param {Object} val
 */
export const isNaN = function (val) {
    return !isUndefined(val)
        && Number.isNaN(val)
        && val !== val;
};


/**
 * Check if args is Number
 * @param {Object} val
 */
export const isNumber = function (val) {
    return !isUndefined(val) && ((typeof val === 'number') || (typeof val === 'string' && parseInt(val) == val));
};


/**
 * Check if args is not exist
 * @param {Object} val
 */
export const isNotExist = function (val) {
    return isUndefined(val) || isNull(val) || isNaN(val);
};

/**
 * Check if args is  exist
 * @param {Object} val
 */
export const isExist = function (val) {
    return !(isNotExist(val));
};

/**
 * Check if args is Object
 * @param {Object} val
 */
export const isObject = function (val) {
    return !isUndefined(val) &&
        typeof val === 'object' &&
        Object.prototype.toString.call(val) === '[object Object]'
};

/**
 * Check if args in Array
 * @param {Object} val
 */
export const isInclude = function (val, array) {
    return isExist(val) && isArray(array) && array.includes(val);
};

/**
 * Check if args in public
 * @param {Object} val
 */
export const isPublic = function (_key) {
    return isExist(_publicConfig) && isExist(_publicConfig[_key]) && _publicConfig[key].enable;
};