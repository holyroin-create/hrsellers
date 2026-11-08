import cfg from '../../site.config.json';
export const SITE = cfg;
export const ADS_ON = cfg.adsEnabled === true && cfg.googleCmpConfigured === true && /^ca-pub-\d+$/.test(cfg.adsensePublisherId);
export const DEV_PLACEHOLDERS = process.env.ALLOW_PLACEHOLDERS === '1';
