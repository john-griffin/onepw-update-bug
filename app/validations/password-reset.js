import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  password: validatePresence(true),
  passwordConfirm: validatePresence(true)
};
