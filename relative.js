module.exports = {
  name: "relative",
  ns: "path",
  description: "Path relative",
  phrases: {
    active: "Determining relative path for {{input.path}}"
  },
  ports: {
    input: {
      from: {
        title: "From",
        type: "string"
      },
      to: {
        title: "To",
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
  fn: function relative(input, $, output, state, done, cb, on, path) {
    var r = function() {
      output = {
        result: $.create(path.relative($.from, $.to))
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