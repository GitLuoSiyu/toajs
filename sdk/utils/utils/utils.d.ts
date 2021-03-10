/// <reference types="wechat-miniprogram" />
import { Breadcrumb } from '../core/core';
import { EVENTTYPES } from '../shared/shared';
import { IAnyObject } from '../types/types';
import { InitOptions } from '../types/types';
import { IntegrationError } from '../types/types';
import { Options } from '../core/core';
import { ReportDataType } from '../types/types';
import { TransportData } from '../core/core';
import { voidFun } from '../shared/shared';
import { WxEvents } from '../shared/shared';

export declare const defaultFunctionName = "<anonymous>";

export declare function extractErrorStack(ex: any, level: Severity): ReportDataType;

export declare function fromHttpStatus(httpStatus: number): SpanStatus;

export declare function generateUUID(): string;

export declare function getAppId(): string;

export declare function getBigVersion(version: string): number;

export declare function getCurrentRoute(): string;

export declare function getFlag(replaceType: EVENTTYPES | WxEvents): boolean;

export declare function getFunctionName(fn: unknown): string;

export declare function getGlobal<T>(): MITOGlobal & T;

export declare function getGlobalMitoSupport(): MitoSupport;

export declare function getLocationHref(): string;

export declare function getTimestamp(): number;

export declare const _global: MITOGlobal & Window & WechatMiniprogram.Wx;

export declare function htmlElementAsString(target: HTMLElement): string;

export declare const isBrowserEnv: boolean;

export declare function isEmpty(wat: any): boolean;

export declare function isEmptyObject(obj: Object): boolean;

export declare function isError(wat: any): boolean;

export declare function isExistProperty(obj: Object, key: string | number | symbol): boolean;

export declare function isHttpFail(code: number): boolean;

export declare function isInstanceOf(wat: any, base: any): boolean;

export declare const isNodeEnv: boolean;

export declare const isWxMiniEnv: boolean;

export declare class Logger {
    private enabled;
    private _console;
    constructor();
    disable(): void;
    bindOptions(debug: boolean): void;
    enable(): void;
    getEnableStatus(): boolean;
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}

export declare const logger: Logger;

declare interface MITOGlobal {
    console?: Console;
    __MITO__?: MitoSupport;
}

export declare interface MitoSupport {
    logger: Logger;
    breadcrumb: Breadcrumb;
    transportData: TransportData;
    replaceFlag: {
        [key in EVENTTYPES]?: boolean;
    };
    record?: any[];
    options?: Options;
}

export declare const nativeToString: () => string;

export declare function nativeTryCatch(fn: voidFun, errorFn?: (err: any) => void): void;

export declare function on(target: {
    addEventListener: Function;
}, eventName: TotalEventName, handler: Function, opitons?: boolean | unknown): void;

export declare function parseErrorString(str: string): IntegrationError;

export declare function parseUrlToObj(url: string): {
    host?: string;
    path?: string;
    protocol?: string;
    relative?: string;
};

export declare class Queue {
    private micro;
    private stack;
    private isFlushing;
    constructor();
    addFn(fn: voidFun): void;
    clear(): void;
    getStack(): any[];
    flushStack(): void;
}

export declare function replaceOld(source: IAnyObject, name: string, replacement: (...args: any[]) => any, isForced?: boolean): void;

export declare function setFlag(replaceType: EVENTTYPES | WxEvents, isSet: boolean): void;

export declare function setSilentFlag(opitons?: InitOptions): void;

export declare function setUrlQuery(url: string, query: object): string;

export declare enum Severity {
    Else = "else",
    Error = "error",
    Warning = "warning",
    Info = "info",
    Debug = "debug",
    Low = "low",
    Normal = "normal",
    High = "high",
    Critical = "critical"
}

export declare namespace Severity {
    export function fromString(level: string): Severity;
}

export declare function slientConsoleScope(callback: Function): void;

export declare enum SpanStatus {
    Ok = "ok",
    DeadlineExceeded = "deadline_exceeded",
    Unauthenticated = "unauthenticated",
    PermissionDenied = "permission_denied",
    NotFound = "not_found",
    ResourceExhausted = "resource_exhausted",
    InvalidArgument = "invalid_argument",
    Unimplemented = "unimplemented",
    Unavailable = "unavailable",
    InternalError = "internal_error",
    UnknownError = "unknown_error",
    Cancelled = "cancelled",
    AlreadyExists = "already_exists",
    FailedPrecondition = "failed_precondition",
    Aborted = "aborted",
    OutOfRange = "out_of_range",
    DataLoss = "data_loss"
}

export declare const _support: MitoSupport;

export declare function supportsHistory(): boolean;

export declare const throttle: (fn: Function, delay: number) => Function;

export declare function toStringAny(target: any, type: string): boolean;

export declare function toStringValidateOption(target: any, targetName: string, expectType: string): boolean;

declare type TotalEventName = keyof GlobalEventHandlersEventMap | keyof XMLHttpRequestEventTargetEventMap | keyof WindowEventMap;

export declare function typeofAny(target: any, type: string): boolean;

export declare function unknownToString(target: unknown): string;

export declare function validateOption(target: any, targetName: string, expectType: string): boolean;

export declare const variableTypeDetection: {
    isNumber: (value: any) => boolean;
    isString: (value: any) => boolean;
    isBoolean: (value: any) => boolean;
    isNull: (value: any) => boolean;
    isUndefined: (value: any) => boolean;
    isSymbol: (value: any) => boolean;
    isFunction: (value: any) => boolean;
    isObject: (value: any) => boolean;
    isArray: (value: any) => boolean;
    isProcess: (value: any) => boolean;
    isWindow: (value: any) => boolean;
};

export { }
