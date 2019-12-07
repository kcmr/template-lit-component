import { fixture, fixtureCleanup, html, assert } from '@open-wc/testing';
import '../{{component}}.js';

suite('<{{component}}>', () => {
  teardown(() => {
    fixtureCleanup();
  });

  test('"myProperty" can be set via "my-property" attribute', async() => {
    const el = await fixture(html`
      <{{component}} my-property="foo"></{{component}}>
    `);

    assert.strictEqual(el.myProperty, 'foo');
  });
});
