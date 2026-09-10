1) пакеты надо брать инфу из API

пример

async function getPackageInfo(packageName) {
  const encodedName = encodeURIComponent(packageName);
  const url = `https://registry.npmjs.org/${encodedName}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    const latestVersion = data['dist-tags'].latest;
    const versionData = data.versions[latestVersion];
    
    console.log(`Пакет: ${versionData.name}`);
    console.log(`Версия: ${versionData.version}`);
    console.log(`Описание: ${versionData.description}`);
    console.log(`Зависимости:`, versionData.dependencies);
    
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}

getPackageInfo('express');