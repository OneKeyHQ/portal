export interface OneKeyVersion {
  android: Android;
  ios: Ios;
  ext: Ext;
  bridge: Bridge;
  desktop: Desktop;
  classic: HardwarePlatform;
  mini: HardwarePlatform;
  touch: HardwarePlatform;
  pro: HardwarePlatform;
}

export type Version = [number, number, number];

export interface HardwarePlatform {
  firmware: Firmware[];
  ble: BLE[];
}

export interface Ios {
  url: string;
  version: Version;
}

export interface Android {
  url: string;
  googlePlay: string;
  version: Version;
}

export interface Ext {
  chrome?: string;
  firefox?: string;
  edge?: string;
}

export interface Firmware {
  required: boolean;
  version: Version;
  url: string;
  fingerprint: string;
  changelog: Changelog;
}

export interface BLE {
  required: boolean;
  version: Version;
  url: string;
  webUpdate: string;
  fingerprint: string;
  fingerprintWeb: string;
  changelog: Changelog;
}

export interface Bridge {
  version: Version;
  linux32Rpm: string;
  linux64Rpm: string;
  linux32Deb: string;
  linux64Deb: string;
  win: string;
  mac: string;
  sha256SumAsc?: string;
  changelog: Changelog;
}

export interface Desktop {
  version: Version;
  linux: string;
  macX64: string;
  macARM: string;
  win: string;
  sha256SumAsc?: string;
  changelog: Changelog;
}

export interface Changelog {
  'zh-CN': string;
  'en-US': string;
}
