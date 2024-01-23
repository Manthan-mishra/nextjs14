const ColorBoxLayout = ({ children, Left, Right }: any) => {
  return (
    <section>
      {children}
      {Left}
      {Right}
    </section>
  );
};

export default ColorBoxLayout;
