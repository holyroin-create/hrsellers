import cfg from '../../site.config.json';
export const SITE = cfg as typeof cfg;
export const ADS_ON = cfg.adsEnabled === true && cfg.googleCmpConfigured === true && /^ca-pub-\d+$/.test(cfg.adsensePublisherId);
