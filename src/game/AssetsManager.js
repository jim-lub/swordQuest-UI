export const Assets = {
  ICONS: {},
  SPRITESHEETS: {}
}

const configFile = require('config/assets/preload/spritesheets.json');

export const InitializeAssets = () => {
  return new Promise((resolve, reject) => {
    let preloadList = [
      preload('config/assets/preload/spritesheets.json', 'SPRITESHEETS'),
      preload('config/assets/preload/spritesheets.json', 'ICONS')
    ];

    Promise.all(preloadList)
    .then(() => {
      resolve();
    })
    .catch(e => reject(e));

  });
}

const preload = (path, type) => {
  return new Promise((resolve, reject) => {
    const data = configFile;

    const entities = Object.entries(data);

    entities.forEach(entity => {
      const folder = entity[1].folder;
      const images = entity[1].images;
      _loadImageObject(folder, images).then((imagesObj) => {
        Assets[type] = Object.assign(Assets[type],
          {
            [entity[0]]: imagesObj
          }
        );
      });
    });

    Promise.all(entities)
    .then(() => resolve())
    .catch(e => reject(e));
  });
}

function _loadImageObject(folder, images) {
  return new Promise((resolve, reject) => {
    const promises = Object.entries(images);
    let returnObj = {};

    promises.map(image => {
      return _loadImage(folder + image[1])
      .then((img) => {
        returnObj = Object.assign(returnObj, {[image[0]]: img});
        resolve(returnObj);
      })
      .catch(e => reject(e));
    });
    Promise.all(promises)
    .then(() => resolve())
    .catch(e => reject(e));
  });
}

function _loadImage(src) {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.src = src;
    resolve(image);
  });
}
