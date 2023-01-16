// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// mp3再生のため導入
//= require audiojs



// 非同期通信のため導入
//注意！！！
//非同期のため導入したがタスク削除のlink_toのmethod: :deleteが、GETとしてHTTPリクエストされる問題が発生
//HTMLはGETとPOSTしか対応していない。後のHTTPはJSファイルが送信している。
//調べた結果送信時にJSファイルが関与していない可能性がある。現状はこれ以上わからない。
//原因特定できなければ非同期通信は非採用にする。現状はコメントアウトし現状維持
//import "jquery";