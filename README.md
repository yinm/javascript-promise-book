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
  
promiseオブジェクトの状態は、一度PendingからFulfilledやRejectedになると、それ以降変化しない
このことをSettled(不変の)と表現する
この特性のため、`.then`で登録した関数が呼ばれるのは1回限りであることが明確である 
