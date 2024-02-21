

const { pool } = require('./mysql')


class NMR {
    async list() {
        const [results, fields] = await pool.query('SELECT * FROM `nmr` ');

        return results;
    }
    async insert(params) {
        const str= `insert into nmr (\`test_point\`, \`amplitude\`) values("${params.test_point}", ${params.amplitude})`;
        const [results, fields] = await pool.query(str);
        // console.log('r is ', results);

        return results;
    }
}

const nmr = new NMR()

// nmr.list()
exports.nmr = nmr