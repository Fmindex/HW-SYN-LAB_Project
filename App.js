/* @flow */

import { I18nextProvider, translate } from 'react-i18next';

import React from 'react';
import Test from './app/device/weathersensor-new';
import Test2 from './app/device/doorsensor';
import i18n from './i18n';

const WrappedTab = () => {
  return <Test />;
};
const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false
})(WrappedTab);

export default class App extends React.Component {
  render(): React.Element<I18nextProvider>  {
    return (
      <I18nextProvider i18n={i18n}>
        <ReloadAppOnLanguageChange/>
      </I18nextProvider>
    );
  }
}
