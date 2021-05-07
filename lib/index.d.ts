declare const exportAll: {
    filterEmptyOfObject: (obj: any) => any;
    isEmpty: (val: unknown, options?: import("./interface/shared").Isobject) => boolean;
    isObject: (val: unknown) => boolean;
    isMap: (val: unknown) => boolean;
    isSet: (val: unknown) => boolean;
    injectArrayEquals: () => void;
    injectObjectEquals: () => void;
};
export default exportAll;
