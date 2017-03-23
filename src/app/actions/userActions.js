export function setName(name) {
    name = Math.random().toString(36).substring(2, 20);
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
