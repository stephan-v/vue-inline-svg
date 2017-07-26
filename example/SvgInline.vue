<template>
    <div :class="classes" v-html="svg"></div>
</template>

<script>
    /* eslint-disable */
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            inline: {
                type: Boolean,
                default: true
            }
        },

        data() {
            return {
                svg: ''
            }
        },

        created() {
            if (this.name.indexOf('.svg') > -1) {
                throw new TypeError(`Do not use the svg extension for: ${this.name}`);
            }

            const svg = this.$root.icons;
            this.svg = svg.get(svg.kebabToCamelCase(this.name));
        },

        computed: {
            classes() {
                const inline = this.inline ? 'inline' : '';
                const name = this.name.slice(this.name.lastIndexOf('/') + 1);

                return `svg-icon svg-${name} ${inline}`;
            }
        }
    };
</script>
