//  変数と定数
const TAX = 1.1;
var price = 100;
console.log(price * TAX)

// テンプレート文字列
let name = 'ken';
let str = `good morining ${name}. Have a nice day!`;
// テンプレート文字列ではシングルクォーテーションやダブルクォーテーションではなくバックティック文字(` `)で囲む!!!
console.log(str);

// 配列
let data = ['English','Japanese','Russian','Spanish'];
for (var i = 0,len = data.length ; i < len; i++){
  console.log(data[i]);
}
console.log(data);


// 連想配列、オブジェクト
let medal = {gold : 1, silver : 2, bronze : 3};
// どっちの書き方でもいい
console.log(medal.gold);
console.log(medal['silver']);
