function test() {
  const a = 5;

  const tambah = () => {
    return a + 5;
  };

  tambah();
  return (
    <main>
      <button onClick={tambah}>a</button>
    </main>
  );
}
