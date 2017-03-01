/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = (function() {
   'use strict';

   var ApiClient = require('../ApiClient'),
       BadInput = require('../model/BadInput'),
       Conflict = require('../model/Conflict'),
       CreateRef = require('../model/CreateRef'),
       Folder = require('../model/Folder'),
       Forbidden = require('../model/Forbidden'),
       JsonApiCollection = require('../model/JsonApiCollection'),
       NotFound = require('../model/NotFound'),
       Refs = require('../model/Refs');

  /**
   * Folders service.
   * @module api/FoldersApi
   * @version 0.2.7
   */

  /**
   * Constructs a new FoldersApi. 
   * @alias module:api/FoldersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Returns the folder by ID for any folder within a given project. All folders or sub-folders within a project are associated with their own unique ID, including the root folder. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} folderId the &#x60;folder id&#x60;
     * data is of type: {module:model/Folder}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getFolder = function(projectId, folderId, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getFolder");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        return Promise.reject("Missing the required parameter 'folderId' when calling getFolder");
      }


      var pathParams = {
        'project_id': projectId,
        'folder_id': folderId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Folder;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders/{folder_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Returns a collection of items and folders within a folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} folderId the &#x60;folder id&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterType filter by the `type` of the `ref` target
     * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * @param {Integer} opts.pageNumber specify the page number
     * @param {Integer} opts.pageLimit specify the maximal number of elements per page
     * data is of type: {module:model/JsonApiCollection}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getFolderContents = function(projectId, folderId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getFolderContents");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        return Promise.reject("Missing the required parameter 'folderId' when calling getFolderContents");
      }


      var pathParams = {
        'project_id': projectId,
        'folder_id': folderId
      };
      var queryParams = {
        'filter[type]': this.apiClient.buildCollectionParam(opts['filterType'], 'csv'),
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'csv'),
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'csv'),
        'page[number]': opts['pageNumber'],
        'page[limit]': opts['pageLimit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = JsonApiCollection;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders/{folder_id}/contents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Returns the parent folder (if it exists). In a project, subfolders and resource items are stored under a folder except the root folder which does not have a parent of its own. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} folderId the &#x60;folder id&#x60;
     * data is of type: {module:model/Folder}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getFolderParent = function(projectId, folderId, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getFolderParent");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        return Promise.reject("Missing the required parameter 'folderId' when calling getFolderParent");
      }


      var pathParams = {
        'project_id': projectId,
        'folder_id': folderId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Folder;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders/{folder_id}/parent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Returns the resources (&#x60;items&#x60;, &#x60;folders&#x60;, and &#x60;versions&#x60;) which have a custom relationship with the given &#x60;folder_id&#x60;. Custom relationships can be established between a folder and other resources within the &#39;data&#39; domain service (folders, items, and versions). 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} folderId the &#x60;folder id&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterType filter by the `type` of the `ref` target
     * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * data is of type: {module:model/JsonApiCollection}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getFolderRefs = function(projectId, folderId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getFolderRefs");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        return Promise.reject("Missing the required parameter 'folderId' when calling getFolderRefs");
      }


      var pathParams = {
        'project_id': projectId,
        'folder_id': folderId
      };
      var queryParams = {
        'filter[type]': this.apiClient.buildCollectionParam(opts['filterType'], 'csv'),
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'csv'),
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = JsonApiCollection;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders/{folder_id}/refs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Returns the custom relationships that are associated to the given &#x60;folder_id&#x60;. Custom relationships can be established between a folder and other resources within the &#39;data&#39; domain service (folders, items, and versions). 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} folderId the &#x60;folder id&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterType filter by the `type` of the `ref` target
     * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
     * @param {Array.<String>} opts.filterRefType filter by `refType`
     * @param {module:model/String} opts.filterDirection filter by the direction of the reference
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * data is of type: {module:model/Refs}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getFolderRelationshipsRefs = function(projectId, folderId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getFolderRelationshipsRefs");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        return Promise.reject("Missing the required parameter 'folderId' when calling getFolderRelationshipsRefs");
      }


      var pathParams = {
        'project_id': projectId,
        'folder_id': folderId
      };
      var queryParams = {
        'filter[type]': this.apiClient.buildCollectionParam(opts['filterType'], 'csv'),
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'csv'),
        'filter[refType]': this.apiClient.buildCollectionParam(opts['filterRefType'], 'csv'),
        'filter[direction]': opts['filterDirection'],
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Refs;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Creates a new folder in the &#x60;data&#x60; domain service
     * @param {module:model/CreateFolder} body describe the folder to be created
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.postFolder = function(body, oauth2client, credentials) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling postFolder");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Creates a custom relationship between a folder and another resource within the &#39;data&#39; domain service (folder, item, or version). 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} folderId the &#x60;folder id&#x60;
     * @param {module:model/CreateRef} body describe the ref to be created
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.postFolderRelationshipsRef = function(projectId, folderId, body, oauth2client, credentials) {
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling postFolderRelationshipsRef");
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        return Promise.reject("Missing the required parameter 'folderId' when calling postFolderRelationshipsRef");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling postFolderRelationshipsRef");
      }


      var pathParams = {
        'project_id': projectId,
        'folder_id': folderId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };
  };

  return exports;
}());
