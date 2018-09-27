import { module, test } from "qunit";
import { click, currentURL, fillIn, visit } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | password reset", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("/password-reset/:token should allow password to be updated", async function(assert) {
    await visit("/password-reset/fake-token");
    assert.equal(currentURL(), "/password-reset/fake-token");
    await fillIn("[data-test-password]", "secret_password");
    await fillIn("[data-test-password-confirm]", "secret_password");
    await click("[data-test-password-reset-button]");
    assert
      .dom("[data-test-reset-message]")
      .hasText("Your password has been updated and can be used to login.");
    assert.equal(this.server.db.passwordResets[0].token, "fake-token");
  });
});
