module.exports = {
    plugins: {
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 3,
            features: {
                'custom-properties': false,
            },
        },
    },
}

// use this below if you want to use tailwindcss only one or the other? or both?

// module.exports = {
//     plugins:
//         process.env.NODE_ENV === 'production'
//             ? [
//                 'postcss-flexbugs-fixes',
//                 [
//                     'postcss-preset-env',
//                     {
//                         autoprefixer: {
//                             flexbox: 'no-2009',
//                         },
//                         stage: 3,
//                         features: {
//                             'custom-properties': false,
//                         },
//                     },
//                 ],
//             ]
//             : [
//                 // No transformations in development
//             ],
// }
