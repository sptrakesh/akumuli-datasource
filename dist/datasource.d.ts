/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
declare class AkumuliDatasource {
    private instanceSettings;
    private backendSrv;
    private templateSrv;
    private $q;
    /** @ngInject */
    constructor(instanceSettings: any, backendSrv: any, templateSrv: any, $q: any);
    /** Test that datasource connection works */
    testDatasource(): any;
    metricFindQuery(queryString: any): any;
    suggestMetricNames(metricName: any): any;
    /** Parse series name in a canonical form */
    extractTags(names: any): any[];
    annotationQuery(options: any): any;
    getAggregators(): Promise<{}>;
    suggestTagKeys(metric: any, tagPrefix: any): any;
    suggestTagValues(metric: any, tagName: any, valuePrefix: any): any;
    /** Query time-series storage */
    groupAggregateTopNQuery(begin: any, end: any, interval: any, limit: any, target: any): any;
    /** Query time-series storage */
    groupAggregateTargetQuery(begin: any, end: any, interval: any, limit: any, target: any): any;
    /** Query time-series storage */
    selectTopNQuery(begin: any, end: any, limit: any, target: any): any;
    /** Query time-series storage */
    selectTargetQuery(begin: any, end: any, limit: any, target: any): any;
    query(options: any): any;
}
export { AkumuliDatasource };
