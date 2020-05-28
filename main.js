// reference: https://developer.mozilla.org/ja/docs/Web/JavaScript

'user strict';  // コード規範を厳しくする


// variable
console.log(`-----------変数・定数------------`)
var test_1 = 'test';
let test_2 = 123;


// let は上書きで保存できない (varは可能)
var test_1 = 'JavaScript!';
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
console.log(array[1]);


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
    name: 'emori',
    height: 170,
    hoby: 'soccer'
};

console.log(member);
console.log(member['name']);
console.log(member.hoby);


// objectは中に関数を作れる
let sample_object = {
    // parameter
    name: 'objectの名前',
    // func
    getInput(input) {
        return `オブジェクト関数の引数は'${input}'です`;
    }
};

console.log(sample_object.getInput(sample_object['name']));


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
let nums = [a, b, c];

for ( num of nums) {
    console.log(`${num}です！`);
};


 // objectの場合
for ( para of Object.values(member) ) {
    console.log(para);
};


/*
    for in... 問題あるので基本使わない
    switch... 基本はifを使う
*/


// arrow function
console.log(`-----------関数------------`);


// 書き方（無名関数）
(input) => {
    return `アロー関数です。引数は${input}です。`;
}


// 定数などに代入する
let calcNumber = () => {
    // params
    let result = 0;
    let nums = [2, 5, 3, 6, 2, 5];
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
    return text;
};

let text = `This is my Pennnnnnn!!!!!!!`;
let char = getChar(text);
console.log(char);


// 処理が1行で済むなら{}も不要
let returnText = text => `'${text}' が引数です！`;

let char2 = returnText(text);
console.log(char2);


// とてもシンプルなアロー関数
hoge => hoge;


// printで出力できるようにする
const print = char => console.log(char);

/* callback function... 無名関数を引数にとる */
// forEach... 値全部に引数の関数処理をする
array.forEach((e) => {
    console.log(e);
});

array.forEach(char => console.log(`${char}を出力しました！`));


// filter... 引数の関数の条件に沿ったものを返す
let new_num = array.filter(num => num > 10);

console.log(new_num);


// find... 条件にあったものを検索
let find_num = array.find(num => num === 3);

console.log(`'${find_num}'を見つけました！`);



/*
    JavaScriptは大きく以下の流れで処理を行う

    1. 要素を取得する
    2. イベントを指定すr
    3. 処理を書く
*/

// 1. 要素の取得
let first = document.getElementById('first');

console.log(first);

// クラスの取得
let second = document.querySelector('.second');
let second_list = document.querySelectorAll('.second');

console.log(second);
console.table(second_list);


// 2. イベント
let addText = () => {
    let btn = document.getElementById('text-1');
    btn.classList.add('red');
    btn.textContent = '追加しました！';
}

document.getElementById('btn-2').onclick = () => {
    let btn = document.getElementById('text-2');
    btn.classList.add('blue');
    btn.textContent = '追加しました！';
}

/* 上記の記法は非推奨 */
let new_btn = document.getElementById('btn-3');

new_btn.addEventListener('click', () => {
    let btn = document.getElementById('text-3');
    btn.classList.add('green');
    btn.textContent = '追加しました！';
});


// 3. クラスの付け加え
first.classList.add('red');
// first.classList.remove('red');
second.classList.toggle('bule');


// 属性
first.type = 'hoge';
first.placeholder = 'fuga';
first.name = 'first';

print(first);

/* el.setAttribute  (同じく属性を設定できるが、上記を推奨) */
// first.setAttribute('type', 'hoge');


// 要素を作成
let anchor = document.createElement('a');

anchor.textContent = 'emori92 link';  // テキストを追加
anchor.href = 'https://www.github.com/emori92/';
anchor.target = 'blank';

print(anchor);


// 要素の追加
let target = document.getElementById('target');
let newDiv = document.createElement('div');
newDiv.id = 'new';
newDiv.classList.add('blue');
newDiv.textContent = '新しいdiv';

target.appendChild(newDiv);  // 小要素に作成
target.parentNode.appendChild(newDiv);  // 親要素に作成

print(target);