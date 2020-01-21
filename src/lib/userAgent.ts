export const getMobileOperatingSystem = () => {
  const userAgent =
    navigator.userAgent.toLowerCase() || navigator.vendor.toLowerCase();
  if (/mobi/i.test(userAgent)) {
    return 'portable';
  }
  return 'desktop';
};

export const isPortable: () => boolean = () =>
  getMobileOperatingSystem() === 'portable';
