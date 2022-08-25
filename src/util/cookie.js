export function getCookie(name) {
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    let arr;
    if (arr = document.cookie.match(reg))
        return arr[2];
    else return null;
}

export function setCookie(name, value, expiredays) {
    let initCookie = () => {
        let destroyDate = new Date();
        destroyDate.setDate(destroyDate.getDate() + expiredays);
        console.log(destroyDate)
        document.cookie = name + "=" + value.toString() + ((expiredays == null) ? "" : "; expires=" + destroyDate.toGMTString())
    }
    if (getCookie(name) != null) {
        initCookie();
    } else {
        deleteCookie(name);
        initCookie();
    }
}

export function deleteCookie(name) {
    let val = getCookie(name);
    let destroyDate = new Date();
    destroyDate.setDate(destroyDate.getDate() - 1);
    if (val != null) {
        document.cookie = name + "=" + "; expires=" + destroyDate.toGMTString();
    }
}
