const promisifyAll = (Model, methods) => {
  methods.forEach((method) => {
    Model[method] = promisify(Model[method].bind(Model));
  });
};

module.exports = { promisify, promisifyAll };
