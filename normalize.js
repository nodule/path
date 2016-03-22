module.exports = {
  name: "normalize",
  ns: "path",
  description: "Path normalize",
  phrases: {
    active: "Normalizing path for {{input.path}}"
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
  fn: function normalize(input, $, output, state, done, cb, on, path) {
    var r = function() {
      output = {
        result: $.create(path.normalize($.path))
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