<?php
// メール送信処理
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // フォームから送信されたデータを取得
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $subject = isset($_POST['subject']) ? $_POST['subject'] : 'お問い合わせ';
    $message = isset($_POST['message']) ? $_POST['message'] : '';
    
    // 送信先のメールアドレス
    $to = "common.yunox@gmail.com";
    
    // メールの件名
    $email_subject = "[Yunox] " . $subject;
    
    // メールの本文
    $email_body = "以下の内容でお問い合わせがありました。\n\n";
    $email_body .= "お名前: " . $name . "\n";
    $email_body .= "メールアドレス: " . $email . "\n";
    $email_body .= "件名: " . $subject . "\n\n";
    $email_body .= "お問い合わせ内容:\n" . $message . "\n";
    
    // メールヘッダー
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    // メール送信
    $mail_success = mail($to, $email_subject, $email_body, $headers);
    
    // 結果をJSONで返す
    header('Content-Type: application/json');
    if ($mail_success) {
        echo json_encode(['success' => true, 'message' => 'お問い合わせ内容が送信されました。内容を確認の上、ご返信いたします。']);
    } else {
        echo json_encode(['success' => false, 'message' => '送信に失敗しました。しばらく経ってから再度お試しください。']);
    }
    exit;
}
?>
