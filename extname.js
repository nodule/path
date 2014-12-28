module.exports = {
  name: "extname",
  ns: "path",
  description: "Path extname",
  phrases: {
    active: "Determine extension for {{input.path}}"
  },
  ports: {
    input: {
      path: {
        title: "Path",
        type: "string"
      }
    },
    output: {
      result: {
        title: "Result",
        type: "string"
      }
    }
  },
  dependencies: {
    npm: {
      path: require('path')
    }
  },
  fn: function extname(input, output, state, done, cb, on, path) {
    var r = function() {
      output = {
        result: path.extname(input.path)
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}