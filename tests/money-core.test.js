const assert = require('assert');
const toMinor = n => Math.round((Number(n)||0)*100);
const fromMinor = n => (Number(n)||0)/100;
function recurringForMonth(r, month){
  if(!r.active || r.start > month || (r.end && r.end < month)) return null;
  const last = new Date(+month.slice(0,4), +month.slice(5,7), 0).getDate();
  const day = Math.min(Math.max(+r.day||1,1), last);
  return { id:`rec:${r.id}:${month}`, amountMinor:r.amountMinor, date:`${month}-${String(day).padStart(2,'0')}` };
}
assert.equal(toMinor(12.34), 1234);
assert.equal(toMinor(0.1 + 0.2), 30);
assert.equal(fromMinor(1234), 12.34);
const salary={id:'salary',amountMinor:1500000,day:10,start:'2026-01',active:true};
assert.deepEqual(recurringForMonth(salary,'2026-08'),{id:'rec:salary:2026-08',amountMinor:1500000,date:'2026-08-10'});
assert.equal(recurringForMonth({...salary,start:'2026-09'},'2026-08'),null);
assert.equal(recurringForMonth({...salary,end:'2026-07'},'2026-08'),null);
console.log('money-core tests passed');
