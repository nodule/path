module.exports = {
  name: "join",
  ns: "path",
  description: "Path join",
  phrases: {
    active: "Joining path for {{input.path}}"
  },
  ports: {
    input: {
      "in": {
        title: "Path",
        type: "array"
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
  fn: function join(input, $, output, state, done, cb, on, path) {
    var r = function() {
      output = {
        result: $.write('in', path.join.apply(null, $.in))
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