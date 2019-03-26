const uuid = require('uuid');
const crypto = require('crypto');
const fetch = require('node-fetch');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators
  const data = await fetch(
    `https://schneckenhof-api4.herokuapp.com/Settings`
  ).then(res => res.json());
  const type = 'settings';
  
  data.map(item => {
    item.id = item.id + 'settings';
    item.showOnHome = item.showOnHome ? item.showOnHome : false;
    item.homePageDescription = item.homePageDescription ? item.homePageDescription : item.shortDescription
    const contentDigest = crypto.createHash(`md5`).update(JSON.stringify(item)).digest(`hex`);
    const nodeBase = {
      parent: null,
      children: [],
      internal: {
        contentDigest,
        type,
      },
    };
    createNode(Object.assign({}, nodeBase, item))
  });
  return
}