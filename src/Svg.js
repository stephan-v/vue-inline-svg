export default class Svg {
    constructor(path) {
        const icons = require.context('example/images', true, /\.svg$/);

        const svgIcons = {};

        for (let i = 0; i < icons.keys().length; i += 1) {
            const icon = icons.keys()[i];

            const lastSlashIndex = icon.lastIndexOf('/');
            let name = icon.substring(lastSlashIndex + 1).replace('.svg', '');

            // CamelCase the hyphenated SVG names.
            name = this.kebabToCamelCase(name);

            svgIcons[name] = icons(icon);
        }

        this.icons = svgIcons;
    }

    get(icon) {
        if (this.icons[icon]) {
            return this.icons[icon];
        }

        throw new ReferenceError(
            `SVG could not be found in the loaded Javascript icons object: ${icon}`
        );
    }

    kebabToCamelCase(name) {
        return name.replace(/-([a-z])/g, (key, value) => value.toUpperCase());
    }
}
