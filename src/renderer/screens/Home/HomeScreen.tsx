import React, { useMemo, useState } from 'react';
import './HomeScreen.scss';
import { cn } from '@bem-react/classname';
import { clipboard } from 'electron';
import { notification } from 'antd';
import { SigningInputSection, SigningOutputSection } from '@components/home';
import { isEmpty } from '@utils/isEmpty';
import { ReactComponent as Logo } from '@assets/img/logo.svg';

const CnHomeScreen = cn('home-screen');
const Context = React.createContext({ name: 'Default' });

/* eslint-disable @typescript-eslint/no-var-requires */
const { mnemonicToSeedSync } = require('../../../node_modules/bip39');
const HDKey = require('../../../node_modules/hdkey');
const ethers = require('../../../node_modules/ethers');
/* eslint-enable */

/**
 * @description HomeScreen
 */
const HomeScreen: React.FC = () => {
  const [mnemonic, setMnemonic] = useState('');
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [address, setAddress] = useState('');

  const isOutputVisible = !isEmpty(address) && !isEmpty(signature);

  const [api, contextHolder] = notification.useNotification();
  const contextValue = useMemo(() => ({ name: 'TOAST' }), []);

  const openNotification = () => {
    api.open({ icon: undefined, message: 'Скопировано' });
  };

  const signCopy = () => {
    clipboard.writeText(signature);
    openNotification();
  };

  /**
   * @description формируем адрес и подпись сообщения
   */
  const onSign = async () => {
    const seed = mnemonicToSeedSync(mnemonic.trim());
    const node = HDKey.fromMasterSeed(seed);
    const derivedNode = node.derive("m/44'/60'/0'/0/0");
    const wallet = new ethers.Wallet(derivedNode.privateKey.toString('hex'));
    const { address: accountAddress } = wallet;
    wallet.signMessage(message.trim()).then((res: string) => setSignature(res));
    setAddress(accountAddress);
  };

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div className={CnHomeScreen()}>
        <div className={CnHomeScreen('logo')}>
          <Logo />
        </div>
        <div className={CnHomeScreen('card')}>
          <SigningInputSection
            mnemonic={mnemonic}
            message={message}
            setMnemonic={setMnemonic}
            setMessage={setMessage}
            onSign={onSign}
          />
          {isOutputVisible && (
            <SigningOutputSection address={address} signature={signature} onCopyPress={signCopy} />
          )}
        </div>
      </div>
    </Context.Provider>
  );
};

export default HomeScreen;
