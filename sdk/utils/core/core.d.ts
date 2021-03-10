import { AuthInfo } from '../types/types';
import { BREADCRUMBCATEGORYS } from '../shared/shared';
import { BreadcrumbPushData } from '../types/types';
import { BREADCRUMBTYPES } from '../shared/shared';
import { EVENTTYPES } from '../shared/shared';
import { InitOptions } from '../types/types';
import { MITOHttp } from '../types/types';
import { Queue } from '../utils/utils';
import { Replace } from '../types/types';
import { ReportDataType } from '../types/types';
import { ResourceErrorTarget } from '../types/types';
import { Severity } from '../utils/utils';
import { TNumStrObj } from '../types/types';
import { TransportDataType } from '../types/types';
import { WxEvents } from '../shared/shared';

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
