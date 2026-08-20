const assert=require('assert');
const toMinor=n=>Math.round((Number(n)||0)*100);
const fromMinor=n=>(Number(n)||0)/100;
function recurringForMonth(r,month){if(!r.active||r.start>month||(r.end&&r.end<month))return null;const last=new Date(+month.slice(0,4),+month.slice(5,7),0).getDate(),day=Math.min(Math.max(+r.day||1,1),last),date=`${month}-${String(day).padStart(2,'0')}`;return{id:`rec:${r.id}:${month}`,amountMinor:r.amountMinor,occurredDate:date,cashflowDate:date}}
function calc(list,month,basis='cashflow'){const key=basis==='activity'?'occurredDate':'cashflowDate',a=list.filter(x=>(x[key]||x.date||'').slice(0,7)===month),sum=type=>a.filter(x=>x.type===type).reduce((n,x)=>n+x.amountMinor,0);return{inc:sum('income'),exp:sum('expense')}}
assert.equal(toMinor(12.34),1234);assert.equal(toMinor(.1+.2),30);assert.equal(fromMinor(1234),12.34);
const salary={id:'salary',amountMinor:1500000,day:1,start:'2026-01',active:true};assert.deepEqual(recurringForMonth(salary,'2026-08'),{id:'rec:salary:2026-08',amountMinor:1500000,occurredDate:'2026-08-01',cashflowDate:'2026-08-01'});
const tx=[{type:'income',amountMinor:1500000,occurredDate:'2026-08-01',cashflowDate:'2026-08-01'},{type:'expense',amountMinor:400000,occurredDate:'2026-07-25',cashflowDate:'2026-08-10'},{type:'expense',amountMinor:100000,occurredDate:'2026-08-05',cashflowDate:'2026-08-10'}];
assert.deepEqual(calc(tx,'2026-08'),{inc:1500000,exp:500000});assert.deepEqual(calc(tx,'2026-07'),{inc:0,exp:0});assert.deepEqual(calc(tx,'2026-07','activity'),{inc:0,exp:400000});assert.deepEqual(calc(tx,'2026-08','activity'),{inc:1500000,exp:100000});
console.log('money-core cashflow tests passed');