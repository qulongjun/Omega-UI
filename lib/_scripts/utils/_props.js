import {isExist, isArray} from "../_is";

const _computedAPI = {
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
    }
};

const _elementProps = (props) => {

};
const _componentProps = (props) => {

};
