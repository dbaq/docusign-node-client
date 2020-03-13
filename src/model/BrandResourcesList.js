/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BrandResources'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BrandResources'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.BrandResourcesList = factory(root.Docusign.ApiClient, root.Docusign.BrandResources);
  }
}(this, function(ApiClient, BrandResources) {
  'use strict';


  /**
   * The BrandResourcesList model module.
   * @module model/BrandResourcesList
   * @version 4.6.0-rc1
   */

  /**
   * Constructs a new <code>BrandResourcesList</code>.
   * @alias module:model/BrandResourcesList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BrandResourcesList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrandResourcesList} obj Optional instance to populate.
   * @return {module:model/BrandResourcesList} The populated <code>BrandResourcesList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('resourcesContentTypes')) {
        obj['resourcesContentTypes'] = ApiClient.convertToType(data['resourcesContentTypes'], [BrandResources]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/BrandResources>} resourcesContentTypes
   */
  exports.prototype['resourcesContentTypes'] = undefined;



  return exports;
}));


