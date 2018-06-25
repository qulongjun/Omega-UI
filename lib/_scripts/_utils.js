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
