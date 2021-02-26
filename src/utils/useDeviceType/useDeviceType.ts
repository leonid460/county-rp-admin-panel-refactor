import { useMediaQuery } from './useMediaQuery';
import { DefaultTheme } from 'styled-components';

export function useDeviceType() {
  const isMobileS = useMediaQuery((theme) => theme.device.mobileS);
  const isMobileM = useMediaQuery((theme) => theme.device.mobileM);
  const isMobileL = useMediaQuery((theme) => theme.device.mobileL);
  const isTablet = useMediaQuery((theme) => theme.device.tablet);
  const isLaptop = useMediaQuery((theme) => theme.device.laptop);
  const isLaptopL = useMediaQuery((theme) => theme.device.laptopL);
  const isDesktop = useMediaQuery((theme) => theme.device.desktop);
  const isDesktopL = useMediaQuery((theme) => theme.device.desktopL);

  return {
    isDesktopL,
    isDesktop: isDesktop && !isDesktopL,
    isLaptopL: isLaptopL && !isDesktop && !isDesktopL,
    isLaptop: isLaptop && !isLaptopL && !isDesktop && !isDesktopL,
    isTablet: isTablet && !isLaptop && !isLaptopL && !isDesktop && !isDesktopL,
    isMobileL: isMobileL && !isTablet && !isLaptop && !isLaptopL && !isDesktop && !isDesktopL,
    isMobileM:
      isMobileM && !isMobileL && !isTablet && !isLaptop && !isLaptopL && !isDesktop && !isDesktopL,
    isMobileS:
      isMobileS &&
      !isMobileM &&
      !isMobileL &&
      !isTablet &&
      !isLaptop &&
      !isLaptopL &&
      !isDesktop &&
      !isDesktopL
  };
}

export function useDeviceTypeName(): keyof DefaultTheme['device'] {
  const deviceTypes = useDeviceType();

  if (deviceTypes.isMobileS) {
    return 'mobileS';
  }

  if (deviceTypes.isMobileM) {
    return 'mobileM';
  }

  if (deviceTypes.isMobileL) {
    return 'mobileL';
  }

  if (deviceTypes.isTablet) {
    return 'tablet';
  }

  if (deviceTypes.isLaptop) {
    return 'laptop';
  }

  if (deviceTypes.isLaptopL) {
    return 'laptopL';
  }

  if (deviceTypes.isDesktop) {
    return 'desktop';
  }

  if (deviceTypes.isDesktopL) {
    return 'desktopL';
  }
}
