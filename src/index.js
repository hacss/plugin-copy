export default spec => {
  const from = Object.keys(spec);
  return [
    decls => {
      from.forEach(from => {
        spec[from].forEach(to => {
          if (from in decls) {
            decls[to] = decls[from];
          }
        });
      });
      return decls;
    },
    from,
  ];
};
