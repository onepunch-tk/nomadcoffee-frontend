// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        deepBg:string;
        shallowBg:string;
        deepAccent:string;
        middleAccent:string;
        shallowAccent:string;
        mainFont:string;
        subFont:string
        border:string;

    }
}
