const times = (n, callback) => {
  for (var i = 0; i < n; i++) {
    callback(i,n);
  }
}

export {
  times
}
