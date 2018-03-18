[JavaScript Promiseの本](http://azu.github.io/promises-book/)をやってます。

---

# メモ

## Promiseとは
* 非同期処理を抽象化したオブジェクトとそれを操作する仕組みのこと
* 並列/並行処理におけるプログラミング言語のデザインの一種

### 非同期処理におけるCallbackとの違い
* Callbackは、あくまでコーディングルールでしか書き方を制約できない。そのため、異なる書き方もできてしまう
* Promiseは、非同期に対するオブジェクトとルールを仕様化して、 統一的なインターフェースで書くようになっており、それ以外の書き方はできない

## Promiseの状態
3つの状態がある

* Pending
  * Fulfilledまたは、Rejectedではない時。promiseオブジェクトが作成された初期状態など

* Fulfilled
  * resolve(成功)した時
  
* Rejected
  * reject(失敗)した時
  
promiseオブジェクトの状態は、一度PendingからFulfilledやRejectedになると、それ以降変化しない。このことをSettled(不変の)と表現する。この特性のため、`.then`で登録した関数が呼ばれるのは1回限りであることが明確である 

## Promiseオブジェクトの生成
* `new Promise()`
* `Promise.resolve()`: `new Promise()`のショートカットメソッド。渡した値でFulfilledされるpromiseオブジェクトを返すメソッド
* `Promise.reject()`: `new Promise()`のショートカットメソッド。渡した値でRejectedされるpromiseオブジェクトを返すメソッド

## thenableなオブジェクト
* promiseっぽいオブジェクトのこと
* 具体的には、`.then`を持っているオブジェクトのことを指す

## Promiseは非同期
* `Promiseは常に非同期`で処理されるということが仕様で定められている
* そのため、同期と非同期が混在しないように、`setTimeout`のような明示的に非同期処理にするためのコードが不要になる 

## `Promise#then` の機能
* コールバックとなる関数を登録する
* 受け取った値を変化させて別のpromiseオブジェクトを生成する (常に新しいpromiseオブジェクトを返す)

## `Promise#catch` の機能
* `promise.then(undefined, onRejected);` のエイリアスとなるメソッド
