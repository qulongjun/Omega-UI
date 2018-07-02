import {Copy} from './_utils';
import {isNotExist, isExist, isArray} from './_is';
import {_publicColor} from './_public';

const _computedClass = (props = {}, _sysClass = []) => {
    const {_includeClass = [], _excludeClass = [], _uniqueClass} = props;
    if (isNotExist(_uniqueClass)) {
        //不存在唯一性约束
        let _computed = isExist(_sysClass) ? (Copy(isArray(_sysClass) ? _sysClass : [_sysClass])) : [];
        _computed = _computed.concat(isArray(_includeClass) ? _includeClass : [_includeClass]);
        isArray(_excludeClass) ? _excludeClass.map((item) => {
            _computed.includes(item) ? _computed.splice(_computed.indexOf(item), 1) : null;
        }) : isExist(_excludeClass) ? _computed.splice(_computed.indexOf(_excludeClass), 1) : null;
        return isExist(_computed) ? _computed : [];
    } else return isArray(_uniqueClass) ? _uniqueClass : [_uniqueClass];
};

const _computedStyle = (props = {}, _sysStyle = {}) => {
    const {_includeStyle = {}} = props;
    if (isExist(_includeStyle)) {
        let styles = {};
        Object.assign(styles, _sysStyle, _includeStyle);
        return styles;
    } else return _sysStyle || {};
};

const _computedAttribute = (props = {}, _sysAttribute = {}) => {
    const {_includeAttribute = {}} = props;
    if (isExist(_includeAttribute)) {
        let _attr = {};
        Object.assign(_attr, _sysAttribute, _includeAttribute);
        return _attr;
    } else return _sysAttribute || {};
};

const _computedHandle = (props = {}, _sysHandle = {}) => {
    const {_handle = {}} = props;
    if (isExist(_handle)) {
        let _attr = {};
        Object.assign(_attr, _sysHandle, _handle);
        return _attr;
    } else return _sysHandle || {};
};

const _fontStateClass = (state) => {
    return _publicColor.includes(state) ? 'm--font-' + state : null;
};
const _fontStateStyle = (state) => {
    return {color: state};
};

const _bgStateClass = (state) => {
    return _publicColor.includes(state) ? 'm--bg-' + state : null;
};
const _bgStateStyle = (state) => {
    return {backgroundColor: state};
};

export const _sysBind = (props = {}, _sysClass = [], _sysStyle = {}, _sysAttribute = {}, _sysHandle = {}) => {
    const {_fontColor, _bgColor} = props;
    !isArray(_sysClass) ? (isExist(_sysClass) ? _sysClass = [_sysClass] : []) : null;
    _fontColor && ((_fontStateClass(_fontColor) && _sysClass.push(_fontStateClass(_fontColor))) || (Object.assign(_sysStyle, _fontStateStyle(_fontColor))));
    _bgColor && ((_bgStateClass(_bgColor) && _sysClass.push(_bgStateClass(_bgColor))) || (Object.assign(_sysStyle, _bgStateStyle(_bgColor))));
    let _includeConfig = {
        className: _computedClass(props, _sysClass).join(' '),
        style: _computedStyle(props, _sysStyle),
    };

    Object.assign(_includeConfig, _computedAttribute(props, _sysAttribute), _computedHandle(props, _sysHandle));
    return _includeConfig;
};

export const _delivery = (props = {}, _sysClass = [], _sysStyle = {}, _sysAttribute = {}, _sysHandle = {}) => {
    const props_copy = Copy(props, ['children']);
    Object.assign(props_copy, {
        _includeClass: _computedClass(props, _sysClass),
        _includeStyle: _computedStyle(props, _sysStyle),
        _includeAttribute: _computedAttribute(props, _sysAttribute),
        _handle: _computedHandle(props, _sysHandle)
    });
    return props_copy;
};

export const DefaultProps = (_propConfig) => {
    let _config = {};
    if (_propConfig) {
        for (let key in _propConfig) {
            _propConfig[key] && _propConfig[key].default && (_config[key] = _propConfig[key].default);
        }
    }
    return _config || {};
};
export const PropTypes = (_propConfig) => {
    let _config = {};
    if (_propConfig) {
        for (let key in _propConfig) {
            _propConfig[key] && _propConfig[key].type && (_config[key] = _propConfig[key].type);
        }
    }
    return _config || {};
};


export const computedStyle = (_ownerStyle, _globalStyle, prefix = 'input') => {
    if (isExist(_ownerStyle)) {
        if (isArray(_ownerStyle)) {
            let _style = [];
            _ownerStyle.map((item) => {
                _style.push('m-' + prefix + '--' + item);
            });
            return _style;
        } else return ['m-' + prefix + '--' + _ownerStyle];
    } else {
        if (isExist(_globalStyle)) {
            return isArray(_globalStyle) ? _globalStyle : [_globalStyle]
        } else return [];
    }
};


export const computedSolid = (_ownerSolid = false, _globalSolid = false, prefix = 'input') => {
    return _ownerSolid ? 'm-' + prefix + '--solid' : _globalSolid;
};

export const computedSize = (_ownerSize, _globalSize, prefix = 'input') => {
    return _ownerSize && ['sm', 'lg'].includes(_ownerSize) ? 'form-control-' + _ownerSize : _globalSize;
};


