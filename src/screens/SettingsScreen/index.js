import React from 'react';

import { CssContainer } from '../../components/CssContainer';
import { UserLevel } from '../../containers/UserLevel';
import { ThemeSwitcher } from '../../containers/ThemeSwitcher';

export const SettingsScreen = () => {
  return (
    <CssContainer>
      <ThemeSwitcher />
      <UserLevel />
    </CssContainer>
  );
};
