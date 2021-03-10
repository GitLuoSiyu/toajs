import { BREADCRUMBTYPES } from '@mitojs/shared';
import { ERRORTYPES } from '@mitojs/shared';
import { InitOptions } from '@mitojs/types';
import { log } from '@mitojs/core';
import { MITOHttp } from '@mitojs/types';
import { Replace } from '@mitojs/types';
import { ReplaceHandler } from '@mitojs/core';
import { SDK_NAME } from '@mitojs/shared';
import { SDK_VERSION } from '@mitojs/shared';
import { Severity } from '@mitojs/utils';

export declare function addReplaceHandler(handler: ReplaceHandler): void;

export declare const HandleEvents: {
    handleHttp(data: MITOHttp, type: BREADCRUMBTYPES): void;
    handleError(errorEvent: ErrorEvent): Promise<void>;
    handleNotErrorInstance(message: string, filename: string, lineno: number, colno: number): {
        url: string;
        name: string;
        message: string;
        level: Severity;
        time: number;
        stack: {
            url: string;
            func: ERRORTYPES;
            args: ERRORTYPES;
            line: number;
            col: number;
        }[];
    };
    handleHistory(data: Replace.IRouter): void;
    handleHashchange(data: HashChangeEvent): void;
    handleUnhandleRejection(ev: PromiseRejectionEvent): void;
};

export declare function init(options?: InitOptions): void;
export { log }
export { SDK_NAME }
export { SDK_VERSION }

export declare function setupReplace(): void;

export { }
