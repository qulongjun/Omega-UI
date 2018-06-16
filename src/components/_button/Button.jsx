/**
 *
 * @Component: Button
 * @User: Longjun.Qu
 * @Date: 2018-06-14
 * @Time: 23:00
 *
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {_sysBind, stateColor} from 'plugins/utils/_props';
import {isNotExist, isArray, isString} from 'plugins/utils/_is';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        label: 'button',
        type: 'button',
        href: '#'
    };
    static propTypes = {};

    render() {
        const _props = this.props;
        const {label, href, type, thicken, fontBold, value, size, gradient, btnColor, isWide, isBlock, btnState, btnStyle, isCustom, loader} = _props;
        let _sysClass = ['btn', 'm-btn'];
        //背景颜色
        btnColor && _sysClass.push('btn-' + btnColor);
        //渐变色 Class
        if (gradient && gradient.from && gradient.to) {
            _sysClass = _sysClass.concat(['m-btn--gradient-from-' + gradient.from, 'm-btn--gradient-to-' + gradient.to]);
        }
        //Btn是否加宽
        isWide && _sysClass.push('m-btn--wide');
        //Btn是否显示为块元素
        isBlock && _sysClass.push('btn-block');
        //Btn尺寸：lg和sm
        ['lg', 'sm'].includes(size) && _sysClass.push('btn-' + size);
        //Btn状态：active,disabled
        ['active', 'disabled'].includes(btnState) && _sysClass.push(btnState);
        //Btn类型
        isArray(btnStyle) && btnStyle.map((item) => {
            ['square', 'pill', 'air'].includes(item) && _sysClass.push('m-btn--' + item);
        });
        !isNotExist(btnStyle) && isString(btnStyle) && _sysClass.push('m-btn--' + btnStyle);
        //是否使用Omega定制组件
        isCustom && _sysClass.push('m-btn--custom');
        //边框变厚（仅Outline'）
        thicken && _sysClass.push('m-btn--outline-2x');
        ['regular', 'bold', 'bolder', 'boldest'].includes(fontBold) && _sysClass.push('m-btn--' + fontBold);
        if (!isNotExist(loader) && loader.show) {
            _sysClass.push('m-loader');
            !isNotExist(loader.color) && _sysClass.push('m-loader--' + loader.color);
            !isNotExist(loader.size) && ['sm', 'lg'].includes(loader.size) && _sysClass.push('m-loader--' + loader.size);
            !isNotExist(loader.align) && ['center', 'left', 'right'].includes(loader.align) && _sysClass.push('m-loader--' + loader.align);
        }
        let componentDom = null;
        switch (label) {
            case 'button':
                componentDom = (<Fragment>
                    <button ref="button" {..._sysBind(_props, _sysClass, null, {
                        type
                    })}>{value}</button>
                </Fragment>);
                break;
            case 'input':
                componentDom = ( <Fragment><input ref="button" {..._sysBind(_props, _sysClass, null, {
                    value, type
                })} /></Fragment>);
                break;
            case 'a':
                componentDom = (<Fragment><a ref="button" {..._sysBind(_props, _sysClass, null, {
                        href,
                        role: type
                    })}>{value}</a></Fragment>
                )
        }
        return (componentDom);
    }
}
export default Button;