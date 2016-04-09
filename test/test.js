var test = require('tape')
var isIsomorphic = require('../graphIsomorphisms.js')

var g = [[0, 1], [1, 2], [2, 0]]
test('g ~ g', function (t) {
  t.equal(isIsomorphic(g, g).length, 3, 'three isos on g')
  t.end()
})

var g1 = [[1, 2], [2, 3], [1, 3]]
var g2 = [[4, 3], [4, 21], [21, 3]]
test('g1 ~ g2', function (t) {
  var iso = isIsomorphic(g1, g2)
  t.ok(iso, 'isomorphic graphs should be isomorphic')
  t.equal(iso.length, 1, 'there is one isomorphism between g1, g2')
  t.end()
})

var g3 = [[0, 1], [1, 2], [1, 3]]
var g4 = [[9, 8], [8, 7], [8, 6]]

test('g3 ~ g4', function (t) {
  var iso = isIsomorphic(g3, g4)
  t.ok(iso, 'isomorphic graphs should be isomorphic')
  t.equal(iso.length, 2, 'there are two isomorphisms between g3, g4')
  t.end()
})

test('g1 not ~ g3', function (t) {
  var iso = isIsomorphic(g1, g3)
  t.equal(iso.length, 0, 'non-isomorphic graphs shouldn\'t be isomorphic')
  t.end()
})
