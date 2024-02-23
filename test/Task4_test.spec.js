Feature('Task 4 - API');

/**
 * @Author Aaron
 * @Steps
 * - Try to access the page via API with valid pid and invalid pid
 * - Validate responses
 */
const api = new DataTable(['url', 'statusCode']);
api.add(['/virginia-gruchalski-obituary?pid=196167379', 200]);
api.add(['/virginia-gruchalski-obituary?pid=0', 404]);

Data(api).Scenario('Test API', async ({ I, current }) => {
    const response = await I.sendGetRequest(current.url);
    I.assert(response.status, current.statusCode);
}).tag('REST').tag('ProductionSafe').tag('JanusBeta');
