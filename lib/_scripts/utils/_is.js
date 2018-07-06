import React from 'react'

/**
 * 判断是否为组件
 * @param val
 * @returns {*}
 */
export const isComponent = function (val) {
    return isExist(val) && React.isValidElement(val);
};

/**
 * 判断元素是否为Undefined
 * @param {Object} val
 */
export const isUndefined = function (val) {
    return val === void 0;
};


/**
 * 判断元素是否为Document
 * @param {Object} elem
 * @returns {Boolean}
 */
export const isDocument = function (elem) {

    return !isUndefined(elem) &&
        elem instanceof Document &&
        elem.nodeType === 9
};

/**
 * 判断元素是否为HTML节点
 * @param {Object} elem
 * @returns {Boolean}
 */
export const isNode = function (elem) {
    return !isUndefined(elem) &&
        elem instanceof HTMLElement &&
        elem.nodeType === 1
};


/**
 *  判断元素是否为字符串
 * @param {Object} val
 */
export const isString = function (val = '') {
    return typeof val === 'string' ||
        val instanceof String
};

/**
 * 判断元素是否为方法
 * @param {Object} val
 */
export const isFn = function (val) {
    return !isUndefined(val) &&
        typeof val === 'function' &&
        Object.prototype.toString.call(val) === '[object Function]'
};


/**
 * 判断元素是否为数组
 * @param {Object} val
 */
export const isArray = function (val) {
    return !isUndefined(val) &&
        Array.isArray(val) &&
        Object.prototype.toString.call(val) === '[object Array]'
};

/**
 * 判断元素是否为Null
 * @param {Object} val
 */
export const isNull = function (val) {
    return val === null;
};

/**
 * 判断元素是否为NaN
 * @param {Object} val
 */
export const isNaN = function (val) {
    return !isUndefined(val)
        && Number.isNaN(val)
        && val !== val;
};


/**
 * 判断元素是否为数字
 * @param {Object} val
 */
export const isNumber = function (val) {
    return !isUndefined(val) && ((typeof val === 'number') || (typeof val === 'string' && parseInt(val) == val));
};


/**
 * 判断元素是否不存在
 * @param {Object} val
 */
export const isNotExist = function (val) {
    return isUndefined(val) || isNull(val) || isNaN(val);
};

/**
 * 判断元素是否存在
 * @param {Object} val
 */
export const isExist = function (val) {
    return !(isNotExist(val));
};

/**
 * 判断元素是否为对象
 * @param {Object} val
 */
export const isObject = function (val) {
    return !isUndefined(val) &&
        typeof val === 'object' &&
        Object.prototype.toString.call(val) === '[object Object]'
};

/**
 * 判断元素是否被包含在数组中
 * @param {Object} val
 */
export const isInclude = function (val, array) {
    return isExist(val) && isArray(array) && array.includes(val);
};
