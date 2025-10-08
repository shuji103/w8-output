
// 要素の取得
const $doc = document;
const $signInButton = $doc.getElementsByClassName("js-button");
const $inputEmail = $doc.getElementsByClassName("js-email");
const $inputPassword = $doc.getElementsByClassName("js-password");
const $form = $doc.getElementById("js-form")

// 関数の定義 (フォーム送信イベント時の処理)
const SubmitHandler = (e) => {
    // submitのフォーム送信・リロードを無効化
    e.preventDefault();
    // データの取得
    //inputタグのvalueを取得
    const inputEmailValue = $inputEmail[0].value;
    const inputPasswordValue = $inputPassword[0].value;

    // データの保存
    // setItem(キー,値)
    localStorage.setItem("email", inputEmailValue);
    localStorage.setItem("password", inputPasswordValue);
}

// 関数の定義 (ロードイベント時の処理)
const LoadHandler = () => {

    // 保存したデータの取得
    // getItem("取得するデータのキー")
    const savedEmailValue = localStorage.getItem("email");
    const savedPasswordValue = localStorage.getItem("password");
    console.log(savedEmailValue);
    console.log(savedPasswordValue);
    // 保存したデータがあれば、emailとpasswordを自動入力
    if (savedEmailValue && savedPasswordValue) {
        // inputタグの値を、保存したデータにする
        $inputEmail[0].value = savedEmailValue;
        $inputPassword[0].value = savedPasswordValue;
    }
}

// 実行部分 （クラス要素に対してイベントを設定）
// e.preventDefault()を実行するため、eを渡して、submit時にイベント自体のオブジェクトを取得
$form.addEventListener("submit", (e) => SubmitHandler(e));

// 実行部分 （ウィンドウ要素に対してイベントを設定）
window.addEventListener("load", () => LoadHandler());
