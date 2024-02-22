/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type janusObit = typeof import('./pages/JanusObit.PO');

declare namespace CodeceptJS {
    interface SupportObject {
        I: I;
        current: any;
        janusObitPage: janusObit;
    }
    interface Methods extends WebDriver {}
    interface I extends ReturnType<steps_file> {}
    namespace Translation {
        interface Actions {}
    }
}
