import {isExist, isArray, isObject} from "./_is";
import includeCommon from './_common';

const _computedAPI = {
    //融合用户输入的_includeClass与系统修饰符_sysClass
    _computedClass: (props = {}, _sysClass = []) => {
        const {_includeClass = [], _excludeClass = [], _uniqueClass = []} = props;
        if (isExist(_uniqueClass) && _uniqueClass.length !== 0) {
            return isArray(_uniqueClass) ? _uniqueClass : [_uniqueClass];
        } else {
            let _finalClaass = [].concat(isArray(_includeClass) ? _includeClass : [_includeClass], isArray(_sysClass) ? _sysClass : [_sysClass]);
            isArray(_excludeClass) ? _excludeClass.map((item) => {
                _finalClaass.includes(item) && _finalClaass.splice(_finalClaass.indexOf(item), 1);
            }) : _finalClaass.includes(_excludeClass) && _finalClaass.splice(_finalClaass.indexOf(_excludeClass), 1);
            return _finalClaass;
        }
    },
    //融合用户输入的_includeStyle与系统样式_sysStyle
    _computedStyle: (props = {}, _sysStyle = {}) => {
        const {_includeStyle = {}} = props;
        return Object.assign({}, isObject(_includeStyle) ? _includeStyle : {}, isObject(_sysStyle) ? _sysStyle : {});
    },
    //融合用户输入的_includeAttribute与系统属性_sysAttribute
    _computedAttribute: (props = {}, _sysAttribute = {}, _excludeProps = []) => {
        let {_includeAttribute = {}} = props;
        if (isArray(_excludeProps)) {
            _excludeProps.map((item) => {
                if (isObject(_includeAttribute)) {
                    if (isExist(_includeAttribute[item])) {
                        delete _includeAttribute[item];
                    }
                } else {
                    if (_includeAttribute === item) {
                        _includeAttribute = {};
                    }
                }

            })
        } else {
            if (isObject(_includeAttribute)) {
                if (isExist(_includeAttribute[_excludeProps])) {
                    delete _includeAttribute[_excludeProps];
                }
            } else {
                if (_includeAttribute === _excludeProps) {
                    _includeAttribute = {};
                }
            }
        }
        return Object.assign({}, isObject(_includeAttribute) ? _includeAttribute : {}, isObject(_sysAttribute) ? _sysAttribute : {});
    },
    //融合用户输入的_handle与系统事件_sysHandle
    _computedHandle: (props = {}, _sysHandle = {}) => {
        const {_handle = {}} = props;
        return Object.assign({}, isObject(_handle) ? _handle : {}, isObject(_sysHandle) ? _sysHandle : {});
    }
};
/**
 * 计算当前Component / DOM 元素传递属性
 * @param props 所有输入属性
 * @param _sysProps 系统属性 _sysClass/_sysStyle/_sysAttribute/_sysHandle
 * @param _excludeProps 输入属性中，不接受的属性列表
 * @param isDOMElement 是否为DOM元素
 * @returns {{}}
 * @private
 */
export const _props = (props = {}, _sysProps = {}, _excludeProps = [], isDOMElement = false) => {
    const {_sysClass = [], _sysStyle = {}, _sysAttribute = {}, _sysHandle = {}} = _sysProps || {};
    let _finalProps = {};
    _excludeProps = [].concat(_excludeProps, 'children', 'ref','key');
    Object.getOwnPropertyNames(props).forEach((attr) => {
        if (!_excludeProps.includes(attr)) {
            isDOMElement && (_sysClass.concat(isExist(includeCommon(attr, props[attr])) ? [includeCommon(attr, props[attr])] : []));
            Object.assign(_finalProps, {[attr]: props[attr]});
        }
    });

    let _buildProps = {};
    if (isDOMElement) {
        // DOM元素
        _buildProps = Object.assign({}, {
            className: _computedAPI._computedClass(props, _sysClass).join(' '),
            style: _computedAPI._computedStyle(props, _sysStyle)
        }, _computedAPI._computedAttribute(props, _sysAttribute, _excludeProps), _computedAPI._computedHandle(props, _sysHandle));
    } else {
        // Component元素
        _buildProps = Object.assign({}, _finalProps, {
            _includeClass: _computedAPI._computedClass(props, _sysClass),
            _includeStyle: _computedAPI._computedStyle(props, _sysStyle),
            _includeAttribute: _computedAPI._computedAttribute(props, _sysAttribute, _excludeProps),
            _handle: _computedAPI._computedHandle(props, _sysHandle)
        });
    }
    return _buildProps;
};


/**
 * 根据Props计算默认值
 * @private
 */
export const _default = (staticPorps = {}) => {
    let _defaultConfig = {};
    Object.getOwnPropertyNames(staticPorps).forEach((attr) => {
        if (isExist(staticPorps[attr].defaultValue)) {
            Object.assign(_defaultConfig, {[attr]: staticPorps[attr].defaultValue});
        }
    })
    return _defaultConfig;
};

/**
 * 根据Props计算数值类型
 * @private
 */
export const _type = (staticPorps = {}) => {
    let _defaultConfig = {};
    Object.getOwnPropertyNames(staticPorps).forEach((attr) => {
        if (isExist(staticPorps[attr].type)) {
            Object.assign(_defaultConfig, {[attr]: staticPorps[attr].type});
        }
    });
    return _defaultConfig;
};