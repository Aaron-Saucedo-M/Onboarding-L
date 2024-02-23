/// <reference types='codeceptjs' />

type AssertWrapper = import('codeceptjs-assert');
type steps_file = typeof import('./steps_file.js');
type janusObit = typeof import('./pages/JanusObit.PO');
type JanusDBHelper = import('./helpers/janusDB_helper');

declare namespace CodeceptJS {
    interface SupportObject {
        I: I;
        current: any;
        janusObitPage: janusObit;
    }
    interface Methods extends WebDriver, JanusDBHelper, REST, AssertWrapper {}
    interface I extends ReturnType<steps_file> {}
    namespace Translation {
        interface Actions {}
    }
}
