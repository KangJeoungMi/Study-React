import 'styled-components';

// and extend them!
declare module 'styled-component'{
    export interface DefaultTheme{
        textColor: string;
        bgColor: string;
        btnColor: string;
    }
} 