export enum ModuleFlags {
    EXISTS = 1 << 0,
    BLACKLISTED = 1 << 1,
    ASSET = 1 << 2,
    HAS_DEFAULT = 1 << 3,
    IS_ES_MODULE = 1 << 4,
    HAS_REGISTER_ASSET = 1 << 5,
    IS_PLAIN_OBJECT = 1 << 6,
}

export enum ModulesMapInternal {
    FULL_LOOKUP,
    NOT_FOUND
}
