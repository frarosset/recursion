// returns an array with the first n elements of the fibonacci sequence (iterative solution)
function fibs(n){
    let seq = [];

    if (n>0)
        seq.push(0);

    if (n>1)
        seq.push(1)

    for (let i=2;i<n;i++)
        seq.push(seq[i-1] + seq[i-2]);

    return seq;
}

// returns an array with the first n elements of the fibonacci sequence (recursive solution)
function fibsRec(n){
    if (n<3)
        return [0,1].slice(0,n);

    let seq = fibsRec(n-1);
    seq.push(seq[n-2] + seq[n-3]);
    return seq;
}

// test
n_test = [0,1,2,3,4,5,6,7,8];
for (let n of n_test){
    console.log(n, fibs(n), fibsRec(n));
}
