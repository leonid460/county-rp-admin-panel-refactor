import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { ITheme } from 'types';

interface IBrowserProcess extends NodeJS.Process {
  browser: boolean;
}

function checkMediaQuery(queryText: string) {
  if (!(process as IBrowserProcess).browser) {
    return false;
  }

  return window.matchMedia(queryText).matches;
}

export function useMediaQuery(query: (theme: ITheme) => string): boolean {
  const [mediaQueryMatch, setMediaQueryMatch] = useState(false);
  const theme = useTheme();
  const mediaQueryString = query(theme);

  useEffect(() => {
    const onWindowWidthChange = () => {
      setMediaQueryMatch(checkMediaQuery(mediaQueryString));
    };

    if ((process as IBrowserProcess).browser) {
      window.addEventListener('resize', onWindowWidthChange);
      onWindowWidthChange();
    }

    return () => {
      window.removeEventListener('resize', onWindowWidthChange);
    };
  }, [mediaQueryString]);

  return mediaQueryMatch;
}
