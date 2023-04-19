window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

for (let i = 0; i < 5; i++) {
  promises.push(new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      resolve(`Promise ${i+1} resolved in ${time} seconds`);
    }, time * 1000);
  }));
}

Promise.any(promises).then(result => {
  document.getElementById('output').textContent = result;
});
