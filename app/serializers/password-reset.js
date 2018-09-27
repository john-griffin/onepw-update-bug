import BaseSerializer from './application';

export default BaseSerializer.extend({
  // password passed directly from adapter to avoid caching in model
  serialize(record, options) {
    let payload = this._super(record, options);
    if (record.adapterOptions && record.adapterOptions.password) {
      payload.data.attributes.password = record.adapterOptions.password;
    }
    return payload;
  }
});
