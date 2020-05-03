module.exports = function(spec) {
  var from = Object.keys(spec);
  return [
    function(decls) {
      for (var i = 0; i < from.length; i++) {
        if (from[i] in decls) {
          for (var j = 0; j < spec[from[i]].length; j++) {
            decls[spec[from[i]][j]] = decls[from[i]];
          }
        }
      }
      return decls;
    },
    from,
  ];
};
