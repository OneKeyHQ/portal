export interface OneKeyVersion {
  apk: Apk;
  ios: Ios;
  stm32: Stm32;
  nrf: Nrf;
  suite: Suite;
  firmware: Stm32[];
  miniFirmware: Stm32[];
  ble: Nrf[];
  bridge: Bridge;
}

export interface Apk {
  versionCode: string;
  versionName: string;
  url: string;
  size: string;
  changelogCn: string;
  changelogEn: string;
  sha256SumAsc: string;
}

export interface Nrf {
  required: boolean;
  version: string;
  url: string;
  webUpdate: string;
  changelogCn: string;
  changelogEn: string;
}

export interface Bridge {
  version: string;
  linux32Rpm: string;
  linux64Rpm: string;
  linux32Deb: string;
  linux64Deb: string;
  win: string;
  mac: string;
  sha256SumAsc: string;
  changelogCn: string;
  changelogEn: string;
}

export interface Stm32 {
  required: boolean;
  version: number[];
  bootloaderVersion: number[];
  minBridgeVersion: number[];
  minFirmwareVersion: number[];
  minBootloaderVersion: number[];
  url: string;
  urlBitcoinonly: string;
  fingerprint: string;
  fingerprintBitcoinonly: string;
  changelogCn: string;
  changelogEn: string;
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
  forcedVersion: string;
  url: string;
  messageCn: string;
  messageEn: string;
}

export interface Suite {
  version: string;
  linux: string;
  macDmg: string;
  macZip: string;
  win: string;
  winZadig: string;
  sha256SumAsc: string;
  changelogCn: string;
  changelogEn: string;
}
