(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["ng-table"] = factory(require("angular"));
	else
		root["ng-table"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var angular = __webpack_require__(/*! angular */ 0);
var data_1 = __webpack_require__(/*! ./data */ 3);
var grouping_1 = __webpack_require__(/*! ./grouping */ 37);
var ngTableDefaults_1 = __webpack_require__(/*! ./ngTableDefaults */ 7);
var ngTableSettings_1 = __webpack_require__(/*! ./ngTableSettings */ 10);
var ngTableParams_1 = __webpack_require__(/*! ./ngTableParams */ 9);
var ngTableEventsChannel_1 = __webpack_require__(/*! ./ngTableEventsChannel */ 8);
var ngTableCoreModule = angular.module('ngTable-core', [])
    .provider('ngTableDefaultGetData', data_1.NgTableDefaultGetDataProvider)
    .factory('ngTableDefaultGetGroups', grouping_1.ngTableDefaultGetGroups)
    .value('ngTableDefaults', ngTableDefaults_1.ngTableDefaults)
    .service('ngTableEventsChannel', ngTableEventsChannel_1.NgTableEventsChannel)
    .service('ngTableSettings', ngTableSettings_1.NgTableSettings)
    .run(ngTableParams_1.NgTableParams.init);
exports.ngTableCoreModule = ngTableCoreModule;
// note: if you are using ES6 or typescript prefer:
// import { NgTableParams } from 'ng-table';
ngTableCoreModule.value('NgTableParams', ngTableParams_1.NgTableParams);
var ngTableDefaults_2 = __webpack_require__(/*! ./ngTableDefaults */ 7);
exports.IDefaults = ngTableDefaults_2.IDefaults;
__export(__webpack_require__(/*! ./ngTableEventsChannel */ 8));
var ngTableSettings_2 = __webpack_require__(/*! ./ngTableSettings */ 10);
exports.ISettings = ngTableSettings_2.ISettings;
__export(__webpack_require__(/*! ./ngTableParams */ 9));
__export(__webpack_require__(/*! ./data */ 3));
__export(__webpack_require__(/*! ./filtering */ 36));
__export(__webpack_require__(/*! ./grouping/publicExports */ 39));
__export(__webpack_require__(/*! ./paging */ 40));
__export(__webpack_require__(/*! ./sorting */ 41));


/***/ },
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./src/browser/index.ts ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var angular = __webpack_require__(/*! angular */ 0);
var ngTable_directive_1 = __webpack_require__(/*! ./ngTable.directive */ 13);
var ngTableColumn_1 = __webpack_require__(/*! ./ngTableColumn */ 14);
var ngTableColumnsBinding_directive_1 = __webpack_require__(/*! ./ngTableColumnsBinding.directive */ 15);
var ngTableController_1 = __webpack_require__(/*! ./ngTableController */ 16);
exports.NgTableController = ngTableController_1.NgTableController;
var ngTableDynamic_directive_1 = __webpack_require__(/*! ./ngTableDynamic.directive */ 17);
var ngTableFilterConfig_1 = __webpack_require__(/*! ./ngTableFilterConfig */ 18);
exports.NgTableFilterConfigProvider = ngTableFilterConfig_1.NgTableFilterConfigProvider;
exports.NgTableFilterConfig = ngTableFilterConfig_1.NgTableFilterConfig;
var ngTableFilterRow_directive_1 = __webpack_require__(/*! ./ngTableFilterRow.directive */ 19);
var ngTableFilterRowController_1 = __webpack_require__(/*! ./ngTableFilterRowController */ 20);
var ngTableGroupRow_directive_1 = __webpack_require__(/*! ./ngTableGroupRow.directive */ 21);
var ngTableGroupRowController_1 = __webpack_require__(/*! ./ngTableGroupRowController */ 22);
var ngTablePagination_directive_1 = __webpack_require__(/*! ./ngTablePagination.directive */ 23);
var ngTableSelectFilterDs_directive_1 = __webpack_require__(/*! ./ngTableSelectFilterDs.directive */ 24);
var ngTableSorterRow_directive_1 = __webpack_require__(/*! ./ngTableSorterRow.directive */ 25);
var ngTableSorterRowController_1 = __webpack_require__(/*! ./ngTableSorterRowController */ 26);
__webpack_require__(/*! ./filters/number.html */ 43);
__webpack_require__(/*! ./filters/select.html */ 45);
__webpack_require__(/*! ./filters/select-multiple.html */ 44);
__webpack_require__(/*! ./filters/text.html */ 46);
__webpack_require__(/*! ./pager.html */ 49);
__webpack_require__(/*! ./header.html */ 48);
var ngTableBrowserModule = angular.module('ngTable-browser', [])
    .directive('ngTable', ngTable_directive_1.ngTable)
    .service('ngTableColumn', ngTableColumn_1.NgTableColumn)
    .directive('ngTableColumnsBinding', ngTableColumnsBinding_directive_1.ngTableColumnsBinding)
    .controller('ngTableController', ngTableController_1.NgTableController)
    .directive('ngTableDynamic', ngTableDynamic_directive_1.ngTableDynamic)
    .provider('ngTableFilterConfig', ngTableFilterConfig_1.NgTableFilterConfigProvider)
    .directive('ngTableFilterRow', ngTableFilterRow_directive_1.ngTableFilterRow)
    .controller('ngTableFilterRowController', ngTableFilterRowController_1.NgTableFilterRowController)
    .directive('ngTableGroupRow', ngTableGroupRow_directive_1.ngTableGroupRow)
    .controller('ngTableGroupRowController', ngTableGroupRowController_1.NgTableGroupRowController)
    .directive('ngTablePagination', ngTablePagination_directive_1.ngTablePagination)
    .directive('ngTableSelectFilterDs', ngTableSelectFilterDs_directive_1.ngTableSelectFilterDs)
    .directive('ngTableSorterRow', ngTableSorterRow_directive_1.ngTableSorterRow)
    .controller('ngTableSorterRowController', ngTableSorterRowController_1.NgTableSorterRowController);
exports.ngTableBrowserModule = ngTableBrowserModule;
__export(__webpack_require__(/*! ./public-interfaces */ 27));


/***/ },
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./src/core/data/index.ts ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./dataSettings */ 28));
__export(__webpack_require__(/*! ./getData */ 29));
__export(__webpack_require__(/*! ./interceptor */ 30));
__export(__webpack_require__(/*! ./ngTableDefaultGetData */ 31));
__export(__webpack_require__(/*! ./results */ 32));


/***/ },
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./src/core/grouping/getGroup.ts ***!
  \***************************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./src/core/grouping/groupSettings.ts ***!
  \********************************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./src/core/grouping/groupingFunc.ts ***!
  \*******************************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./src/core/ngTableDefaults.ts ***!
  \*************************************/
/***/ function(module, exports) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
/**
 * Default values for ngTable
 */
exports.ngTableDefaults = {
    params: {},
    settings: {}
};


/***/ },
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./src/core/ngTableEventsChannel.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var ng1 = __webpack_require__(/*! angular */ 0);
var NgTableEventsChannel = (function () {
    function NgTableEventsChannel($rootScope) {
        this.$rootScope = $rootScope;
        var events = this;
        events = this.addTableParamsEvent('afterCreated', events);
        events = this.addTableParamsEvent('afterReloadData', events);
        events = this.addTableParamsEvent('datasetChanged', events);
        events = this.addTableParamsEvent('pagesChanged', events);
        events = this.addTableParamsEvent('afterDataFiltered', events);
        events = this.addTableParamsEvent('afterDataSorted', events);
    }
    NgTableEventsChannel.prototype.addTableParamsEvent = function (eventName, target) {
        var fnName = eventName.charAt(0).toUpperCase() + eventName.substring(1);
        var event = (_a = {},
            _a['on' + fnName] = this.createEventSubscriptionFn(eventName),
            _a['publish' + fnName] = this.createPublishEventFn(eventName),
            _a
        );
        return ng1.extend(target, event);
        var _a;
    };
    NgTableEventsChannel.prototype.createPublishEventFn = function (eventName) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            (_a = _this.$rootScope).$broadcast.apply(_a, ['ngTable:' + eventName].concat(args));
            var _a;
        };
    };
    NgTableEventsChannel.prototype.createEventSubscriptionFn = function (eventName) {
        var _this = this;
        return function (handler, eventSelectorOrScope, eventSelector) {
            var actualEvtSelector;
            var scope = _this.$rootScope;
            if (isScopeLike(eventSelectorOrScope)) {
                scope = eventSelectorOrScope;
                actualEvtSelector = createEventSelectorFn(eventSelector);
            }
            else {
                actualEvtSelector = createEventSelectorFn(eventSelectorOrScope);
            }
            return scope.$on('ngTable:' + eventName, function (event, params) {
                var eventArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    eventArgs[_i - 2] = arguments[_i];
                }
                // don't send events published by the internal NgTableParams created by ngTableController
                if (params.isNullInstance)
                    return;
                var fnArgs = [params].concat(eventArgs);
                if (actualEvtSelector.apply(this, fnArgs)) {
                    handler.apply(this, fnArgs);
                }
            });
        };
        function createEventSelectorFn(eventSelector) {
            if (!eventSelector) {
                return function (publisher) { return true; };
            }
            else if (isEventSelectorFunc(eventSelector)) {
                return eventSelector;
            }
            else {
                // shorthand for subscriber to only receive events from a specific publisher instance
                return function (publisher) { return publisher === eventSelector; };
            }
        }
        function isEventSelectorFunc(val) {
            return typeof val === 'function';
        }
        function isScopeLike(val) {
            return val && typeof val.$new === 'function';
        }
    };
    NgTableEventsChannel.$inject = ['$rootScope'];
    return NgTableEventsChannel;
}());
exports.NgTableEventsChannel = NgTableEventsChannel;


/***/ },
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/core/ngTableParams.ts ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var ng1 = __webpack_require__(/*! angular */ 0);
var util_1 = __webpack_require__(/*! ./util */ 11);
/**
 * @private
 */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Parameters manager for an ngTable directive
 */
var NgTableParams = (function () {
    function NgTableParams(baseParameters, baseSettings) {
        var _this = this;
        /**
         * The page of data rows currently being displayed in the table
         */
        this.data = [];
        this.defaultSettings = NgTableParams.ngTableSettings.createDefaults();
        this.isCommittedDataset = false;
        this.initialEvents = [];
        this._params = {
            page: 1,
            count: 10,
            filter: {},
            sorting: {},
            group: {}
        };
        this._settings = this.defaultSettings;
        // the ngTableController "needs" to create a dummy/null instance and it's important to know whether an instance
        // is one of these
        if (typeof baseParameters === "boolean") {
            this.isNullInstance = true;
        }
        this.reloadPages = (function () {
            var currentPages;
            return function () {
                var oldPages = currentPages;
                var newPages = _this.generatePagesArray(_this.page(), _this.total(), _this.count());
                if (!ng1.equals(oldPages, newPages)) {
                    currentPages = newPages;
                    NgTableParams.ngTableEventsChannel.publishPagesChanged(_this, newPages, oldPages);
                }
            };
        })();
        ng1.extend(this._params, NgTableParams.ngTableDefaults.params);
        this.settings(baseSettings);
        this.parameters(baseParameters, true);
        NgTableParams.ngTableEventsChannel.publishAfterCreated(this);
        // run events during construction after the initial create event. That way a consumer
        // can subscribe to all events for a table without "dropping" an event
        ng1.forEach(this.initialEvents, function (event) {
            event();
        });
        this.initialEvents = null;
    }
    NgTableParams.prototype.count = function (count) {
        // reset to first page because can be blank page
        return count !== undefined ? this.parameters({
            'count': count,
            'page': 1
        }) : this._params.count;
    };
    NgTableParams.prototype.filter = function (filter) {
        if (filter != null && typeof filter === 'object') {
            return this.parameters({
                'filter': filter,
                'page': 1
            });
        }
        else if (filter === true) {
            var keys = Object.keys(this._params.filter);
            var significantFilter = {};
            for (var i = 0; i < keys.length; i++) {
                var filterValue = this._params.filter[keys[i]];
                if (filterValue != null && filterValue !== '') {
                    significantFilter[keys[i]] = filterValue;
                }
            }
            return significantFilter;
        }
        else {
            return this._params.filter;
        }
    };
    /**
     * Generate array of pages.
     * When no arguments supplied, the current parameter state of this `NgTableParams` instance will be used
     * @param currentPage Which page must be active
     * @param totalItems  Total quantity of items
     * @param pageSize    Quantity of items on page
     * @param maxBlocks   Quantity of blocks for pagination
     * @returns Array of pages
     */
    NgTableParams.prototype.generatePagesArray = function (currentPage, totalItems, pageSize, maxBlocks) {
        if (!arguments.length) {
            currentPage = this.page();
            totalItems = this.total();
            pageSize = this.count();
        }
        var maxPage, maxPivotPages, minPage, numPages;
        maxBlocks = maxBlocks && maxBlocks < 6 ? 6 : maxBlocks;
        var pages = [];
        numPages = Math.ceil(totalItems / pageSize);
        if (numPages > 1) {
            pages.push({
                type: 'prev',
                number: Math.max(1, currentPage - 1),
                active: currentPage > 1
            });
            pages.push({
                type: 'first',
                number: 1,
                active: currentPage > 1,
                current: currentPage === 1
            });
            maxPivotPages = Math.round((this._settings.paginationMaxBlocks - this._settings.paginationMinBlocks) / 2);
            minPage = Math.max(2, currentPage - maxPivotPages);
            maxPage = Math.min(numPages - 1, currentPage + maxPivotPages * 2 - (currentPage - minPage));
            minPage = Math.max(2, minPage - (maxPivotPages * 2 - (maxPage - minPage)));
            var i = minPage;
            while (i <= maxPage) {
                if ((i === minPage && i !== 2) || (i === maxPage && i !== numPages - 1)) {
                    pages.push({
                        type: 'more',
                        active: false
                    });
                }
                else {
                    pages.push({
                        type: 'page',
                        number: i,
                        active: currentPage !== i,
                        current: currentPage === i
                    });
                }
                i++;
            }
            pages.push({
                type: 'last',
                number: numPages,
                active: currentPage !== numPages,
                current: currentPage === numPages
            });
            pages.push({
                type: 'next',
                number: Math.min(numPages, currentPage + 1),
                active: currentPage < numPages
            });
        }
        return pages;
    };
    NgTableParams.prototype.group = function (group, sortDirection) {
        if (group === undefined) {
            return this._params.group;
        }
        var newParameters = {
            page: 1
        };
        if (util_1.isGroupingFun(group) && sortDirection !== undefined) {
            group.sortDirection = sortDirection;
            newParameters.group = group;
        }
        else if (typeof group === 'string' && sortDirection !== undefined) {
            newParameters.group = (_a = {}, _a[group] = sortDirection, _a);
        }
        else {
            newParameters.group = group;
        }
        this.parameters(newParameters);
        return this;
        var _a;
    };
    /**
     * Returns true when an attempt to `reload` the current `parameter` values have resulted in a failure.
     * This method will continue to return true until the `reload` is successfully called or when the
     * `parameter` values have changed
     */
    NgTableParams.prototype.hasErrorState = function () {
        return !!(this.errParamsMemento && ng1.equals(this.errParamsMemento, this.createComparableParams()));
    };
    /**
     * Returns true if `filter` has significant filter value(s) (any value except null, undefined, or empty string),
     * otherwise false
     */
    NgTableParams.prototype.hasFilter = function () {
        return Object.keys(this.filter(true)).length > 0;
    };
    /**
     * Return true when a change to `filters` require the `reload` method
     * to be run so as to ensure the data presented to the user reflects these filters
     */
    NgTableParams.prototype.hasFilterChanges = function () {
        var previousFilter = (this.prevParamsMemento && this.prevParamsMemento.params.filter);
        return !ng1.equals((this._params.filter), previousFilter) || this.hasGlobalSearchFieldChanges();
    };
    NgTableParams.prototype.hasGroup = function (group, sortDirection) {
        if (group == null) {
            return util_1.isGroupingFun(this._params.group) || Object.keys(this._params.group).length > 0;
        }
        if (util_1.isGroupingFun(group)) {
            if (sortDirection == null) {
                return this._params.group === group;
            }
            else {
                return this._params.group === group && group.sortDirection === sortDirection;
            }
        }
        else {
            if (sortDirection == null) {
                return Object.keys(this._params.group).indexOf(group) !== -1;
            }
            else {
                return this._params.group[group] === sortDirection;
            }
        }
    };
    /**
     * Return true when a change to this instance should require the `reload` method
     * to be run so as to ensure the data rows presented to the user reflects the current state.
     *
     * Note that this method will return false when the `reload` method has run but fails. In this case
     * `hasErrorState` will return true.
     *
     * The built-in `ngTable` directives will watch for when this function returns true and will then call
     * the `reload` method to load its data rows
     */
    NgTableParams.prototype.isDataReloadRequired = function () {
        // note: using != as want to treat null and undefined the same
        return !this.isCommittedDataset || !ng1.equals(this.createComparableParams(), this.prevParamsMemento)
            || this.hasGlobalSearchFieldChanges();
    };
    /**
     * Returns true if sorting by the field supplied. Where direction supplied
     * the field must also be sorted by that direction to return true
     */
    NgTableParams.prototype.isSortBy = function (field, direction) {
        if (direction !== undefined) {
            return this._params.sorting[field] !== undefined && this._params.sorting[field] == direction;
        }
        else {
            return this._params.sorting[field] !== undefined;
        }
    };
    /**
     * Returns sorting values in a format that can be consumed by the angular `$orderBy` filter service
     */
    NgTableParams.prototype.orderBy = function () {
        return util_1.convertSortToOrderBy(this._params.sorting);
    };
    NgTableParams.prototype.page = function (page) {
        return page !== undefined ? this.parameters({
            'page': page
        }) : this._params.page;
    };
    NgTableParams.prototype.parameters = function (newParameters, parseParamsFromUrl) {
        parseParamsFromUrl = parseParamsFromUrl || false;
        if (typeof newParameters !== undefined) {
            for (var key in newParameters) {
                var value = newParameters[key];
                if (parseParamsFromUrl && key.indexOf('[') >= 0) {
                    var keys = key.split(/\[(.*)\]/).reverse();
                    var lastKey = '';
                    for (var i = 0, len = keys.length; i < len; i++) {
                        var name = keys[i];
                        if (name !== '') {
                            var v = value;
                            value = {};
                            value[lastKey = name] = (isNumber(v) ? parseFloat(v) : v);
                        }
                    }
                    if (lastKey === 'sorting') {
                        this._params[lastKey] = {};
                    }
                    this._params[lastKey] = ng1.extend(this._params[lastKey] || {}, value[lastKey]);
                }
                else {
                    if (key === 'group') {
                        this._params[key] = this.parseGroup(newParameters[key]);
                    }
                    else {
                        this._params[key] = (isNumber(newParameters[key]) ? parseFloat(newParameters[key]) : newParameters[key]);
                    }
                }
            }
            this.log('ngTable: set parameters', this._params);
            return this;
        }
        return this._params;
    };
    /**
     * Trigger a reload of the data rows
     */
    NgTableParams.prototype.reload = function () {
        var _this = this;
        var pData = null;
        this._settings.$loading = true;
        this.prevParamsMemento = ng1.copy(this.createComparableParams());
        this.isCommittedDataset = true;
        if (this.hasGroup()) {
            pData = this.runInterceptorPipeline(NgTableParams.$q.when(this._settings.getGroups(this)));
        }
        else {
            var fn = this._settings.getData;
            pData = this.runInterceptorPipeline(NgTableParams.$q.when(fn(this)));
        }
        this.log('ngTable: reload data');
        var oldData = this.data;
        return pData.then(function (data) {
            _this._settings.$loading = false;
            _this.errParamsMemento = null;
            _this.data = data;
            // note: I think it makes sense to publish this event even when data === oldData
            // subscribers can always set a filter to only receive the event when data !== oldData
            NgTableParams.ngTableEventsChannel.publishAfterReloadData(_this, data, oldData);
            _this.reloadPages();
            return data;
        }).catch(function (reason) {
            _this.errParamsMemento = _this.prevParamsMemento;
            // "rethrow"
            return NgTableParams.$q.reject(reason);
        });
    };
    NgTableParams.prototype.settings = function (newSettings) {
        var _this = this;
        if (ng1.isDefined(newSettings)) {
            var settings = NgTableParams.ngTableSettings.merge(this._settings, newSettings);
            var originalDataset_1 = this._settings.dataset;
            this._settings = settings;
            // note: using != as want null and undefined to be treated the same
            var hasDatasetChanged = newSettings.hasOwnProperty('dataset') && (newSettings.dataset != originalDataset_1);
            if (hasDatasetChanged) {
                if (this.isCommittedDataset) {
                    this.page(1); // reset page as a new dataset has been supplied
                }
                this.isCommittedDataset = false;
                var fireEvent = function () {
                    NgTableParams.ngTableEventsChannel.publishDatasetChanged(_this, newSettings.dataset, originalDataset_1);
                };
                if (this.initialEvents) {
                    this.initialEvents.push(fireEvent);
                }
                else {
                    fireEvent();
                }
            }
            this.log('ngTable: set settings', this._settings);
            return this;
        }
        return this._settings;
    };
    NgTableParams.prototype.sorting = function (sorting, direction) {
        if (typeof sorting === 'string') {
            this.parameters({
                'sorting': (_a = {}, _a[sorting] = direction, _a)
            });
            return this;
        }
        return sorting !== undefined ? this.parameters({
            'sorting': sorting
        }) : this._params.sorting;
        var _a;
    };
    NgTableParams.prototype.total = function (total) {
        return total !== undefined ? this.settings({
            'total': total
        }) : this._settings.total;
    };
    /**
     * Returns the current parameter values uri-encoded. Set `asString` to
     * true for the parameters to be returned as an array of strings of the form 'paramName=value'
     * otherwise parameters returned as a key-value object
     */
    NgTableParams.prototype.url = function (asString) {
        // this function is an example of Typescript gone bad!!
        asString = asString || false;
        var pairs = (asString ? [] : {});
        for (var key in this._params) {
            if (this._params.hasOwnProperty(key)) {
                var item = this._params[key], name = encodeURIComponent(key);
                if (typeof item === "object") {
                    for (var subkey in item) {
                        if (isSignificantValue(item[subkey], key)) {
                            var pname = name + "[" + encodeURIComponent(subkey) + "]";
                            collectValue(item[subkey], pname);
                        }
                    }
                }
                else if (!ng1.isFunction(item) && isSignificantValue(item, key)) {
                    collectValue(item, name);
                }
            }
        }
        return pairs;
        function collectValue(value, key) {
            if (isArray(pairs)) {
                pairs.push(key + "=" + encodeURIComponent(value));
            }
            else {
                pairs[key] = encodeURIComponent(value);
            }
        }
        function isArray(pairs) {
            return asString;
        }
        function isSignificantValue(value, key) {
            return key === "group" ? true : typeof value !== undefined && value !== "";
        }
    };
    NgTableParams.prototype.createComparableParams = function () {
        var group = this._params.group;
        return {
            params: this._params,
            groupSortDirection: util_1.isGroupingFun(group) ? group.sortDirection : undefined
        };
    };
    NgTableParams.prototype.hasGlobalSearchFieldChanges = function () {
        var currentVal = (this._params.filter && this._params.filter['$']);
        var previousVal = (this.prevParamsMemento && this.prevParamsMemento.params.filter && this.prevParamsMemento.params.filter['$']);
        return !ng1.equals(currentVal, previousVal);
    };
    NgTableParams.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this._settings.debugMode && NgTableParams.$log.debug) {
            (_a = NgTableParams.$log).debug.apply(_a, args);
        }
        var _a;
    };
    NgTableParams.prototype.parseGroup = function (group) {
        var defaultSort = this._settings.groupOptions && this._settings.groupOptions.defaultSort;
        if (!group) {
            return group;
        }
        else if (util_1.isGroupingFun(group)) {
            if (group.sortDirection == null) {
                group.sortDirection = defaultSort;
            }
            return group;
        }
        else if (typeof group === 'object') {
            for (var key in group) {
                if (group[key] == null) {
                    group[key] = defaultSort;
                }
            }
            return group;
        }
        else {
            return (_a = {},
                _a[group] = defaultSort,
                _a
            );
        }
        var _a;
    };
    NgTableParams.prototype.runInterceptorPipeline = function (fetchedData) {
        var _this = this;
        var interceptors = this._settings.interceptors || [];
        return interceptors.reduce(function (result, interceptor) {
            var thenFn = (interceptor.response && interceptor.response.bind(interceptor)) || NgTableParams.$q.when;
            var rejectFn = (interceptor.responseError && interceptor.responseError.bind(interceptor)) || NgTableParams.$q.reject;
            return result.then(function (data) {
                return thenFn(data, _this);
            }, function (reason) {
                return rejectFn(reason, _this);
            });
        }, fetchedData);
    };
    NgTableParams.init = function ($q, $log, ngTableDefaults, ngTableEventsChannel, ngTableSettings) {
        NgTableParams.$q = $q;
        NgTableParams.$log = $log;
        NgTableParams.ngTableDefaults = ngTableDefaults;
        NgTableParams.ngTableEventsChannel = ngTableEventsChannel;
        NgTableParams.ngTableSettings = ngTableSettings;
    };
    return NgTableParams;
}());
exports.NgTableParams = NgTableParams;
NgTableParams.init.$inject = ['$q', '$log', 'ngTableDefaults', 'ngTableEventsChannel', 'ngTableSettings'];


/***/ },
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./src/core/ngTableSettings.ts ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ng1 = __webpack_require__(/*! angular */ 0);
/**
 * @private
 */
var NgTableSettings = (function () {
    function NgTableSettings(ngTableDefaults, ngTableDefaultGetData, ngTableDefaultGetGroups) {
        var _this = this;
        this.ngTableDefaults = ngTableDefaults;
        this.ngTableDefaultGetData = ngTableDefaultGetData;
        this.ngTableDefaultGetGroups = ngTableDefaultGetGroups;
        this.defaults = {
            $loading: false,
            dataset: null,
            total: 0,
            defaultSort: 'desc',
            counts: [10, 25, 50, 100],
            filterOptions: {
                filterComparator: undefined,
                filterDelay: 500,
                filterDelayThreshold: 10000,
                filterFilterName: undefined,
                filterFn: undefined,
                filterLayout: 'stack'
            },
            getData: function (params) {
                return _this.ngTableDefaultGetData(params.settings().dataset, params);
            },
            getGroups: this.ngTableDefaultGetGroups,
            groupOptions: {
                defaultSort: 'asc',
                isExpanded: true
            },
            interceptors: [],
            paginationMaxBlocks: 11,
            paginationMinBlocks: 5,
            sortingIndicator: 'span'
        };
    }
    NgTableSettings.prototype.createDefaults = function () {
        return this.merge(this.defaults, this.ngTableDefaults.settings);
    };
    NgTableSettings.prototype.merge = function (existing, newSettings) {
        newSettings = ng1.extend({}, newSettings);
        if (newSettings.filterOptions) {
            newSettings.filterOptions = ng1.extend({}, existing.filterOptions || {}, newSettings.filterOptions);
        }
        if (newSettings.groupOptions) {
            newSettings.groupOptions = ng1.extend({}, existing.groupOptions || {}, newSettings.groupOptions);
        }
        if (ng1.isArray(newSettings.dataset)) {
            //auto-set the total from passed in dataset
            newSettings.total = newSettings.dataset.length;
        }
        var results = ng1.extend({}, existing, newSettings);
        if (ng1.isArray(newSettings.dataset)) {
            this.optimizeFilterDelay(results);
        }
        return ng1.extend({}, existing, newSettings);
    };
    NgTableSettings.prototype.optimizeFilterDelay = function (settings) {
        // don't debounce by default filter input when working with small synchronous datasets
        if (settings.filterOptions.filterDelay === this.defaults.filterOptions.filterDelay &&
            settings.total <= settings.filterOptions.filterDelayThreshold &&
            settings.getData === this.defaults.getData) {
            settings.filterOptions.filterDelay = 0;
        }
    };
    NgTableSettings.$inject = ['ngTableDefaults', 'ngTableDefaultGetData', 'ngTableDefaultGetGroups'];
    return NgTableSettings;
}());
exports.NgTableSettings = NgTableSettings;


/***/ },
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./src/core/util.ts ***!
  \**************************/
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * @private
 */
function convertSortToOrderBy(sorting) {
    var result = [];
    for (var column in sorting) {
        result.push((sorting[column] === "asc" ? "+" : "-") + column);
    }
    return result;
}
exports.convertSortToOrderBy = convertSortToOrderBy;
/**
 * @private
 */
function isGroupingFun(val) {
    return typeof val === 'function';
}
exports.isGroupingFun = isGroupingFun;


/***/ },
/* 12 */,
/* 13 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./src/browser/ngTable.directive.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ng1 = __webpack_require__(/*! angular */ 0);
ngTable.$inject = ['$q', '$parse'];
/**
 * Directive that instantiates {@link NgTableController NgTableController}.
 * @ngdoc directive
 * @name ngTable
 * @example
 *
 * ```html
 * <table ng-table="$ctrl.tableParams" show-filter="true" class="table table-bordered">
 *  <tr ng-repeat="user in $data">
 *      <td data-title="'Name'" sortable="'name'" filter="{ 'name': 'text' }">
 *          {{user.name}}
 *      </td>
 *      <td data-title="'Age'" sortable="'age'" filter="{ 'age': 'text' }">
 *          {{user.age}}
 *      </td>
 *  </tr>
 * </table>
 * ```
 */
function ngTable($q, $parse) {
    return {
        restrict: 'A',
        priority: 1001,
        scope: true,
        controller: 'ngTableController',
        compile: function (element) {
            var columns = [], i = 0, dataRow, groupRow;
            var rows = [];
            ng1.forEach(element.find('tr'), function (tr) {
                rows.push(ng1.element(tr));
            });
            dataRow = rows.filter(function (tr) { return !tr.hasClass('ng-table-group'); })[0];
            groupRow = rows.filter(function (tr) { return tr.hasClass('ng-table-group'); })[0];
            if (!dataRow) {
                return undefined;
            }
            ng1.forEach(dataRow.find('td'), function (item) {
                var el = ng1.element(item);
                if (el.attr('ignore-cell') && 'true' === el.attr('ignore-cell')) {
                    return;
                }
                var getAttrValue = function (attr) {
                    return el.attr('x-data-' + attr) || el.attr('data-' + attr) || el.attr(attr);
                };
                var setAttrValue = function (attr, value) {
                    if (el.attr('x-data-' + attr)) {
                        el.attr('x-data-' + attr, value);
                    }
                    else if (el.attr('data' + attr)) {
                        el.attr('data' + attr, value);
                    }
                    else {
                        el.attr(attr, value);
                    }
                };
                var parsedAttribute = function (attr) {
                    var expr = getAttrValue(attr);
                    if (!expr) {
                        return undefined;
                    }
                    var localValue;
                    var getter = function (context) {
                        if (localValue !== undefined) {
                            return localValue;
                        }
                        return $parse(expr)(context);
                    };
                    getter.assign = function ($scope, value) {
                        var parsedExpr = $parse(expr);
                        if (parsedExpr.assign) {
                            // we should be writing back to the parent scope as this is where the expression
                            // came from
                            parsedExpr.assign($scope.$parent, value);
                        }
                        else {
                            localValue = value;
                        }
                    };
                    return getter;
                };
                var titleExpr = getAttrValue('title-alt') || getAttrValue('title');
                if (titleExpr) {
                    el.attr('data-title-text', '{{' + titleExpr + '}}'); // this used in responsive table
                }
                // NOTE TO MAINTAINERS: if you add extra fields to a $column be sure to extend ngTableColumn with
                // a corresponding "safe" default
                columns.push({
                    id: i++,
                    title: parsedAttribute('title'),
                    titleAlt: parsedAttribute('title-alt'),
                    headerTitle: parsedAttribute('header-title'),
                    sortable: parsedAttribute('sortable'),
                    'class': parsedAttribute('header-class'),
                    filter: parsedAttribute('filter'),
                    groupable: parsedAttribute('groupable'),
                    headerTemplateURL: parsedAttribute('header'),
                    filterData: parsedAttribute('filter-data'),
                    show: el.attr("ng-if") ? parsedAttribute('ng-if') : undefined
                });
                if (groupRow || el.attr("ng-if")) {
                    // change ng-if to bind to our column definition which we know will be writable
                    // because this will potentially increase the $watch count, only do so if we already have an
                    // ng-if or when we definitely need to change visibility of the columns.
                    // currently only ngTableGroupRow directive needs to change visibility
                    setAttrValue('ng-if', '$columns[' + (columns.length - 1) + '].show(this)');
                }
            });
            return function (scope, element, attrs, controller) {
                scope.$columns = columns = controller.buildColumns(columns);
                controller.setupBindingsToInternalScope(attrs.ngTable);
                controller.loadFilterData(columns);
                controller.compileDirectiveTemplates();
            };
        }
    };
}
exports.ngTable = ngTable;


/***/ },
/* 14 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./src/browser/ngTableColumn.ts ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var ng1 = __webpack_require__(/*! angular */ 0);
/**
 * @private
 */
function isScopeLike(object) {
    return object != null && ng1.isFunction(object.$new);
}
/**
 * @private
 * Service to construct a $column definition used by {@link ngTable ngTable} directive
 */
var NgTableColumn = (function () {
    function NgTableColumn() {
    }
    /**
     * Creates a $column for use within a header template
     *
     * @param column the initial definition for $column to build
     * @param defaultScope the $scope to supply to the $column getter methods when not supplied by caller
     * @param columns a reference to the $columns array to make available on the context supplied to the
     * $column getter methods
     */
    NgTableColumn.prototype.buildColumn = function (column, defaultScope, columns) {
        // note: we're not modifying the original column object. This helps to avoid unintended side affects
        var extendedCol = Object.create(column);
        var defaults = this.createDefaults();
        var _loop_1 = function(prop) {
            if (extendedCol[prop] === undefined) {
                extendedCol[prop] = defaults[prop];
            }
            if (!ng1.isFunction(extendedCol[prop])) {
                // wrap raw field values with "getter" functions
                // - this is to ensure consistency with how ngTable.compile builds columns
                // - note that the original column object is being "proxied"; this is important
                //   as it ensure that any changes to the original object will be returned by the "getter"
                var getterSetter = function getterSetter() {
                    if (arguments.length === 1 && !isScopeLike(arguments[0])) {
                        getterSetter.assign(null, arguments[0]);
                    }
                    else {
                        return column[prop];
                    }
                };
                getterSetter.assign = function ($scope, value) {
                    column[prop] = value;
                };
                extendedCol[prop] = getterSetter;
            }
            // satisfy the arguments expected by the function returned by parsedAttribute in the ngTable directive
            var getterFn = extendedCol[prop];
            extendedCol[prop] = function () {
                if (arguments.length === 1 && !isScopeLike(arguments[0])) {
                    getterFn.assign(defaultScope, arguments[0]);
                }
                else {
                    var scope = arguments[0] || defaultScope;
                    var context = Object.create(scope);
                    ng1.extend(context, {
                        $column: extendedCol,
                        $columns: columns
                    });
                    return getterFn.call(column, context);
                }
            };
            if (getterFn.assign) {
                extendedCol[prop].assign = getterFn.assign;
            }
            else {
                var wrappedGetterFn_1 = extendedCol[prop];
                var localValue_1;
                var getterSetter = function getterSetter() {
                    if (arguments.length === 1 && !isScopeLike(arguments[0])) {
                        getterSetter.assign(null, arguments[0]);
                    }
                    else {
                        return localValue_1 != undefined ? localValue_1 : wrappedGetterFn_1.apply(extendedCol, arguments);
                    }
                };
                getterSetter.assign = function ($scope, value) {
                    localValue_1 = value;
                };
                extendedCol[prop] = getterSetter;
            }
        };
        for (var prop in defaults) {
            _loop_1(prop);
        }
        return extendedCol;
    };
    NgTableColumn.prototype.createDefaults = function () {
        return {
            'class': this.createGetterSetter(''),
            filter: this.createGetterSetter(false),
            groupable: this.createGetterSetter(false),
            filterData: ng1.noop,
            headerTemplateURL: this.createGetterSetter(false),
            headerTitle: this.createGetterSetter(''),
            sortable: this.createGetterSetter(false),
            show: this.createGetterSetter(true),
            title: this.createGetterSetter(''),
            titleAlt: this.createGetterSetter('')
        };
    };
    NgTableColumn.prototype.createGetterSetter = function (initialValue) {
        var value = initialValue;
        var getterSetter = function getterSetter() {
            if (arguments.length === 1 && !isScopeLike(arguments[0])) {
                getterSetter.assign(null, arguments[0]);
            }
            else {
                return value;
            }
        };
        getterSetter.assign = function ($scope, newValue) {
            value = newValue;
        };
        return getterSetter;
    };
    NgTableColumn.$inject = [];
    return NgTableColumn;
}());
exports.NgTableColumn = NgTableColumn;


/***/ },
/* 15 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./src/browser/ngTableColumnsBinding.directive.ts ***!
  \********************************************************/
/***/ function(module, exports) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
ngTableColumnsBinding.$inject = ["$parse"];
/**
 * One-way data binds the $columns array generated by ngTable/ngTableDynamic to the specified
 * expression.
 * This allows the $columns array created for the table to be accessed outside of the html table
 * markup.
 *
 * @ngdoc directive
 *
 * @example
 * ```html
 * <table ng-table="$ctrl.tableParams" class="table" ng-table-columns-binding="$ctlr.tableColumns">
 * ```
 */
function ngTableColumnsBinding($parse) {
    var directive = {
        restrict: 'A',
        link: linkFn
    };
    return directive;
    function linkFn($scope, $element, $attrs) {
        var setter = $parse($attrs.ngTableColumnsBinding).assign;
        if (setter) {
            $scope.$watch('$columns', function (newColumns) {
                var shallowClone = (newColumns || []).slice(0);
                setter($scope, shallowClone);
            });
        }
    }
}
exports.ngTableColumnsBinding = ngTableColumnsBinding;


/***/ },
/* 16 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./src/browser/ngTableController.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var ng1 = __webpack_require__(/*! angular */ 0);
var core_1 = __webpack_require__(/*! ../core */ 1);
/**
 * The controller for the {@link ngTable ngTable} and {@link ngTableDynamic ngTableDynamic} directives
 */
var NgTableController = (function () {
    function NgTableController($scope, $timeout, $parse, $compile, $attrs, $element, $document, ngTableColumn, ngTableEventsChannel) {
        this.$scope = $scope;
        this.$parse = $parse;
        this.$compile = $compile;
        this.$attrs = $attrs;
        this.$element = $element;
        this.$document = $document;
        this.ngTableColumn = ngTableColumn;
        this.ngTableEventsChannel = ngTableEventsChannel;
        var isFirstTimeLoad = true;
        $scope.$filterRow = { disabled: false };
        $scope.$loading = false;
        // until such times as the directive uses an isolated scope, we need to ensure that the check for
        // the params field only consults the "own properties" of the $scope. This is to avoid seeing the params
        // field on a $scope higher up in the prototype chain
        if (!$scope.hasOwnProperty("params")) {
            $scope.params = new core_1.NgTableParams(true);
        }
        this.delayFilter = (function () {
            var timer;
            return function (callback, ms) {
                $timeout.cancel(timer);
                timer = $timeout(callback, ms);
            };
        })();
        // watch for when a new NgTableParams is bound to the scope
        // CRITICAL: the watch must be for reference and NOT value equality; this is because NgTableParams maintains
        // the current data page as a field. Checking this for value equality would be terrible for performance
        // and potentially cause an error if the items in that array has circular references
        this.$scope.$watch('params', function (newParams, oldParams) {
            if (newParams === oldParams || !newParams) {
                return;
            }
            newParams.reload();
        }, false);
        this.subscribeToTableEvents();
    }
    Object.defineProperty(NgTableController.prototype, "hasVisibleFilterColumn", {
        get: function () {
            var _this = this;
            if (!this.$scope.$columns)
                return false;
            return this.some(this.$scope.$columns, function ($column) {
                return $column.show(_this.$scope) && !!$column.filter(_this.$scope);
            });
        },
        enumerable: true,
        configurable: true
    });
    NgTableController.prototype.onDataReloadStatusChange = function (newStatus /*, oldStatus*/) {
        if (!newStatus || this.$scope.params.hasErrorState()) {
            return;
        }
        var currentParams = this.$scope.params;
        var filterOptions = currentParams.settings().filterOptions;
        if (currentParams.hasFilterChanges()) {
            var applyFilter = function () {
                currentParams.page(1);
                currentParams.reload();
            };
            if (filterOptions.filterDelay) {
                this.delayFilter(applyFilter, filterOptions.filterDelay);
            }
            else {
                applyFilter();
            }
        }
        else {
            currentParams.reload();
        }
    };
    NgTableController.prototype.compileDirectiveTemplates = function () {
        if (!this.$element.hasClass('ng-table')) {
            this.$scope.templates = {
                header: (this.$attrs.templateHeader ? this.$attrs.templateHeader : 'ng-table/header.html'),
                pagination: (this.$attrs.templatePagination ? this.$attrs.templatePagination : 'ng-table/pager.html')
            };
            this.$element.addClass('ng-table');
            var headerTemplate = null;
            // $element.find('> thead').length === 0 doesn't work on jqlite
            var theadFound_1 = false;
            ng1.forEach(this.$element.children(), function (e) {
                if (e.tagName === 'THEAD') {
                    theadFound_1 = true;
                }
            });
            if (!theadFound_1) {
                headerTemplate = ng1.element('<thead ng-include="templates.header"></thead>', this.$document);
                this.$element.prepend(headerTemplate);
            }
            var paginationTemplate = ng1.element('<div ng-table-pagination="params" template-url="templates.pagination"></div>', this.$document);
            this.$element.after(paginationTemplate);
            if (headerTemplate) {
                this.$compile(headerTemplate)(this.$scope);
            }
            this.$compile(paginationTemplate)(this.$scope);
        }
    };
    NgTableController.prototype.loadFilterData = function ($columns) {
        var _this = this;
        ng1.forEach($columns, function ($column) {
            var result = $column.filterData(_this.$scope);
            if (!result) {
                delete $column.filterData;
                return undefined;
            }
            if (isPromiseLike(result)) {
                delete $column.filterData;
                return result.then(function (data) {
                    // our deferred can eventually return arrays, functions and objects
                    if (!ng1.isArray(data) && !ng1.isFunction(data) && !ng1.isObject(data)) {
                        // if none of the above was found - we just want an empty array
                        data = [];
                    }
                    $column.data = data;
                });
            }
            else {
                return $column.data = result;
            }
        });
        function isPromiseLike(val) {
            return val && typeof val === 'object' && typeof val.then === 'function';
        }
    };
    NgTableController.prototype.buildColumns = function (columns) {
        var _this = this;
        // todo: use strictNullChecks and remove guard clause
        var result = [];
        (columns || []).forEach(function (col) {
            result.push(_this.ngTableColumn.buildColumn(col, _this.$scope, result));
        });
        return result;
    };
    NgTableController.prototype.parseNgTableDynamicExpr = function (attr) {
        if (!attr || attr.indexOf(" with ") > -1) {
            var parts = attr.split(/\s+with\s+/);
            return {
                tableParams: parts[0],
                columns: parts[1]
            };
        }
        else {
            throw new Error('Parse error (expected example: ng-table-dynamic=\'tableParams with cols\')');
        }
    };
    NgTableController.prototype.setupBindingsToInternalScope = function (tableParamsExpr) {
        // note: this we're setting up watches to simulate angular's isolated scope bindings
        var _this = this;
        // note: is REALLY important to watch for a change to the ngTableParams *reference* rather than
        // $watch for value equivalence. This is because ngTableParams references the current page of data as
        // a field and it's important not to watch this
        this.$scope.$watch(tableParamsExpr, function (params) {
            if (params === undefined) {
                return;
            }
            _this.$scope.params = params;
        }, false);
        this.setupFilterRowBindingsToInternalScope();
        this.setupGroupRowBindingsToInternalScope();
    };
    NgTableController.prototype.setupFilterRowBindingsToInternalScope = function () {
        var _this = this;
        if (this.$attrs.showFilter) {
            this.$scope.$parent.$watch(this.$attrs.showFilter, function (value) {
                _this.$scope.show_filter = value;
            });
        }
        else {
            this.$scope.$watch(function () { return _this.hasVisibleFilterColumn; }, function (value) {
                _this.$scope.show_filter = value;
            });
        }
        if (this.$attrs.disableFilter) {
            this.$scope.$parent.$watch(this.$attrs.disableFilter, function (value) {
                _this.$scope.$filterRow.disabled = value;
            });
        }
    };
    NgTableController.prototype.setupGroupRowBindingsToInternalScope = function () {
        var _this = this;
        this.$scope.$groupRow = { show: false };
        if (this.$attrs.showGroup) {
            var showGroupGetter_1 = this.$parse(this.$attrs.showGroup);
            this.$scope.$parent.$watch(showGroupGetter_1, function (value) {
                _this.$scope.$groupRow.show = value;
            });
            if (showGroupGetter_1.assign) {
                // setup two-way databinding thus allowing ngTableGrowRow to assign to the showGroup expression
                this.$scope.$watch('$groupRow.show', function (value) {
                    showGroupGetter_1.assign(_this.$scope.$parent, value);
                });
            }
        }
        else {
            this.$scope.$watch('params.hasGroup()', function (newValue) {
                _this.$scope.$groupRow.show = newValue;
            });
        }
    };
    NgTableController.prototype.getVisibleColumns = function () {
        var _this = this;
        return (this.$scope.$columns || []).filter(function (c) {
            return c.show(_this.$scope);
        });
    };
    NgTableController.prototype.subscribeToTableEvents = function () {
        var _this = this;
        this.$scope.$watch('params.isDataReloadRequired()', function (newStatus /*, oldStatus*/) {
            _this.onDataReloadStatusChange(newStatus);
        });
        this.ngTableEventsChannel.onAfterReloadData(function (params, newDatapage) {
            var visibleColumns = _this.getVisibleColumns();
            if (params.hasGroup()) {
                _this.$scope.$groups = (newDatapage || []);
                _this.$scope.$groups.visibleColumnCount = visibleColumns.length;
            }
            else {
                _this.$scope.$data = (newDatapage || []);
                _this.$scope.$data.visibleColumnCount = visibleColumns.length;
            }
        }, this.$scope, function (publisher) { return _this.$scope.params === publisher; });
        this.ngTableEventsChannel.onPagesChanged(function (params, newPages) {
            _this.$scope.pages = newPages;
        }, this.$scope, function (publisher) { return _this.$scope.params === publisher; });
    };
    NgTableController.prototype.some = function (array, predicate) {
        var found = false;
        for (var i = 0; i < array.length; i++) {
            var obj = array[i];
            if (predicate(obj)) {
                found = true;
                break;
            }
        }
        return found;
    };
    NgTableController.$inject = [
        '$scope', '$timeout', '$parse', '$compile', '$attrs', '$element', '$document', 'ngTableColumn', 'ngTableEventsChannel'
    ];
    return NgTableController;
}());
exports.NgTableController = NgTableController;


/***/ },
/* 17 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./src/browser/ngTableDynamic.directive.ts ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var ng1 = __webpack_require__(/*! angular */ 0);
ngTableDynamic.$inject = [];
/**
 * A dynamic version of the {@link ngTable ngTable} directive that accepts a dynamic list of columns
 * definitions to render
 * @ngdoc directive
 *
 * @example
 * ```html
 * <table ng-table-dynamic="$ctrl.tableParams with $ctrl.cols" class="table">
 *  <tr ng-repeat="row in $data">
 *    <td ng-repeat="col in $columns">{{row[col.field]}}</td>
 *  </tr>
 * </table>
 * ```
 */
function ngTableDynamic() {
    return {
        restrict: 'A',
        priority: 1001,
        scope: true,
        controller: 'ngTableController',
        compile: function (tElement) {
            var row;
            // IE 8 fix :not(.ng-table-group) selector
            ng1.forEach(tElement.find('tr'), function (tr) {
                tr = ng1.element(tr);
                if (!tr.hasClass('ng-table-group') && !row) {
                    row = tr;
                }
            });
            if (!row) {
                return undefined;
            }
            ng1.forEach(row.find('td'), function (item) {
                var el = ng1.element(item);
                var getAttrValue = function (attr) {
                    return el.attr('x-data-' + attr) || el.attr('data-' + attr) || el.attr(attr);
                };
                // this used in responsive table
                var titleExpr = getAttrValue('title');
                if (!titleExpr) {
                    el.attr('data-title-text', '{{$columns[$index].titleAlt(this) || $columns[$index].title(this)}}');
                }
                var showExpr = el.attr('ng-if');
                if (!showExpr) {
                    el.attr('ng-if', '$columns[$index].show(this)');
                }
            });
            return function (scope, element, attrs, controller) {
                var expr = controller.parseNgTableDynamicExpr(attrs.ngTableDynamic);
                controller.setupBindingsToInternalScope(expr.tableParams);
                controller.compileDirectiveTemplates();
                scope.$watchCollection(expr.columns, function (newCols /*, oldCols*/) {
                    scope.$columns = controller.buildColumns(newCols);
                    controller.loadFilterData(scope.$columns);
                });
            };
        }
    };
}
exports.ngTableDynamic = ngTableDynamic;


/***/ },
/* 18 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./src/browser/ngTableFilterConfig.ts ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var ng1 = __webpack_require__(/*! angular */ 0);
/**
 * The angular provider used to configure the behaviour of the `NgTableFilterConfig` service.
 */
var NgTableFilterConfigProvider = (function () {
    function NgTableFilterConfigProvider($injector) {
        var _this = this;
        this.defaultConfig = {
            defaultBaseUrl: 'ng-table/filters/',
            defaultExt: '.html',
            aliasUrls: {}
        };
        this.$get = function () {
            return $injector.instantiate(NgTableFilterConfig, { config: ng1.copy(_this.config) });
        };
        this.$get.$inject = [];
        this.resetConfigs();
    }
    /**
     * Reset back to factory defaults the config values that `NgTableFilterConfig` service will use
     */
    NgTableFilterConfigProvider.prototype.resetConfigs = function () {
        this.config = this.defaultConfig;
    };
    /**
     * Set the config values used by `NgTableFilterConfig` service
     */
    NgTableFilterConfigProvider.prototype.setConfig = function (customConfig) {
        var mergeConfig = ng1.extend({}, this.config, customConfig);
        mergeConfig.aliasUrls = ng1.extend({}, this.config.aliasUrls, customConfig.aliasUrls);
        this.config = mergeConfig;
    };
    NgTableFilterConfigProvider.$inject = ['$injector'];
    return NgTableFilterConfigProvider;
}());
exports.NgTableFilterConfigProvider = NgTableFilterConfigProvider;
/**
 * Exposes configuration values and methods used to return the location of the html
 * templates used to render the filter row of an ng-table directive
 */
var NgTableFilterConfig = (function () {
    function NgTableFilterConfig(
        /**
         * Readonly copy of the final values used to configure the service.
         */
        config) {
        this.config = config;
    }
    /**
     * Return the url of the html filter template registered with the alias supplied
     */
    NgTableFilterConfig.prototype.getUrlForAlias = function (aliasName, filterKey) {
        return this.config.aliasUrls[aliasName] || this.config.defaultBaseUrl + aliasName + this.config.defaultExt;
    };
    /**
     * Return the url of the html filter template for the supplied definition and key.
     * For more information see the documentation for {@link IFilterTemplateMap}
     */
    NgTableFilterConfig.prototype.getTemplateUrl = function (filterDef, filterKey) {
        var filterName;
        if (typeof filterDef !== 'string') {
            filterName = filterDef.id;
        }
        else {
            filterName = filterDef;
        }
        if (filterName.indexOf('/') !== -1) {
            return filterName;
        }
        return this.getUrlForAlias(filterName, filterKey);
    };
    NgTableFilterConfig.$inject = ['config'];
    return NgTableFilterConfig;
}());
exports.NgTableFilterConfig = NgTableFilterConfig;


/***/ },
/* 19 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./src/browser/ngTableFilterRow.directive.ts ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var templateUrl = __webpack_require__(/*! ./filterRow.html */ 42);
ngTableFilterRow.$inject = [];
/**
 * directive that renders the filter header row for a table
 * @ngdoc directive
 * @example
 * ```html
 * <ng-table-filter-row></ng-table-filter-row>
 * ```
 */
function ngTableFilterRow() {
    var directive = {
        restrict: 'E',
        replace: true,
        templateUrl: templateUrl,
        scope: true,
        controller: 'ngTableFilterRowController',
        controllerAs: '$ctrl'
    };
    return directive;
}
exports.ngTableFilterRow = ngTableFilterRow;


/***/ },
/* 20 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./src/browser/ngTableFilterRowController.ts ***!
  \***************************************************/
/***/ function(module, exports) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
/**
 * Controller for the {@link ngTableFilterRow ngTableFilterRow} directive
 */
var NgTableFilterRowController = (function () {
    function NgTableFilterRowController($scope, ngTableFilterConfig) {
        this.config = ngTableFilterConfig;
        // todo: stop doing this. Why?
        // * scope inheritance makes it hard to know how supplies functions
        // * scope is not a concept in angular 2
        // make function available to filter templates
        $scope.getFilterPlaceholderValue = this.getFilterPlaceholderValue.bind(this);
    }
    NgTableFilterRowController.prototype.getFilterCellCss = function (filter, layout) {
        if (layout !== 'horizontal') {
            return 's12';
        }
        var size = Object.keys(filter).length;
        var width = parseInt((12 / size).toString(), 10);
        return 's' + width;
    };
    NgTableFilterRowController.prototype.getFilterPlaceholderValue = function (filterDef, filterKey) {
        if (typeof filterDef === 'string') {
            return '';
        }
        else {
            return filterDef.placeholder;
        }
    };
    NgTableFilterRowController.$inject = ['$scope', 'ngTableFilterConfig'];
    return NgTableFilterRowController;
}());
exports.NgTableFilterRowController = NgTableFilterRowController;


/***/ },
/* 21 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./src/browser/ngTableGroupRow.directive.ts ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var templateUrl = __webpack_require__(/*! ./groupRow.html */ 47);
ngTableGroupRow.$inject = [];
/**
 * directive that renders the group header row for a table
 * @ngdoc directive
 * @example
 * ```html
 * <ng-table-group-row></ng-table-group-row>
 * ```
 */
function ngTableGroupRow() {
    var directive = {
        restrict: 'E',
        replace: true,
        templateUrl: templateUrl,
        scope: true,
        controller: 'ngTableGroupRowController',
        controllerAs: '$ctrl'
    };
    return directive;
}
exports.ngTableGroupRow = ngTableGroupRow;


/***/ },
/* 22 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./src/browser/ngTableGroupRowController.ts ***!
  \**************************************************/
/***/ function(module, exports) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
/**
 * Controller for the {@link ngTableGroupRow ngTableGroupRow} directive
 */
var NgTableGroupRowController = (function () {
    function NgTableGroupRowController($scope) {
        var _this = this;
        this.$scope = $scope;
        this.groupFns = [];
        $scope.$watch('params.group()', function (newGrouping) {
            _this.setGroup(newGrouping);
        }, true);
    }
    NgTableGroupRowController.prototype.getGroupables = function () {
        var _this = this;
        var groupableCols = this.$scope.$columns.filter(function ($column) { return !!$column.groupable(_this.$scope); });
        return this.groupFns.concat(groupableCols);
    };
    NgTableGroupRowController.prototype.getGroupTitle = function (group) {
        return this.isGroupingFunc(group) ? group.title : group.title(this.$scope);
    };
    NgTableGroupRowController.prototype.getVisibleColumns = function () {
        var _this = this;
        return this.$scope.$columns.filter(function ($column) { return $column.show(_this.$scope); });
    };
    NgTableGroupRowController.prototype.groupBy = function (group) {
        if (this.isSelectedGroup(group)) {
            this.changeSortDirection();
        }
        else {
            if (this.isGroupingFunc(group)) {
                this.$scope.params.group(group);
            }
            else {
                // it's OK, we know that groupable will return a string
                // this is guaranteed by getGroupables returning only
                // columns that return (truthy) strings
                this.$scope.params.group(group.groupable(this.$scope));
            }
        }
    };
    NgTableGroupRowController.prototype.isSelectedGroup = function (group) {
        if (this.isGroupingFunc(group)) {
            return group === this.$scope.$selGroup;
        }
        else {
            return group.groupable(this.$scope) === this.$scope.$selGroup;
        }
    };
    NgTableGroupRowController.prototype.toggleDetail = function () {
        this.$scope.params.settings().groupOptions.isExpanded = !this.$scope.params.settings().groupOptions.isExpanded;
        return this.$scope.params.reload();
    };
    NgTableGroupRowController.prototype.changeSortDirection = function () {
        var newDirection;
        if (this.$scope.params.hasGroup(this.$scope.$selGroup, 'asc')) {
            newDirection = 'desc';
        }
        else if (this.$scope.params.hasGroup(this.$scope.$selGroup, 'desc')) {
            newDirection = '';
        }
        else {
            newDirection = 'asc';
        }
        this.$scope.params.group(this.$scope.$selGroup, newDirection);
    };
    NgTableGroupRowController.prototype.findGroupColumn = function (groupKey) {
        var _this = this;
        return this.$scope.$columns.filter(function ($column) { return $column.groupable(_this.$scope) === groupKey; })[0];
    };
    NgTableGroupRowController.prototype.isGroupingFunc = function (val) {
        return typeof val === 'function';
    };
    NgTableGroupRowController.prototype.setGroup = function (grouping) {
        var existingGroupCol = this.findGroupColumn(this.$scope.$selGroup);
        if (existingGroupCol && existingGroupCol.show.assign) {
            existingGroupCol.show.assign(this.$scope, true);
        }
        if (this.isGroupingFunc(grouping)) {
            this.groupFns = [grouping];
            this.$scope.$selGroup = grouping;
            this.$scope.$selGroupTitle = grouping.title;
        }
        else {
            // note: currently only one group is implemented
            var groupKey = Object.keys(grouping || {})[0];
            var groupedColumn = this.findGroupColumn(groupKey);
            if (groupedColumn) {
                this.$scope.$selGroupTitle = groupedColumn.title(this.$scope);
                this.$scope.$selGroup = groupKey;
                if (groupedColumn.show.assign) {
                    groupedColumn.show.assign(this.$scope, false);
                }
            }
        }
    };
    NgTableGroupRowController.$inject = ['$scope'];
    return NgTableGroupRowController;
}());
exports.NgTableGroupRowController = NgTableGroupRowController;


/***/ },
/* 23 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./src/browser/ngTablePagination.directive.ts ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var ng1 = __webpack_require__(/*! angular */ 0);
ngTablePagination.$inject = ['$compile', '$document', 'ngTableEventsChannel'];
/**
 * Directive that renders the table pagination controls
 * @ngdoc directive
 */
function ngTablePagination($compile, $document, ngTableEventsChannel) {
    return {
        restrict: 'A',
        scope: {
            'params': '=ngTablePagination',
            'templateUrl': '='
        },
        replace: false,
        link: function (scope, element /*, attrs*/) {
            ngTableEventsChannel.onAfterReloadData(function (pubParams) {
                scope.pages = pubParams.generatePagesArray();
            }, scope, function (pubParams) {
                return pubParams === scope.params;
            });
            scope.$watch('templateUrl', function (templateUrl) {
                if (templateUrl === undefined) {
                    return;
                }
                var template = ng1.element('<div ng-include="templateUrl"></div>', $document);
                element.append(template);
                $compile(template)(scope);
            });
        }
    };
}
exports.ngTablePagination = ngTablePagination;


/***/ },
/* 24 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./src/browser/ngTableSelectFilterDs.directive.ts ***!
  \********************************************************/
/***/ function(module, exports) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
ngTableSelectFilterDs.$inject = [];
/**
 * Takes the array returned by $column.filterData and makes it available as `$selectData` on the `$scope`.
 *
 * The resulting `$selectData` array will contain an extra item that is suitable to represent the user
 * "deselecting" an item from a `<select>` tag
 *
 * This directive is is focused on providing a datasource to an `ngOptions` directive
 */
function ngTableSelectFilterDs() {
    // note: not using isolated or child scope "by design"
    // this is to allow this directive to be combined with other directives that do
    var directive = {
        restrict: 'A',
        controller: NgTableSelectFilterDsController
    };
    return directive;
}
exports.ngTableSelectFilterDs = ngTableSelectFilterDs;
/**
 * @private
 */
var NgTableSelectFilterDsController = (function () {
    function NgTableSelectFilterDsController($scope, $parse, $attrs, $q) {
        var _this = this;
        this.$scope = $scope;
        this.$attrs = $attrs;
        this.$q = $q;
        this.$column = $parse($attrs.ngTableSelectFilterDs)($scope);
        $scope.$watch(function () { return _this.$column && _this.$column.data; }, function () { _this.bindDataSource(); });
    }
    NgTableSelectFilterDsController.prototype.bindDataSource = function () {
        var _this = this;
        this.getSelectListData(this.$column).then(function (data) {
            if (data && !_this.hasEmptyOption(data)) {
                data.unshift({ id: '', title: '' });
            }
            data = data || [];
            _this.$scope.$selectData = data;
        });
    };
    NgTableSelectFilterDsController.prototype.hasEmptyOption = function (data) {
        var isMatch;
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            if (item && item.id === '') {
                isMatch = true;
                break;
            }
        }
        return isMatch;
    };
    NgTableSelectFilterDsController.prototype.getSelectListData = function ($column) {
        var dataInput = $column.data;
        if (dataInput instanceof Array) {
            return this.$q.when(dataInput);
        }
        else {
            return this.$q.when(dataInput && dataInput());
        }
    };
    NgTableSelectFilterDsController.$inject = ['$scope', '$parse', '$attrs', '$q'];
    return NgTableSelectFilterDsController;
}());
exports.NgTableSelectFilterDsController = NgTableSelectFilterDsController;


/***/ },
/* 25 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./src/browser/ngTableSorterRow.directive.ts ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var templateUrl = __webpack_require__(/*! ./sorterRow.html */ 50);
ngTableSorterRow.$inject = [];
/**
 * directive that renders the sorting header row for a table
 * @ngdoc directive
 * @example
 * ```html
 * <ng-table-sorter-row></ng-table-sorter-row>
 * ```
 */
function ngTableSorterRow() {
    var directive = {
        restrict: 'E',
        replace: true,
        templateUrl: templateUrl,
        scope: true,
        controller: 'ngTableSorterRowController',
        controllerAs: '$ctrl'
    };
    return directive;
}
exports.ngTableSorterRow = ngTableSorterRow;


/***/ },
/* 26 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./src/browser/ngTableSorterRowController.ts ***!
  \***************************************************/
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * Controller for the {@link ngTableSorterRow ngTableSorterRow} directive
 */
var NgTableSorterRowController = (function () {
    function NgTableSorterRowController($scope) {
        this.$scope = $scope;
    }
    NgTableSorterRowController.prototype.sortBy = function ($column, event) {
        var parsedSortable = $column.sortable && $column.sortable();
        if (!parsedSortable || typeof parsedSortable !== 'string') {
            return;
        }
        else {
            var defaultSort = this.$scope.params.settings().defaultSort;
            var inverseSort = (defaultSort === 'asc' ? 'desc' : 'asc');
            var sorting = this.$scope.params.sorting() && this.$scope.params.sorting()[parsedSortable] && (this.$scope.params.sorting()[parsedSortable] === defaultSort);
            var sortingParams = (event.ctrlKey || event.metaKey) ? this.$scope.params.sorting() : {};
            sortingParams[parsedSortable] = (sorting ? inverseSort : defaultSort);
            this.$scope.params.parameters({
                sorting: sortingParams
            });
        }
    };
    NgTableSorterRowController.$inject = ['$scope'];
    return NgTableSorterRowController;
}());
exports.NgTableSorterRowController = NgTableSorterRowController;


/***/ },
/* 27 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./src/browser/public-interfaces.ts ***!
  \******************************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 28 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./src/core/data/dataSettings.ts ***!
  \***************************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 29 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./src/core/data/getData.ts ***!
  \**********************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 30 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./src/core/data/interceptor.ts ***!
  \**************************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 31 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./src/core/data/ngTableDefaultGetData.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var ng1 = __webpack_require__(/*! angular */ 0);
/**
 * Implementation of the {@link IDefaultGetDataProvider} interface
 */
var NgTableDefaultGetDataProvider = (function () {
    function NgTableDefaultGetDataProvider() {
        /**
         * The name of a angular filter that knows how to apply the values returned by
         * `NgTableParams.filter()` to restrict an array of data.
         * (defaults to the angular `filter` filter service)
         */
        this.filterFilterName = 'filter';
        /**
         * The name of a angular filter that knows how to apply the values returned by
        * `NgTableParams.orderBy()` to sort an array of data.
        * (defaults to the angular `orderBy` filter service)
        */
        this.sortingFilterName = 'orderBy';
        var provider = this;
        this.$get = ngTableDefaultGetData;
        ngTableDefaultGetData.$inject = ['$filter', 'ngTableEventsChannel'];
        function ngTableDefaultGetData($filter, ngTableEventsChannel) {
            var defaultDataOptions = { applyFilter: true, applySort: true, applyPaging: true };
            getData.applyPaging = applyPaging;
            getData.getFilterFn = getFilterFn;
            getData.getOrderByFn = getOrderByFn;
            return getData;
            function getFilterFn(params) {
                var filterOptions = params.settings().filterOptions;
                if (ng1.isFunction(filterOptions.filterFn)) {
                    return filterOptions.filterFn;
                }
                else {
                    return $filter(filterOptions.filterFilterName || provider.filterFilterName);
                }
            }
            function getOrderByFn(params) {
                return $filter(provider.sortingFilterName);
            }
            function applyFilter(data, params) {
                if (!params.hasFilter()) {
                    return data;
                }
                var filter = params.filter(true);
                var filterKeys = Object.keys(filter);
                var parsedFilter = filterKeys.reduce(function (result, key) {
                    result = setPath(result, filter[key], key);
                    return result;
                }, {});
                var filterFn = getFilterFn(params);
                return filterFn.call(params, data, parsedFilter, params.settings().filterOptions.filterComparator);
            }
            function applyPaging(data, params) {
                var pagedData = data.slice((params.page() - 1) * params.count(), params.page() * params.count());
                params.total(data.length); // set total for recalc pagination
                return pagedData;
            }
            function applySort(data, params) {
                var orderBy = params.orderBy();
                var orderByFn = getOrderByFn(params);
                return orderBy.length ? orderByFn(data, orderBy) : data;
            }
            function getData(data, params) {
                if (data == null) {
                    return [];
                }
                var options = ng1.extend({}, defaultDataOptions, params.settings().dataOptions);
                var fData = options.applyFilter ? applyFilter(data, params) : data;
                ngTableEventsChannel.publishAfterDataFiltered(params, fData);
                var orderedData = options.applySort ? applySort(fData, params) : fData;
                ngTableEventsChannel.publishAfterDataSorted(params, orderedData);
                return options.applyPaging ? applyPaging(orderedData, params) : orderedData;
            }
            // Sets the value at any depth in a nested object based on the path
            // note: adapted from: underscore-contrib#setPath
            function setPath(obj, value, path) {
                var keys = path.split('.');
                var ret = obj;
                var lastKey = keys[keys.length - 1];
                var target = ret;
                var parentPathKeys = keys.slice(0, keys.length - 1);
                parentPathKeys.forEach(function (key) {
                    if (!target.hasOwnProperty(key)) {
                        target[key] = {};
                    }
                    target = target[key];
                });
                target[lastKey] = value;
                return ret;
            }
        }
    }
    return NgTableDefaultGetDataProvider;
}());
exports.NgTableDefaultGetDataProvider = NgTableDefaultGetDataProvider;


/***/ },
/* 32 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./src/core/data/results.ts ***!
  \**********************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 33 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./src/core/filtering/filterComparator.ts ***!
  \************************************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 34 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./src/core/filtering/filterFunc.ts ***!
  \******************************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 35 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./src/core/filtering/filterSettings.ts ***!
  \**********************************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 36 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./src/core/filtering/index.ts ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./filterComparator */ 33));
__export(__webpack_require__(/*! ./filterFunc */ 34));
__export(__webpack_require__(/*! ./filterSettings */ 35));


/***/ },
/* 37 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./src/core/grouping/index.ts ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./getGroup */ 4));
__export(__webpack_require__(/*! ./groupingFunc */ 6));
__export(__webpack_require__(/*! ./groupSettings */ 5));
__export(__webpack_require__(/*! ./ngTableDefaultGetGroups */ 38));


/***/ },
/* 38 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./src/core/grouping/ngTableDefaultGetGroups.ts ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ng1 = __webpack_require__(/*! angular */ 0);
var util_1 = __webpack_require__(/*! ../util */ 11);
ngTableDefaultGetGroups.$inject = ['$q', 'ngTableDefaultGetData'];
/**
 * Implementation of the {@link IDefaultGetData IDefaultGetData} interface
 *
 * @ngdoc service
 */
function ngTableDefaultGetGroups($q, ngTableDefaultGetData) {
    return getGroups;
    function getGroups(params) {
        var group = params.group();
        var groupFn;
        var sortDirection = undefined;
        if (util_1.isGroupingFun(group)) {
            groupFn = group;
            sortDirection = group.sortDirection;
        }
        else {
            // currently support for only one group implemented
            var groupField_1 = Object.keys(group)[0];
            sortDirection = group[groupField_1];
            groupFn = function (item) {
                return getPath(item, groupField_1);
            };
        }
        var settings = params.settings();
        var originalDataOptions = settings.dataOptions;
        settings.dataOptions = { applyPaging: false };
        var getData = settings.getData;
        var gotData = $q.when(getData(params));
        return gotData.then(function (data) {
            var groups = {};
            ng1.forEach(data, function (item) {
                var groupName = groupFn(item);
                groups[groupName] = groups[groupName] || {
                    data: [],
                    $hideRows: !settings.groupOptions.isExpanded,
                    value: groupName
                };
                groups[groupName].data.push(item);
            });
            var result = [];
            for (var i in groups) {
                result.push(groups[i]);
            }
            if (sortDirection) {
                var orderByFn = ngTableDefaultGetData.getOrderByFn();
                var orderBy = util_1.convertSortToOrderBy({
                    value: sortDirection
                });
                result = orderByFn(result, orderBy);
            }
            return ngTableDefaultGetData.applyPaging(result, params);
        }).finally(function () {
            // restore the real options
            settings.dataOptions = originalDataOptions;
        });
    }
}
exports.ngTableDefaultGetGroups = ngTableDefaultGetGroups;
/**
 * @private
 */
function getPath(obj, ks) {
    // origianl source https://github.com/documentcloud/underscore-contrib
    var keys;
    if (typeof ks === "string") {
        keys = ks.split(".");
    }
    else {
        keys = ks;
    }
    // If we have reached an undefined property
    // then stop executing and return undefined
    if (obj === undefined)
        return void 0;
    // If the path array has no more elements, we've reached
    // the intended property and return its value
    if (keys.length === 0)
        return obj;
    // If we still have elements in the path array and the current
    // value is null, stop executing and return undefined
    if (obj === null)
        return void 0;
    return getPath(obj[keys[0]], keys.slice(1));
}


/***/ },
/* 39 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./src/core/grouping/publicExports.ts ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./getGroup */ 4));
__export(__webpack_require__(/*! ./groupingFunc */ 6));
__export(__webpack_require__(/*! ./groupSettings */ 5));


/***/ },
/* 40 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./src/core/paging/index.ts ***!
  \**********************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 41 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/core/sorting/index.ts ***!
  \***********************************/
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },
/* 42 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./src/browser/filterRow.html ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/filterRow.html';
var html = "<tr ng-show=\"show_filter\" class=\"ng-table-filters\">\n    <th data-title-text=\"{{$column.titleAlt(this) || $column.title(this)}}\" ng-repeat=\"$column in $columns\" ng-if=\"$column.show(this)\" class=\"filter {{$column.class(this)}}\"\n        ng-class=\"params.settings().filterOptions.filterLayout === 'horizontal' ? 'filter-horizontal' : ''\">\n        <div ng-repeat=\"(name, filter) in $column.filter(this)\" ng-include=\"$ctrl.config.getTemplateUrl(filter)\" class=\"filter-cell\"\n             ng-class=\"[$ctrl.getFilterCellCss($column.filter(this), params.settings().filterOptions.filterLayout), $last ? 'last' : '']\">\n        </div>\n    </th>\n</tr>\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 43 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./src/browser/filters/number.html ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/filters/number.html';
var html = "<input type=\"number\" name=\"{{name}}\" ng-disabled=\"$filterRow.disabled\" ng-model=\"params.filter()[name]\" class=\"input-filter form-control\"\n       placeholder=\"{{getFilterPlaceholderValue(filter, name)}}\"/>\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 44 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./src/browser/filters/select-multiple.html ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/filters/select-multiple.html';
var html = "<select ng-options=\"data.id as data.title for data in $column.data\"\n        ng-disabled=\"$filterRow.disabled\"\n        multiple ng-multiple=\"true\"\n        ng-model=\"params.filter()[name]\"\n        class=\"filter filter-select-multiple form-control\" name=\"{{name}}\">\n</select>\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 45 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./src/browser/filters/select.html ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/filters/select.html';
var html = "<select ng-options=\"data.id as data.title for data in $selectData\"\n        ng-table-select-filter-ds=\"$column\"\n        ng-disabled=\"$filterRow.disabled\"\n        ng-model=\"params.filter()[name]\"\n        class=\"filter filter-select form-control\" name=\"{{name}}\">\n    <option style=\"display:none\" value=\"\"></option>\n</select>\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 46 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./src/browser/filters/text.html ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/filters/text.html';
var html = "<input type=\"text\" name=\"{{name}}\" ng-disabled=\"$filterRow.disabled\" ng-model=\"params.filter()[name]\" class=\"input-filter form-control\"\n       placeholder=\"{{getFilterPlaceholderValue(filter, name)}}\"/>\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 47 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/browser/groupRow.html ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/groupRow.html';
var html = "<tr ng-if=\"params.hasGroup()\" ng-show=\"$groupRow.show\" class=\"ng-table-group-header\">\n    <th colspan=\"{{$ctrl.getVisibleColumns().length}}\" class=\"sortable\" ng-class=\"{\n                    'sort-asc': params.hasGroup($selGroup, 'asc'),\n                    'sort-desc':params.hasGroup($selGroup, 'desc')\n                  }\">\n        <a href=\"\" ng-click=\"isSelectorOpen = !isSelectorOpen\" class=\"ng-table-group-selector\">\n            <strong class=\"sort-indicator\">{{$selGroupTitle}}</strong>\n            <button class=\"btn btn-default btn-xs ng-table-group-close\"\n                    ng-click=\"$groupRow.show = false; $event.preventDefault(); $event.stopPropagation();\">\n                <span class=\"glyphicon glyphicon-remove\"></span>\n            </button>\n            <button class=\"btn btn-default btn-xs ng-table-group-toggle\"\n                    ng-click=\"$ctrl.toggleDetail(); $event.preventDefault(); $event.stopPropagation();\">\n                <span class=\"glyphicon\" ng-class=\"{\n                    'glyphicon-resize-small': params.settings().groupOptions.isExpanded,\n                    'glyphicon-resize-full': !params.settings().groupOptions.isExpanded\n                }\"></span>\n            </button>\n        </a>\n        <div class=\"list-group\" ng-if=\"isSelectorOpen\">\n            <a href=\"\" class=\"list-group-item\" ng-repeat=\"group in $ctrl.getGroupables()\" ng-click=\"$ctrl.groupBy(group)\">\n                <strong>{{ $ctrl.getGroupTitle(group)}}</strong>\n                <strong ng-class=\"$ctrl.isSelectedGroup(group) && 'sort-indicator'\"></strong>\n            </a>\n        </div>\n    </th>\n</tr>\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 48 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./src/browser/header.html ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/header.html';
var html = "<ng-table-group-row></ng-table-group-row>\n<ng-table-sorter-row></ng-table-sorter-row>\n<ng-table-filter-row></ng-table-filter-row>\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 49 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./src/browser/pager.html ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/pager.html';
var html = "<div class=\"ng-cloak ng-table-pager\" ng-if=\"params.data.length\">\n    <div ng-if=\"params.settings().counts.length\" class=\"ng-table-counts btn-group pull-right\">\n        <button ng-repeat=\"count in params.settings().counts\" type=\"button\"\n                ng-class=\"{'active':params.count() == count}\"\n                ng-click=\"params.count(count)\" class=\"btn btn-default\">\n            <span ng-bind=\"count\"></span>\n        </button>\n    </div>\n    <ul ng-if=\"pages.length\" class=\"pagination ng-table-pagination\">\n        <li class=\"page-item\" ng-class=\"{'disabled': !page.active && !page.current, 'active': page.current}\" ng-repeat=\"page in pages\" ng-switch=\"page.type\">\n            <a class=\"page-link\" ng-switch-when=\"prev\" ng-click=\"params.page(page.number)\" href=\"\">&laquo;</a>\n            <a class=\"page-link\" ng-switch-when=\"first\" ng-click=\"params.page(page.number)\" href=\"\"><span ng-bind=\"page.number\"></span></a>\n            <a class=\"page-link\" ng-switch-when=\"page\" ng-click=\"params.page(page.number)\" href=\"\"><span ng-bind=\"page.number\"></span></a>\n            <a class=\"page-link\" ng-switch-when=\"more\" ng-click=\"params.page(page.number)\" href=\"\">&#8230;</a>\n            <a class=\"page-link\" ng-switch-when=\"last\" ng-click=\"params.page(page.number)\" href=\"\"><span ng-bind=\"page.number\"></span></a>\n            <a class=\"page-link\" ng-switch-when=\"next\" ng-click=\"params.page(page.number)\" href=\"\">&raquo;</a>\n        </li>\n    </ul>\n</div>\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 50 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./src/browser/sorterRow.html ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/sorterRow.html';
var html = "<tr class=\"ng-table-sort-header\">\n    <th title=\"{{$column.headerTitle(this)}}\"\n        ng-repeat=\"$column in $columns\"\n        ng-class=\"{\n                    'sortable': $column.sortable(this),\n                    'sort-asc': params.sorting()[$column.sortable(this)]=='asc',\n                    'sort-desc': params.sorting()[$column.sortable(this)]=='desc'\n                  }\"\n        ng-click=\"$ctrl.sortBy($column, $event)\"\n        ng-if=\"$column.show(this)\"\n        ng-init=\"template = $column.headerTemplateURL(this)\"\n        class=\"header {{$column.class(this)}}\">\n        <div ng-if=\"!template\" class=\"ng-table-header\" ng-class=\"{'sort-indicator': params.settings().sortingIndicator == 'div'}\">\n            <span ng-bind=\"$column.title(this)\" ng-class=\"{'sort-indicator': params.settings().sortingIndicator == 'span'}\"></span>\n        </div>\n        <div ng-if=\"template\" ng-include=\"template\"></div>\n    </th>\n</tr>\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 51 */
/* unknown exports provided */
/* all exports used */
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng1 = __webpack_require__(/*! angular */ 0);
var core_1 = __webpack_require__(/*! ./src/core */ 1);
var browser_1 = __webpack_require__(/*! ./src/browser */ 2);
var ngTableModule = ng1.module('ngTable', [core_1.ngTableCoreModule.name, browser_1.ngTableBrowserModule.name]);
exports.ngTableModule = ngTableModule;
__export(__webpack_require__(/*! ./src/core */ 1));
__export(__webpack_require__(/*! ./src/browser */ 2));


/***/ }
/******/ ]);
});
//# sourceMappingURL=ng-table.js.map