const uuid = require('uuid');
const crypto = require('crypto');
const fetch = require('node-fetch');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators
  const data = await fetch(
    `https://schneckenhof-api4.herokuapp.com/News`
  ).then(res => res.json());
  const type = 'News';
  data.map(item => {
    item.id = item.id + 'news';
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