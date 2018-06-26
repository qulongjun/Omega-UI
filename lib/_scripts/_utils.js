export const Copy = (obj, exclude = []) => {
    let c = obj instanceof Array ? [] : {};
    for (let i in obj) {
        if (!exclude.includes(i) && obj.hasOwnProperty(i)) {
            let prop = obj[i];
            if (typeof prop === 'object') {
                if (prop instanceof Array) {
                    c[i] = [];
                    for (let j = 0; j < prop.length; j++) {
                        if (typeof prop[j] !== 'object') {
                            c[i].push(prop[j]);
                        } else {
                            c[i].push(Copy(prop[j]));
                        }
                    }
                } else {
                    if ((prop && (prop.$$typeof && prop.$$typeof.toString() === 'Symbol(react.element)')) || !prop) {
                        continue;
                    } else {
                        c[i] = Copy(prop);
                    }
                }
            } else {
                c[i] = prop;
            }
        }
    }
    return c;
};

export const uuid = (len, radix) => {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [], i;
    radix = radix || chars.length;
    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        // rfc4122, version 4 form
        let r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data. At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}