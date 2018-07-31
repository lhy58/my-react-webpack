/**
 * Created by woo on 01/06/2017.
 */

//const production = process.env.NODE_ENV === 'production';
const envNames = ['production', 'test', 'development'];
const envName  = process.env.NODE_ENV.toLowerCase();


const API_DOMAIN = ['aapi.sport147.cn', 'taapi.sport147.cn', 'daapi.sport147.cn'][envNames.indexOf(envName)];
const USER_API_DOMAIN = ['sport147.cn', 'ttt.sport147.cn', 'ttt.sport147.cn'][envNames.indexOf(envName)];
//const API_DOMAIN = production ? 'taapi.sport147.cn' : 'taapi.sport147.cn';
const IMAGE_DOMAIN = 'http://images.sport147.cn';

export {
     API_DOMAIN,
    IMAGE_DOMAIN,
    USER_API_DOMAIN,
}
