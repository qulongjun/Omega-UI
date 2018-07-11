/**
 *
 * 加载所有组件（不推荐）
 * @User: Longjun.Qu
 * @Date: 2018-07-06
 * @Time: 14:25
 *
 */

import './base';
import './base.scss';

const ENV = process.env.NODE_ENV;
if (ENV !== 'production' &&
    ENV !== 'test' &&
    typeof console !== 'undefined' &&
    console.warn &&
    typeof window !== 'undefined') {
    console.warn(
        '您采用了加载全部组件的方式开发, ' +
        '为了减少减少网络延迟，建议使用"按需加载"： https://www.npmjs.com/package/babel-plugin-import 方式。',
    );
}

export {default as Page} from './components/Page/index.osx';
export {default as Aside} from './components/Aside/index.osx';
export {default as Container} from './components/Container/index.osx';
export {default as Footer} from './components/Footer/index.osx';
export {default as Header} from './components/Header/index.osx';
export {default as Menu} from './components/Menu/index.osx';
export {default as Wrapper} from './components/Wrapper/index.osx';

export {default as Grid} from './components/Grid/index.osx';
export {default as GridItem} from './components/GridItem/index.osx';
export {default as Stack} from './components/Stack/index.osx';

export {default as Div} from './components/Div/index.osx';
export {default as Icon} from './components/Icon/index.osx';
export {default as Link} from './components/Link/index.osx';
export {default as List} from './components/List/index.osx';
export {default as Nav} from './components/Nav/index.osx';
export {default as Paragraph} from './components/Paragraph/index.osx';
export {default as Text} from './components/Text/index.osx';
export {default as Title} from './components/Title/index.osx';

export {default as Badge} from './components/Badge/index.osx';
export {default as Code} from './components/Code/index.osx';

export {default as Button} from './components/Button/index.osx';
