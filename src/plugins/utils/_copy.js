/**
 * Created by qulongjun on 2018/6/14.
 */


export const _copy = (obj, exclude = []) => {
    let c = obj instanceof Array ? [] : {};
    for (let i in obj) if (!exclude.includes(i) && obj.hasOwnProperty(i)) {
        let prop = obj[i];
        if (typeof prop === 'object') {
            if (prop instanceof Array) {
                c[i] = [];
                for (let j = 0; j < prop.length; j++) {
                    if (typeof prop[j] !== 'object') {
                        c[i].push(prop[j]);
                    } else {
                        c[i].push(_copy(prop[j]));
                    }
                }
            } else {
                c[i] = _copy(prop);
            }
        } else {
            c[i] = prop;
        }
    }
    return c;
};

