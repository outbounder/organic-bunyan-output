# oragnic-bunyan-output

Organelle which captures chemicals and transforms them to [bunyan](https://github.com/trentm/node-bunyan) method calls.

Chemicals are expected to have at least the following structure:

    {
      method: String, // one of the following: "log", "debug", "error", "warn", "info", "trace"
      arguments: Array[ Mixed ]
    }

Once chemical is captured it is used to invoke one of the methods of bunyan instance calling it with given `arguments`. 

Note: Chemicals with `method` property having value of `log` invoke `info` method of bunayn.

## dna

    {
      "reactOn": String,
      "bunyan": {
        // ... bunyan options
      }
    }

Note: bunyan options `stream` & `streams[ {stream: value} ]` having string values `process.stdout` or `process.stderr` are referenced as respective `process` object streams.