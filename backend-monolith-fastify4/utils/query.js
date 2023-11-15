async function db_query(query) {
  return new Promise((resolve, reject) => {
    fastify.pg.query(query, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = db_query;
