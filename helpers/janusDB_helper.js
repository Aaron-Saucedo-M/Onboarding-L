const Helper = require('@codeceptjs/helper');
const sql = require('mssql');

const td = {
    dbConf: {
        user: process.env.LEGACYDB_USER,
        password: process.env.LEGACYDB_PASSWORD,
        server: process.env.LEGACYDB_HOST,
        database: process.env.LEGACYDB_SCHEMA,
        port: parseInt(process.env.LEGACYDB_PORT),
        instanceName: process.env.LEGACYDB_INSTANCE,
        connectionTimeout: 60000,
        requestTimeout: 60000,
        encrypt: false,
        enableArithAbort: true,
    },
    query: "SELECT TOP 1 * FROM tblPerson (NOLOCK) WHERE Source IN ('bismarcktribune', 'chippewa', 'beatricedailysun', 'columbustelegram', 'fremonttribune')",
};

class JanusDBHelper extends Helper {
    async getJanusPersonRecord() {
        const pool = await sql.connect(td.dbConf);
        const result = await pool.request().query(td.query);
        return result.recordset[0];
    }
}
module.exports = JanusDBHelper;
