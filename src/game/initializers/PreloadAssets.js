import { Assets } from 'game/Assets';

const assetsConfigFile = require('config/assets/preload/index.json');

export const PreloadAssets = () => {
  return new Promise((resolve, reject) => {
    const promises = [];

    Object.entries(assetsConfigFile)
      .forEach(type => {
        const [typeName, configFilesArr] = type;

        configFilesArr
          .forEach(configFile => {
            promises.push(
              preloadAssetsByTypeAndFile(typeName, configFile)
            );
          })
      });

    Promise.all(promises)
      .then(() => resolve())
      .catch(e => reject(e));
  });
}

const preloadAssetsByTypeAndFile = (type, configFile) => {
  return new Promise((resolve, reject) => {
    import(`config/assets/preload/${configFile}`)
      .then((config) => {

        Object.entries(config)
          .forEach((keyValuePairs) => {
            const [name, data] = keyValuePairs;
            if (name === 'default') return;
            const {folder, images} = data;

            if (!Assets[type][name]) {
              Assets[type] = Object.assign(
                Assets[type],
                {
                  [name]: {}
                })
            }

            loadAllImagesByName(name, type, folder, images);
          });

        resolve();
      })
      .catch(e => reject(e));
  });
}

const loadAllImagesByName = (parentName, type, folder, images) => {
  return new Promise((resolve, reject) => {
    const promises = Object.entries(images);

    promises.map(data => {
      const [name, image] = data;

      return loadImage(folder + image)
        .then((loadedImage) => {
          Assets[type][parentName] = Object.assign(
            Assets[type][parentName],
            {
              [name]: loadedImage
            }
          )
        });
    });

    Promise.all(promises)
      .then(() => resolve())
      .catch(e => reject(e));
  });
}

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.src = src;
    resolve(image);
  })
}
