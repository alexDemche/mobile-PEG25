import React, { useEffect, useState } from 'react';

import { translate } from '../../i18n';
import { StyledSafeAreaView } from './styles';
import { AppText } from '../AppText';

export const PopupUserPoint = () => {
  const [showPointPopup, setShowPointPopup] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowPointPopup(false), 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      {showPointPopup && (
        <StyledSafeAreaView>
          <AppText fontSize={20} fontWeight={'bold'} padding={10}>
            + 1 {translate('levels.point')}
          </AppText>
        </StyledSafeAreaView>
      )}
    </>
  );
};
