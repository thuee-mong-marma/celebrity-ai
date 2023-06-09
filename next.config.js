// /** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                "babel-loader",
                {
                    loader: "react-svg-loader",
                    options: {
                        svgo: {
                            plugins: [{ removeTitle: false }],
                            floatPrecision: 2
                        }
                    }
                }
            ]
        });

        return config;
    }
};

module.exports = nextConfig;
