import { BREADCRUMBtypestypes } from '../../utils/shared/shared';
import { ERRORtypestypes } from '../../utils/shared/shared';
import { InitOptions } from '../../utils/types/types';
import { log } from '../core/core';
import { MITOHttp } from '../../utils/types/types';
import { Replace } from '../../utils/types/types';
import { ReplaceHandler } from '../core/core';
import { SDK_NAME } from '../../utils/shared/shared';
import { SDK_VERSION } from '../../utils/shared/shared';
import { Severity } from '../utils/utils';

export declare function addReplaceHandler(handler: ReplaceHandler): void;

export declare const HandleEvents: {
    handleHttp(data: MITOHttp, type: BREADCRUMBtypestypes): void;
    handleError(errorEvent: ErrorEvent): Promise<void>;
    handleNotErrorInstance(message: string, filename: string, lineno: number, colno: number): {
        url: string;
        name: string;
        message: string;
        level: Severity;
        time: number;
        stack: {
            url: string;
            func: ERRORtypestypes;
            args: ERRORtypestypes;
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
