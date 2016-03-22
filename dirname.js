module.exports = {
  name: "dirname",
  ns: "path",
  description: "Path dirname",
  phrases: {
    active: "Getting dirname for {{input.path}}"
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
  fn: function dirname(input, $, output, state, done, cb, on, path) {
    var r = function() {
      output = {
        result: $.create(path.dirname($.path))
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