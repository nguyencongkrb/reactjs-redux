export function setName(name) {
    return {
        type: "SET_NAME",
        payload: new Promise((resolve, reject) => {
            resolve(name);
        })
    };
}

export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    };
}
