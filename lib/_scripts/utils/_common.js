/**
 * 公共配置参数
 */
import {isExist} from "./_is";

const _positionSize = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const _valignPosition = ['top', 'middle', 'bottom'];
const _alignPosition = ['left', 'right', 'center'];
const _spaceSize = [5, 10, 15, 20, 30, 40];
const _transform = ['u', 'l', 'c', 'i'];
const _weight = ['thin', 'normal', 'bold', 'bolder', 'boldest', 'boldest2'];
const _fontSize = ['lg1', 'lg2', 'lg3', 'lg4', 'lg5', 'sm1', 'sm2', 'sm3', 'sm4', 'sm5', 'normal'];
const _fontColor = ['brand', 'metal', 'light', 'accent', 'focus', 'primary', 'success', 'info', 'warning', 'danger'];
const _visible = ['sm', 'md', 'lg', 'xxl', 'xxxl'];

const _commonProps = {
    _margin: (size = 0) => {
        return _positionSize.includes(size) ? 'm-margin-' + size : null;
    },
    _marginTop: (size = 0) => {
        return _positionSize.includes(size) ? 'm-margin-top-' + size : null;
    },
    _marginLeft: (size = 0) => {
        return _positionSize.includes(size) ? 'm-margin-left-' + size : null;
    },
    _marginRight: (size = 0) => {
        return _positionSize.includes(size) ? 'm-margin-right-' + size : null;
    },
    _marginBottom: (size = 0) => {
        return _positionSize.includes(size) ? 'm-margin-bottom-' + size : null;
    },
    _marginless: (result = false) => {
        return result ? 'm--marginless' : null;
    },
    _padding: (size = 0) => {
        return _positionSize.includes(size) ? 'm-padding-' + size : null;
    },
    _paddingTop: (size = 0) => {
        return _positionSize.includes(size) ? 'm-padding-top-' + size : null;
    },
    _paddingLeft: (size = 0) => {
        return _positionSize.includes(size) ? 'm-padding-left-' + size : null;
    },
    _paddingRight: (size = 0) => {
        return _positionSize.includes(size) ? 'm-padding-right-' + size : null;
    },
    _paddingBottom: (size = 0) => {
        return _positionSize.includes(size) ? 'm-padding-bottom-' + size : null;
    },
    _fullHeight: (result = false) => {
        return result ? 'm--full-height' : null;
    },
    _valign: (placement = null) => {
        return _valignPosition.includes(placement) ? 'm--valign-' + placement : null;
    },
    _space: (size = 0) => {
        return _spaceSize.includes(size) ? 'm--space-' + size : null;
    },
    _blockCenter: (result = false) => {
        return result ? 'm--block-center' : null;
    },
    _blockInline: (result = false) => {
        return result ? 'm--block-inline' : null;
    },
    _align: (placement = null) => {
        return _alignPosition.includes(placement) ? "m--align-" + placement : null;
    },
    _pull: (placement = null) => {
        return _alignPosition.includes(placement) ? "m--pull-" + placement : null;
    },
    _imageRounded: (result = false) => {
        return result ? "m--img-rounded" : null;
    },
    _imgCentered: (result = false) => {
        return result ? "m--img-centered" : null;
    },
    _hide: (result = false) => {
        return result ? 'm--hide' : null;
    },
    _clearfix: (result = false) => {
        return result ? 'm--clearfix' : null;
    },
    _fontTransform: (transform = null) => {
        return _transform.includes(transform) ? 'm--font-transform-' + transform : null;
    },
    _fontWeight: (weight = null) => {
        return _weight.includes(weight) ? 'm--font-' + weight : null;
    },
    _fontSize: (size = null) => {
        return _fontSize.includes(size) ? 'm--text-font-size-' + size : null;
    },
    _iconSize: (size = null) => {
        return _fontSize.includes(size) ? 'm--icon-font-size-' + size : null;
    },
    _fontColor: (color = null) => {
        return _fontColor.includes(color) ? 'm--font-' + color : null;
    },
    _fontInverseColor: (color = null) => {
        return _fontColor.includes(color) ? 'm--font-inverse-' + color : null;
    },
    _bgColor: (color = null) => {
        return _fontColor.includes(color) ? 'm--bg-' + color : null;
    },
    _bgFillColor: (color = null) => {
        return _fontColor.includes(color) ? 'm--bg-fill-' + color : null;
    },
    _visibleBlock: (item = null) => {
        return _visible.includes(item) ? 'm--visible-' + item : null;
    },
    _visibleInlineBlock: (item = null) => {
        return _visible.includes(item) ? 'm--visible-' + item + '-inline-block' : null;
    },
    _visibleHidden: (item = null) => {
        return _visible.includes(item) ? 'm--hidden-' + item : null;
    }
};

const includeCommon = (key, value) => {
    return isExist(key) && _commonProps[key] && _commonProps[key](value);
};
export default includeCommon;