/// <reference types="wechat-miniprogram" />
import { Breadcrumb } from '@mitojs/core';
import { BREADCRUMBTYPES } from '@mitojs/shared';
import { ERRORTYPES } from '@mitojs/shared';
import { HTTPTYPE } from '@mitojs/shared';
import { Severity } from '@mitojs/utils';

export declare interface AuthInfo {
    apikey: string;
    sdkVersion: string;
    sdkName: string;
    trackerId: string;
}

export declare interface BreadcrumbPushData {
    type: BREADCRUMBTYPES;
    data: ReportDataType | Replace.IRouter | Replace.TriggerConsole | WxLifeCycleBreadcrumb | WxOnShareAppMessageBreadcrumb | WxRequestErrorBreadcrumb | TNumStrObj;
    category?: string;
    time?: number;
    level: Severity;
}

declare type CANCEL = null | undefined | boolean;

export declare enum EMethods {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE"
}

export declare interface ErrorStack {
    args: any[];
    func: string;
    column: number;
    line: number;
    url: string;
}

export declare interface HooksTypes {
    configReportXhr?(xhr: XMLHttpRequest): void;
    beforeDataReport?(event: TransportDataType): Promise<TransportDataType | null | CANCEL> | TransportDataType | CANCEL | null;
    beforePushBreadcrumb?(breadcrumb: Breadcrumb, hint: BreadcrumbPushData): BreadcrumbPushData | CANCEL;
    beforeAppAjaxSend?(config: IRequestHeaderConfig, setRequestHeader: IBeforeAppAjaxSendConfig): void;
    backTrackerId?(): string | number;
}

export declare type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS';

export declare interface IAnyObject {
    [key: string]: any;
}

export declare interface IBeforeAppAjaxSendConfig {
    setRequestHeader: TSetRequestHeader;
}

export declare interface InitOptions extends SilentEventTypes, HooksTypes, WxSilentEventTypes {
    dsn?: string;
    disabled?: boolean;
    apikey?: string;
    debug?: boolean;
    enableTraceId?: boolean;
    includeHttpUrlTraceIdRegExp?: RegExp;
    traceIdFieldName?: string;
    filterXhrUrlRegExp?: RegExp;
    maxBreadcrumbs?: number;
}

export declare interface IntegrationError {
    message: string;
    name: string;
    stacks: ErrorStack[];
}

declare interface IRequestHeaderConfig {
    url: HttpMethod;
    method: string;
}

export declare interface MITOHttp {
    type: HTTPTYPE;
    traceId?: string;
    method?: string;
    url?: string;
    status?: number;
    reqData?: any;
    sTime?: number;
    elapsedTime?: number;
    responseText?: any;
    time?: number;
    isSdkUrl?: boolean;
    errMsg?: string;
}

export declare interface MITOXMLHttpRequest extends XMLHttpRequest {
    [key: string]: any;
    mito_xhr?: MITOHttp;
}

export declare namespace Replace {
    export interface TriggerConsole {
        args: any[];
        level: string;
    }
    export interface IRouter {
        from: string;
        to: string;
    }
}

export declare interface ReportDataType {
    type?: ERRORTYPES;
    message?: string;
    url: string;
    name?: string;
    stack?: any;
    time?: number;
    errorId?: number;
    level: string;
    elapsedTime?: number;
    request?: {
        httpType?: string;
        traceId?: string;
        method: string;
        url: string;
        data: any;
    };
    response?: {
        status: number;
        data: string;
    };
    componentName?: string;
    propsData?: any;
    customTag?: string;
}

export declare interface ResourceErrorTarget {
    src?: string;
    href?: string;
    localName?: string;
}

export declare interface SilentEventTypes {
    silentXhr?: boolean;
    silentFetch?: boolean;
    silentConsole?: boolean;
    silentDom?: boolean;
    silentHistory?: boolean;
    silentError?: boolean;
    silentUnhandledrejection?: boolean;
    silentHashchange?: boolean;
    silentVue?: boolean;
}

export declare type TNumStrObj = number | string | object;

export declare interface TransportDataType {
    authInfo: AuthInfo;
    breadcrumb: BreadcrumbPushData[];
    data: ReportDataType;
    record?: any[];
}

declare type TSetRequestHeader = (key: string, value: string) => {};

export declare interface WxLifeCycleBreadcrumb {
    path: string;
    query: IAnyObject;
}

export declare interface WxOnShareAppMessageBreadcrumb {
    path: string;
    query: IAnyObject;
    options: WechatMiniprogram.Page.IShareAppMessageOption;
}

export declare interface WxOnTabItemTapBreadcrumb {
    path: string;
    query: IAnyObject;
    options: WechatMiniprogram.Page.ITabItemTapOption;
}

export declare interface WxRequestErrorBreadcrumb {
    requestOptions: WechatMiniprogram.RequestOption;
    errMsg: string;
}

export declare interface WxSilentEventTypes {
    silentWxOnError?: boolean;
    silentWxOnUnhandledRejection?: boolean;
    silentWxOnPageNotFound?: boolean;
    silentWxOnShareAppMessage?: boolean;
    silentMiniRoute?: boolean;
}

export { }
