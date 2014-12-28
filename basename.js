module.exports = {
  name: "basename",
  ns: "path",
  description: "Path basename",
  phrases: {
    active: "Getting basename for {{input.path}} and extension {{input.ext}}"
  },
  ports: {
    input: {
      path: {
        title: "Path",
        type: "string"
      },
      ext: {
        title: "Extension",
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
  fn: function basename(input, output, state, done, cb, on, path) {
    var r = function() {
      output = {
        result: path.basename(input.path, input.ext)
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