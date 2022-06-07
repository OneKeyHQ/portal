import { FC, ReactNode } from 'react';

import { detect } from 'detect-browser';

import { Divider } from '../../../../../base/Divider';
import { Flex } from '../../../../../base/Flex';
import { AppleIcon, LinuxIcon, WindowsIcon } from '../../../../../base/Icon';
import { DownloadButton } from '../../DownloadButton';
import { FAQ } from '../../FAQ';

import { Title } from './Title';

export interface DesktopContentProps {
  children?: ReactNode;
}

const faq = {
  title: '',
  questions: [
    {
      text: 'Package checksum.',
    },
  ],
};

const buttons = [
  {
    text: 'macOS',
    icon: AppleIcon,
    infos: ['v23.0.1, for macOS 10.8+'],
    systemType: 'mac',
  },
  {
    text: 'Windows',
    icon: WindowsIcon,
    infos: ['v23.0.1, for Windows 10+'],
    systemType: 'windows',
  },
  {
    text: 'Linux',
    icon: LinuxIcon,
    infos: ['v23.0.1, for Ubuntu 12.04+', 'Fedora 21+, Debian 8+'],
    systemType: 'linux',
  },
];

const title = ['Download', 'OneKey.'];

export const DesktopContent: FC<DesktopContentProps> = (props) => {
  const { children } = props;
  const detectResult = detect();

  return (
    <>
      <Flex
        xs={{
          flex: 1,
          gap: 32,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Title text={title} />

        <Flex xs={{ gap: 16 }}>
          {buttons.map((item) => (
            <DownloadButton
              key={item.text}
              icon={item.icon}
              text={item.text}
              information={item.infos}
              buttonType={
                detectResult?.os?.toLowerCase().includes(item.systemType)
                  ? 'filled'
                  : 'outlined'
              }
            />
          ))}
        </Flex>
      </Flex>

      <Divider />

      {faq && <FAQ title={faq.title} questions={faq.questions} />}

      {children}
    </>
  );
};
