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

module.export = (function() {
  'use strict';

  var expect = require('expect.js'),
      sinon = require('sinon'),
      ForgeSdk = require('../../src'),
      instance,
      oauth2client,
      credentials,
      mockedApiClientRequest,
      ApiClient = require('../../src/ApiClient'),
      BadInput = require('../../src/model/BadInput'),
      Conflict = require('../../src/model/Conflict'),
      CreateItem = require('../../src/model/CreateItem'),
      CreateRef = require('../../src/model/CreateRef'),
      Folder = require('../../src/model/Folder'),
      Forbidden = require('../../src/model/Forbidden'),
      Item = require('../../src/model/Item'),
      ItemCreated = require('../../src/model/ItemCreated'),
      JsonApiCollection = require('../../src/model/JsonApiCollection'),
      NotFound = require('../../src/model/NotFound'),
      Refs = require('../../src/model/Refs'),
      Version = require('../../src/model/Version'),
      Versions = require('../../src/model/Versions');

  var sampleStrParam = 'test_string';
  var sampleIntParam = 10;

  var apiClient = new ApiClient();

  before(function(){
    oauth2client = new ForgeSdk.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['data:read', 'data:write']);
    credentials = {access_token: 'abce'};
    instance = new ForgeSdk.ItemsApi(apiClient);
    mockedApiClientRequest = sinon.stub(instance.apiClient, 'callApi');
  });

   after(function () {
     apiClient.callApi.restore();
   });


  describe('ItemsApi', function() {
    describe('getItem', function() {
      it('should call getItem successfully', function(done) {

        var postBody = null;

        var pathParams = {
        'project_id': sampleStrParam,
        'item_id': sampleStrParam
        };
        var queryParams = {
        };
        var headerParams = {
        };
        var formParams = {
        };

        var contentTypes = ['application/vnd.api+json'];
        var accepts = ['application/vnd.api+json', 'application/json'];
        var returnType = Item;

        mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/items/{item_id}', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getItem(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getItemParentFolder', function() {
      it('should call getItemParentFolder successfully', function(done) {

        var postBody = null;

        var pathParams = {
        'project_id': sampleStrParam,
        'item_id': sampleStrParam
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

        mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/items/{item_id}/parent', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getItemParentFolder(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getItemRefs', function() {
      it('should call getItemRefs successfully', function(done) {
        var opts = {};
        var postBody = null;

        var pathParams = {
        'project_id': sampleStrParam,
        'item_id': sampleStrParam
        };
        var queryParams = {
        'filter[type]': instance.apiClient.buildCollectionParam(opts['filterType'], 'csv'),
        'filter[id]': instance.apiClient.buildCollectionParam(opts['filterId'], 'csv'),
        'filter[extension.type]': instance.apiClient.buildCollectionParam(opts['filterExtensionType'], 'csv')
        };
        var headerParams = {
        };
        var formParams = {
        };

        var contentTypes = ['application/vnd.api+json'];
        var accepts = ['application/vnd.api+json', 'application/json'];
        var returnType = JsonApiCollection;

        mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/items/{item_id}/refs', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getItemRefs(sampleStrParam, sampleStrParam, opts, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getItemRelationshipsRefs', function() {
      it('should call getItemRelationshipsRefs successfully', function(done) {
        var opts = {};
        var postBody = null;

        var pathParams = {
        'project_id': sampleStrParam,
        'item_id': sampleStrParam
        };
        var queryParams = {
        'filter[type]': instance.apiClient.buildCollectionParam(opts['filterType'], 'csv'),
        'filter[id]': instance.apiClient.buildCollectionParam(opts['filterId'], 'csv'),
        'filter[refType]': instance.apiClient.buildCollectionParam(opts['filterRefType'], 'csv'),
        'filter[direction]': opts['filterDirection'],
        'filter[extension.type]': instance.apiClient.buildCollectionParam(opts['filterExtensionType'], 'csv')
        };
        var headerParams = {
        };
        var formParams = {
        };

        var contentTypes = ['application/vnd.api+json'];
        var accepts = ['application/vnd.api+json', 'application/json'];
        var returnType = Refs;

        mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/items/{item_id}/relationships/refs', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getItemRelationshipsRefs(sampleStrParam, sampleStrParam, opts, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getItemTip', function() {
      it('should call getItemTip successfully', function(done) {

        var postBody = null;

        var pathParams = {
        'project_id': sampleStrParam,
        'item_id': sampleStrParam
        };
        var queryParams = {
        };
        var headerParams = {
        };
        var formParams = {
        };

        var contentTypes = ['application/vnd.api+json'];
        var accepts = ['application/vnd.api+json', 'application/json'];
        var returnType = Version;

        mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/items/{item_id}/tip', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getItemTip(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getItemVersions', function() {
      it('should call getItemVersions successfully', function(done) {
        var opts = {};
        var postBody = null;

        var pathParams = {
        'project_id': sampleStrParam,
        'item_id': sampleStrParam
        };
        var queryParams = {
        'filter[type]': instance.apiClient.buildCollectionParam(opts['filterType'], 'csv'),
        'filter[id]': instance.apiClient.buildCollectionParam(opts['filterId'], 'csv'),
        'filter[extension.type]': instance.apiClient.buildCollectionParam(opts['filterExtensionType'], 'csv'),
        'filter[versionNumber]': instance.apiClient.buildCollectionParam(opts['filterVersionNumber'], 'csv'),
        'page[number]': opts['pageNumber'],
        'page[limit]': opts['pageLimit']
        };
        var headerParams = {
        };
        var formParams = {
        };

        var contentTypes = ['application/vnd.api+json'];
        var accepts = ['application/vnd.api+json', 'application/json'];
        var returnType = Versions;

        mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/items/{item_id}/versions', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getItemVersions(sampleStrParam, sampleStrParam, opts, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('postItem', function() {
      it('should call postItem successfully', function(done) {

        var postBody = sampleStrParam;

        var pathParams = {
        'project_id': sampleStrParam
        };
        var queryParams = {
        };
        var headerParams = {
        };
        var formParams = {
        };

        var contentTypes = ['application/vnd.api+json'];
        var accepts = ['application/vnd.api+json', 'application/json'];
        var returnType = ItemCreated;

        mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/items', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.postItem(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('postItemRelationshipsRef', function() {
      it('should call postItemRelationshipsRef successfully', function(done) {

        var postBody = sampleStrParam;

        var pathParams = {
        'project_id': sampleStrParam,
        'item_id': sampleStrParam
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

        mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/items/{item_id}/relationships/refs', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.postItemRelationshipsRef(sampleStrParam, sampleStrParam, sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
  });

}());
