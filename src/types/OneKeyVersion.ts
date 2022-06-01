export interface OneKeyVersion {
  APK: Apk;
  ios: Ios;
  stm32: Stm32;
  nrf: Nrf;
  suite: Suite;
  firmware: Stm32[];
  mini_firmware: Stm32[];
  ble: Nrf[];
  bridge: Bridge;
}

export interface Apk {
  versionCode: string;
  versionName: string;
  url: string;
  size: string;
  changelog_cn: string;
  changelog_en: string;
  sha256sum_asc: string;
}

export interface Nrf {
  required: boolean;
  version: string;
  url: string;
  web_update: string;
  changelog_cn: string;
  changelog_en: string;
}

export interface Bridge {
  version: string;
  linux_32_rpm: string;
  linux_64_rpm: string;
  linux_32_deb: string;
  linux_64_deb: string;
  win: string;
  mac: string;
  sha256sum_asc: string;
  changelog_cn: string;
  changelog_en: string;
}

export interface Stm32 {
  required: boolean;
  version: number[];
  bootloader_version: number[];
  min_bridge_version: number[];
  min_firmware_version: number[];
  min_bootloader_version: number[];
  url: string;
  url_bitcoinonly: string;
  fingerprint: string;
  fingerprint_bitcoinonly: string;
  changelog_cn: string;
  changelog_en: string;
}

export interface Ios {
  iOSMainNet: IOSMainNet;
  testFlight: TestFlight;
}

export interface IOSMainNet {
  fir: string;
  url: string;
  changelog: string;
  version: string;
  build: string;
}

export interface TestFlight {
  version: string;
  forced_version: string;
  url: string;
  message_cn: string;
  message_en: string;
}

export interface Suite {
  version: string;
  linux: string;
  mac_dmg: string;
  mac_zip: string;
  win: string;
  win_zadig: string;
  sha256sum_asc: string;
  changelog_cn: string;
  changelog_en: string;
}
