/**
 * @description automatically import public resources
 */

export default (app) => {
    
    // import the style files
    require("@/assets/css/normalize.css");
    require("@/assets/css/theme.scss");
    
    // import the common components in the "@/components/common" directory of the project
    const commonComp = require.context('@/components/common', false, /\.vue$/)
    commonComp.keys().forEach((fileName) => {
        const compConfig = commonComp(fileName)
        const compName = fileName.split('/').pop().replace(/\.\w+$/, '');
        app.component(compName, compConfig.default || compConfig);
    })
    
    // import the SVG icons in the "@/assets/svgs" directory
    const svgs = require.context('@/assets/svgs', false, /\.svg$/)
    const requireAll = reqCtx => reqCtx.keys().map(reqCtx);
    requireAll(svgs);
    
    app.use();
};