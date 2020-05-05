export default spec => {
  const from = Object.keys(spec);
  return [
    decls => {
      from.forEach(from => {
        spec[from].forEach(to => {
          decls[to] = decls[from];
        });
      });
      return decls;
    },
    from,
  ];
};
