import Component from '@ember/component';
import { task } from 'ember-concurrency';
import PasswordResetValidations from '../validations/password-reset';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  tagName: '',
  init() {
    this._super(...arguments);
    this.isComplete = false;
    this.data = new Changeset(
      {},
      lookupValidator(PasswordResetValidations),
      PasswordResetValidations
    );
    this.data.validate();
  },
  submitTask: task(function*() {
    let token = this.token;
    let password = this.data.get('password');
    let passwordConfirm = this.data.get('passwordConfirm');
    if (password === passwordConfirm) {
      if (this.data.isValid) {
        let passwordReset = this.store.createRecord('password-reset', {
          token
        });
        yield passwordReset.save({ adapterOptions: { password } });
        this.set('isComplete', true);
      }
    } else {
      this.set('error', 'Password and password confirmation must be the same');
      this.data.set('password', '');
      this.data.set('passwordConfirm', '');
    }
  }).drop()
});
