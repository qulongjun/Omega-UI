/**
 * Created by qulongjun on 2018/6/14.
 */
import {_copy} from './_copy';
import {isNotExist, isString, isObject, isArray} from 'plugins/utils/_is';

const stateColor = ['brand', 'metal', 'light', 'accent', 'focus', 'primary', 'success', 'info', 'warning', 'danger', 'secondary'];

export const _computedClass = (props = {}, _sysClass = []) => {
    const {_includeClass = [], _excludeClass = [], _uniqueClass} = props;
    if (isNotExist(_uniqueClass)) {
        //不存在唯一性约束
        let _computed = !isNotExist(_sysClass) ? (_copy(isArray(_sysClass) ? _sysClass : [_sysClass])) : [];
        _computed = _computed.concat(isArray(_includeClass) ? _includeClass : [_includeClass]);
        isArray(_excludeClass) ? _excludeClass.map((item) => {
            _computed.includes(item) ? _computed.splice(_computed.indexOf(item), 1) : null;
        }) : !isNotExist(_excludeClass) ? _computed.splice(_computed.indexOf(_excludeClass), 1) : null;
        // console.log(_computed);
        return !isNotExist(_computed) ? _computed : [];
    } else return isArray(_uniqueClass) ? _uniqueClass : [_uniqueClass];
};

export const _computedStyle = (props = {}, _sysStyle = {}) => {
    const {_includeStyle = {}} = props;
    if (!isNotExist(_includeStyle)) {
        let styles = {};
        Object.assign(styles, _sysStyle, _includeStyle);
        return styles;
    } else return _sysStyle || {};
};

export const _computedAttribute = (props = {}, _sysAttribute = {}) => {
    const {_includeAttribute = {}} = props;
    if (!isNotExist(_includeAttribute)) {
        let _attr = {};
        Object.assign(_attr, _sysAttribute, _includeAttribute);
        return _attr;
    } else return _sysAttribute || {};
};


export const _computedHandle = (props = {}, _sysHandle = {}) => {
    const {_handle = {}} = props;
    if (!isNotExist(_handle)) {
        let _attr = {};
        Object.assign(_attr, _sysHandle, _handle);
        return _attr;
    } else return _sysHandle || {};
};

export const _sysBind = (props = {}, _sysClass = [], _sysStyle = {}, _sysAttribute = {}, _sysHandle = {}) => {
    const {_fontColor, _bgColor} = props;
    !isArray(_sysClass) ? (!isNotExist(_sysClass) ? _sysClass = [_sysClass] : []) : null;
    _fontColor && ((_fontStateClass(_fontColor) && _sysClass.push(_fontStateClass(_fontColor))) || (Object.assign(_sysStyle, _fontStateStyle(_fontColor))));
    _bgColor && ((_bgStateClass(_bgColor) && _sysClass.push(_bgStateClass(_bgColor))) || (Object.assign(_sysStyle, _bgStateStyle(_bgColor))));
    let _includeConfig = {
        className: _computedClass(props, _sysClass).join(' '),
        style: _computedStyle(props, _sysStyle),
    };

    Object.assign(_includeConfig, _computedAttribute(props, _sysAttribute), _computedHandle(props, _sysHandle));
    return _includeConfig;
};


export const _fontStateClass = (state) => {
    return stateColor.includes(state) ? 'm--font-' + state : null;
};
export const _fontStateStyle = (state) => {
    return {color: state};
};

export const _bgStateClass = (state) => {
    return stateColor.includes(state) ? 'm--bg-' + state : null;
};
export const _bgStateStyle = (state) => {
    return {backgroundColor: state};
};


export const _delivery = (props = {}, _sysClass = [], _sysStyle = {}, _sysAttribute = {}, _sysHandle = {}) => {
    const props_copy = _copy(props, ['children']);
    Object.assign(props_copy, {
        _includeClass: _computedClass(props, _sysClass),
        _includeStyle: _computedStyle(props, _sysStyle),
        _includeAttribute: _computedAttribute(props, _sysAttribute),
        _handle: _computedHandle(props, _sysHandle)
    });
    return props_copy;
};