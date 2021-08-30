
// You should implement your task here.

module.exports = towelSort = matrix => matrix ? matrix.reduce((a, c, i) => i & 1 ? c.reduceRight((b, e) => [...b, e], a) : c.reduce((b, e) =>[...b, e], a), []) : []
