// add this file above index.js in the html so the debounce runs first

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId){
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func.apply(null,args);
        }, delay);
    };
};