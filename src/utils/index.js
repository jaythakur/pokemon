export const shuffle = (array) => {
    let ctr = array.length;
    let temp;
    let index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
    }
    return array;
};

export const checkSequene = (array) => {
    let result = false;
    for(let i=0; i < array.length;i++){
        if(array[i]) {
            if (array[i] - array[i-1] === 1) result = true;
            else result = false;
        }
    }

    return result;
}