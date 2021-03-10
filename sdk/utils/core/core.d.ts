import { AuthInfo } from '@mitojs/types';
import { BREADCRUMBCATEGORYS } from '@mitojs/shared';
import { BreadcrumbPushData } from '@mitojs/types';
import { BREADCRUMBTYPES } from '@mitojs/shared';
import { EVENTTYPES } from '@mitojs/shared';
import { InitOptions } from '@mitojs/types';
import { MITOHttp } from '@mitojs/types';
import { Queue } from '@mitojs/utils';
import { Replace } from '@mitojs/types';
import { ReportDataType } from '@mitojs/types';
import { ResourceErrorTarget } from '@mitojs/types';
import { Severity } from '@mitojs/utils';
import { TNumStrObj } from '@mitojs/types';
import { TransportDataType } from '@mitojs/types';
import { WxEvents } from '@mitojs/shared';

export declare class Breadcrumb {
    maxBreadcrumbs: number;
    beforePushBreadcrumb: unknown;
    stack: BreadcrumbPushData[];
    constructor();
    push(data: BreadcrumbPushData): void;
    immediatePush(data: BreadcrumbPushData): void;
    shift(): boolean;
    clear(): void;
    getStack(): BreadcrumbPushData[];
    getCategory(type: BREADCRUMBTYPES): BREADCRUMBCATEGORYS;
    bindOptions(options?: InitOptions): void;
}

export declare const breadcrumb: Breadcrumb;

export declare function createErrorId(data: ReportDataType, apikey: string): number | null;

export declare function getFlutterRealOrigin(url: string): string;

export declare function getFlutterRealPath(url: string): string;

export declare function getRealPageOrigin(url: string): string;

export declare function getRealPath(url: string): string;

export declare function handleConsole(data: Replace.TriggerConsole): void;

export declare function httpTransform(data: MITOHttp): ReportDataType;

export declare function initOptions(paramOptions?: InitOptions): void;

export declare function log({ message, tag, level, ex }: LogTypes): void;

declare interface LogTypes {
    message: TNumStrObj;
    tag?: TNumStrObj;
    level?: Severity;
    ex?: Error | any;
}

export declare class Options {
    beforeAppAjaxSend: Function;
    afterAppAjaxClose: Function;
    enableTraceId: Boolean;
    filterXhrUrlRegExp: RegExp;
    includeHttpUrlTraceIdRegExp: RegExp;
    traceIdFieldName: string;
    constructor();
    bindOptions(options?: InitOptions): void;
}

export declare const options: Options;

export declare function removeHashPath(url: string): string;

declare type ReplaceCallback = (data: any) => void;

export declare interface ReplaceHandler {
    type: EVENTTYPES | WxEvents;
    callback: ReplaceCallback;
}

export declare function resourceTransform(target: ResourceErrorTarget): ReportDataType;

export declare function setTraceId(httpUrl: string, callback: (headerFieldName: string, traceId: string) => void): void;

export declare function subscribeEvent(handler: ReplaceHandler): boolean;

export declare class TransportData {
    url: string;
    queue: Queue;
    beforeDataReport: unknown;
    backTrackerId: InitOptions | unknown;
    configReportXhr: unknown;
    apikey: string;
    constructor(url: string);
    getRecord(): any[];
    beforePost(data: ReportDataType): Promise<string | false>;
    xhrPost(data: ReportDataType): Promise<void>;
    wxPost(data: ReportDataType): Promise<void>;
    getAuthInfo(): AuthInfo;
    getApikey(): string;
    getTrackerId(): string | number;
    getTransportData(data: ReportDataType): TransportDataType;
    isSdkTransportUrl(targetUrl: string): boolean;
    bindOptions(options?: InitOptions): void;
    send(data: ReportDataType): Promise<void>;
}

export declare const transportData: TransportData;

export declare function triggerHandlers(type: EVENTTYPES | WxEvents, data: any): void;

export { }
