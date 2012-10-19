/* vim:set ts=2 sw=2 sts=2 expandtab */
/*jshint asi: true undef: true es5: true node: true browser: true devel: true
         forin: true latedef: false globalstrict: true*/

"use strict";

var powerset = require("../powerset")
exports["test powerset"] = function(assert) {

  assert.deepEqual(powerset([0, 1, 2]),
                   [[], [0], [1], [0,1], [2], [0,2], [1,2], [0,1,2]],
                   "[0, 1, 2] => [[], [0], [1], [0,1], [2], [0,2], [1,2], [0,1,2]]")

  assert.deepEqual(powerset("ab"), [[], ["a"], ["b"], ["a","b"]],
                   '"ab" => [[], ["a"], ["b"], ["a","b"]]')
}

require("test").run(exports)
