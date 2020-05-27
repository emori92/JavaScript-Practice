// reference: https://developer.mozilla.org/ja/docs/Web/JavaScript


console.log('Start!');


// variable
console.log(`-----------変数・定数------------`)
var test_1 = 'test';
let test_2 = 123;


// let は上書きで保存できない (varは可能)
var test_1 = 'JavaScript!'
// let test_2 = 456;  => SyntaxError

console.log(test_1);
console.log(test_2);


// let... 変数名を上書きできないが、値の変更は可能
test_2 += 1000;

console.log(test_2);


// constant
const TEST = 456;  // 定数は大文字かく


// data type
console.log('data type is ' + typeof TEST);


// array
console.log(`-----------配列------------`);

const array = [1, 2, 3];

console.log(array);
console.log(array[1])


const array_ = [
    ['red', 'blue', 'yellow'],
    ['green', 'pink', 'black']
];

console.log(array_);
console.log(array_[0]);
console.log(array_[1][2]);

// arrayは定数で定義しても値を追加できる
array.push(100);
console.log(array);

// arrayはテーブルで出力できる
console.table(array);


// object
console.log(`-----------連想配列------------`);

const member = {
    'name': 'emori',
    'height': 170,
    'hoby': 'soccer'
};

console.log(member);
console.log(member['name']);
console.log(member.hoby);


// 演算
console.log(`-----------演算------------`);

let a = 3;
let b = 8;

const c = a + b;
console.log(c);


a *= b;
console.log(a);


// if  (and: &&, or: ||)
console.log(`-----------条件分岐------------`);

if (a === 3) {
    console.log('a is' + a);
} else {
    console.log(`a isn't ${a}.`);
};


// for
console.log(`-----------for------------`);

for (let i = 0; i < 10; i++) {
    console.log(`${i}だよ！`);
};


// for of  (ES6)
let nums = [a, b, c]

for ( num of nums) {
    console.log(`${num}です！`);
};

/*
    for in... 問題あるので基本使わない
    switch... 基本はifを使う
*/


// arrow function
console.log(`-----------関数------------`);


// 書き方（無名関数）
(input) => {
    return `アロー関数です。引数は${input}です。`
}


// 定数などに代入する
let calcNumber = () => {
    // params
    let result = 0;
    let nums = [2, 5, 3, 6, 2, 5]
    // calcNumber
    for ( n of nums) {
        result += n;
    };

    return `計算結果は'${result}'です！`;
};

// 実行
let result = calcNumber();
console.log(result);


// 引数が1つなら、()を省略できる（ただし0は省略不可）
let getChar = text => {
    return text
};

let text = `This is my Pennnnnnn!!!!!!!`;
let char = getChar(text);
console.log(char)


// 処理が1行で済むなら{}も不要
let returnText = text => `'${text}'\nが引数です！`;

let char2 = returnText(text);
console.log(char2);


// とてもシンプルなアロー関数
hoge => hoge;


/* callback function... 無名関数を引数にとる */
// forEach... 値全部に引数の関数処理をする
array.forEach((e) => {
    console.log(e)
});

array.forEach(char => console.log(`${char}を出力しました！`));


// filter... 引数の関数の条件に沿ったものを返す
let new_num = array.filter(num => num > 10);

console.log(new_num);


// find... 条件にあったものを検索
let find_num = array.find(num => num === 3);

console.log(`'${find_num}'を見つけました！`);