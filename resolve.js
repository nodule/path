module.exports = {
  name: "resolve",
  ns: "path",
  description: "Path resolve",
  phrases: {
    active: "Resolving path for {{input.path}}"
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
  fn: function resolve(input, output, state, done, cb, on, path) {
    var r = function() {
      output = {
        result: path.resolve(input.from, input.to)
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