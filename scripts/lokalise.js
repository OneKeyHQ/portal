const { LokaliseApi } = require('@lokalise/node-api');
const download = require('download');
const extract = require('extract-zip');
const path = require('path');
const fs = require('fs');

const apiKey = 'd9a77d44b24a2c9de412520a234eb839962902c3';
const projectName = 'Portal';
const scriptPath = (p) => path.join(__dirname, p);
const languages = [];

async function main() {
  const lokaliseApi = new LokaliseApi({
    apiKey,
  });

  const projects = await lokaliseApi.projects().list();

  const project = projects.items.find(
    (project) => project.name === projectName,
  );
  const { project_id: projectId } = project;

  try {
    const response = await lokaliseApi.files().download(projectId, {
      format: 'json',
      directory_prefix: '%LANG_ISO%',
      placeholder_format: 'i18n',
    });

    await download(response.bundle_url, scriptPath('./.tmp/zip'));

    await extract(scriptPath(`./.tmp/zip/${projectName}-locale.zip`), {
      dir: scriptPath('../locales'),
    });

    fs.rmSync(scriptPath('./.tmp'), { recursive: true, force: true });

    fs.readdirSync(scriptPath('../locales')).forEach((file) => {
      const lang = file.split('.')[0];

      // en.json => en
      if (lang) {
        languages.push(lang);
      }
    });

    fs.writeFileSync(
      scriptPath(`../languages.js`),
      `module.exports = {
        languages: ${JSON.stringify(languages)},
        defaultLanguage: "en",
      };`,
    );
  } catch (e) {
    console.log(e);
  }
}

try {
  main();
} catch (e) {
  console.log(e);
}
