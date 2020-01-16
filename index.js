const nemo = ['nemo'];

function findNemo() {
  let t0 = performance.now();

  for (i = 0; i < nemo.length(); i++) {
    if (nemo[i] === 'nemo') {
      console.log('found Nemo!!');

    }
  }

  let t1 = performance.now;

  console.log('Time to find Nemo took' + t1 - t0 + 'miliseconds');
};
findNemo(nemo);