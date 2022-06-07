import { useDownloadData, useOneKeyVersion } from '../../../../data';

export function useDownloadPanelData() {
  const downloadData = useDownloadData();
  const { data: oneKeyVersionData } = useOneKeyVersion();

  const tabs = [
    downloadData.desktop,
    downloadData.mobile,
    downloadData.browserExtension,
    downloadData.web,
  ];

  console.log(oneKeyVersionData);

  return {
    tabs,
    desktop: downloadData.desktop,
    mobile: downloadData.mobile,
    browserExtension: downloadData.browserExtension,
    web: downloadData.web,
    oneKeyVersionData,
  };
}
