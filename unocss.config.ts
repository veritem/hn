// eslint-disable-next-line no-restricted-imports
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

export const defaultConfig = defineConfig<{}>({
    details: true,
    presets: [
        presetAttributify(),
        presetIcons(),
        presetUno(),
    ],
    transformers: [
        transformerVariantGroup(),
        transformerDirectives(),
    ],
})

export default defineConfig<{}>({
    ...defaultConfig,
    presets: [
        ...defaultConfig.presets as any,
        presetWebFonts({
            fonts: {
                sans: 'Inter',
                mono: 'IBM Plex Mono',
            },
        }),
    ],
})
