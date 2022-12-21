declare module "*.jpg" {
    const src: string;
    export default src;
}

declare module "*.png" {
    const src: string;
    export default src;
}

declare module "*.jpeg" {
    const src: string;
    export default src;
}

declare module "*.svg?url" {
    const src: string;
    export default src;
}

declare module "*.svg" {
    import React from "react";
    const ReactComponent: React.SFCFactory<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

declare module "*.module.css";
declare module "*.module.scss";