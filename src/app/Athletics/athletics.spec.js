/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
 
describe( 'Athletics: ', function() {
  beforeEach( module( 'myBoiseState.athletics' ) );

  it( 'should expect true to be true', inject( function() {
    expect( true ).toBeTruthy();
  }));
});
