
describe("test", () => {
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect('Java').toBe('JavaScript'); // Deveria falhar!
    done();
  }, 500);
});
});
