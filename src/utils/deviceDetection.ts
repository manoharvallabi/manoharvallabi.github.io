/**
 * Device detection utility
 * Detects device type based on user agent and capabilities
 */

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

/**
 * Detects the device type based on user agent and touch capabilities
 * @returns 'mobile' | 'tablet' | 'desktop'
 */
export const getDeviceType = (): DeviceType => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  
  // Check for mobile devices
  const isMobileDevice = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
  
  // Check for tablet devices
  const isTabletDevice = /ipad|android(?!.*mobile)|tablet|playbook|silk/i.test(userAgent.toLowerCase());
  
  // Check for touch capability
  const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // Check screen size as fallback
  const screenWidth = window.innerWidth;
  
  // Primary detection: User agent
  if (isMobileDevice && !isTabletDevice) {
    return 'mobile';
  }
  
  if (isTabletDevice) {
    return 'tablet';
  }
  
  // Secondary detection: Touch capability + screen size
  if (hasTouchScreen && screenWidth < 768) {
    return 'mobile';
  }
  
  if (hasTouchScreen && screenWidth >= 768 && screenWidth < 1024) {
    return 'tablet';
  }
  
  // Default to desktop for larger screens without touch
  return 'desktop';
};

/**
 * Checks if the device is mobile
 */
export const isMobile = (): boolean => {
  return getDeviceType() === 'mobile';
};

/**
 * Checks if the device is tablet
 */
export const isTablet = (): boolean => {
  return getDeviceType() === 'tablet';
};

/**
 * Checks if the device is desktop
 */
export const isDesktop = (): boolean => {
  return getDeviceType() === 'desktop';
};

/**
 * Checks if the device should show background images
 * (tablets and desktops, but not mobiles)
 */
export const shouldShowBackground = (): boolean => {
  const deviceType = getDeviceType();
  return deviceType === 'tablet' || deviceType === 'desktop';
};

