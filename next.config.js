/** @type {import('next').NextConfig} */

const env = {
  APP_ENV: (() => process.env.APP_ENV)(),
  APP_MODE: (() => process.env.APP_MODE)(),
  ROOT_URL: (() => process.env.ROOT_URL)(),
  API_URL: (() => process.env.API_URL)(),
  COOKIE_USER_NAME: (() => process.env.COOKIE_USER_NAME)(),
  APP_ID: (() => process.env.APP_ID)(),
  APP_SECRET: (() => process.env.APP_SECRET)(),
  SENTRY_DSN: (() => process.env.SENTRY_DSN)(),
};

const nextConfig = {
  experimental: {
    appDir: true,
    externalDir: true,
  },
  env,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name]_[hash].[ext]',
        publicPath: `/_next/static/files`,
        outputPath: 'static/files',
      },
    });

    return config;
  },
};

module.exports = nextConfig;
