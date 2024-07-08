import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *{
        padding: 0;
        margin: 0;
        border: 0;
    }
    *,*:before,*:after{
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    :focus,:active{outline: none;}
    a:focus,a:active{outline: none;}

    nav,footer,header,aside{display: block;}

    html,body{
        height: 100%;
        width: 100%;
        font-size: 100%;
        line-height: 1;
        font-size: 14px;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    input,button,textarea{font-family:inherit;}

    input::-ms-clear{display: none;}
    button{cursor: pointer; background-color: transparent;}
    button::-moz-focus-inner {padding:0;border:0;}
    a, a:visited{text-decoration: none;}
    a:hover{text-decoration: none;}
    ul li{list-style: none;}
    img{vertical-align: top; max-width: 100%;}

    * {
        transition: color 0.3s, background-color 0.3s;
    }

    #root {
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

[data-theme="peanut"] {
    --bg: #D7CBB2;
    --header: #BD864B;
    --mainLight: #f9efde;
    --mainDark: #46220E;
    --accent: #c45a45;
    --accentLight: #e27a60;
    --accentPale: #e0a897;
    --primTaskBg: #E8B383; 
    --ordTask: #F4D8B8;
    --impTask: #EEAD88;
    --doneTask: #F3E2C1;

    --lightGray: #dad8d6;
    --darkGray: #848484;
    --extraLightGray: #f2f2f2;
}

[data-theme="blue"] {
    --bg: #BBB5CD;
    --header: #647295;
    --mainLight: #F2F0EE;
    --mainDark: #161b27;
    --accent: #9F4F62;
    --accentLight: #ae4c63;
    --accentPale: #ddc2c9;
    --ordTask: #E5E5E5;
    --impTask: #E4D2D7;
    --doneTask: #D8D8D8;
    --lightGray: #D7DBEB;
    --darkGray: #737A92;
    --extraLightGray: #f0f0f4;
}

[data-theme="gray"] {
    --bg: #D0D0D0;
    --header: #5B5B5B;
    --mainLight: #F4F4F4;
    --mainDark: #3D3D3D;
    --accent: #EFA81F;
    --accentLight:#f5b22c;
    --accentPale: #ebd2a0;
    --primTaskBg: #D9D9D9;
    --ordTask: #E5E5E5;
    --impTask: #f9dea6;
    --doneTask: #D8D8D8;
    --lightGray: #D7DBEB;
    --darkGray: #737A92;
    --extraLightGray: #f0f0f4;
}
`;
