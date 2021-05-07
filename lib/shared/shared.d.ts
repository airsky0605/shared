import { Isobject } from '../interface/shared';
declare const isObject: (val: unknown) => boolean;
export declare const checkEnumerable: (val: any) => boolean;
declare const isMap: (val: unknown) => boolean;
declare const isSet: (val: unknown) => boolean;
declare const isEmpty: (val: unknown, options?: Isobject) => boolean;
export { isEmpty, isObject, isMap, isSet, };
