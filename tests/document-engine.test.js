const assert=require('assert');
const D=require('../document-engine.js');
const rows=D.parseLines([
  '20.08.2026 פוינט רמת גן ₪52.00',
  '19.08.2026 WOLT ₪86.40',
  '18.08.2026 סופר פארם ₪129.90',
  '17.08.2026 זיכוי WOLT ₪20.00',
  'סה״כ לחיוב ₪248.30'
],new Date('2026-08-23T12:00:00'));
assert.equal(rows.length,4);
assert.equal(rows[0].category,'סיגריות ומוצרי טבק');
assert.equal(rows[1].category,'מסעדות ובתי קפה');
assert.equal(rows[2].category,'בריאות');
assert.equal(rows[3].type,'refund');
const s=D.summarize(rows);
assert.equal(s.totalMinor,24830);
assert.equal(s.byCategory['סיגריות ומוצרי טבק'],5200);
assert.equal(s.byCategory['מסעדות ובתי קפה'],6640);
assert.equal(D.statementTotal('סה״כ לחיוב ₪248.30'),24830);
assert.equal(D.detectSource('אמריקן אקספרס זהב כרטיס 7041'),'American Express • 7041');
assert.equal(D.parseDate('20/08',new Date('2026-08-23')),'2026-08-20');
assert.equal(D.fingerprint(rows[0],'American Express • 7041'),D.fingerprint({...rows[0]},'American Express • 7041'));
console.log('document-engine tests passed');