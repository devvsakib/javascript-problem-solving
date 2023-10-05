const cancellable = (generator) => {
  let cancel;
  const cancelPromise = new Promise((_, reject) => {
    cancel = () => reject("Cancelled");
  });
  // Every Promise rejection has to be caught.
  cancelPromise.catch(() => {});

  const promise = (async () => {
    let next = generator.next();
    while (!next.done) {
      try {
        next = generator.next(await Promise.race([next.value, cancelPromise]));
      } catch (e) {
        next = generator.throw(e);
      }
    }
    return next.value;
  })();

  return [cancel, promise];
};
