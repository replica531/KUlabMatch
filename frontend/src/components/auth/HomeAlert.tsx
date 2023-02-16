import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Grid from "@mui/material/Grid";

export type AuthButtonProps = {
  isAuthenticated: boolean;
  votedCount: number | undefined;
  error: string | null;
  errorDescription: string | null;
};

export const HomeAlert = ({
  isAuthenticated,
  votedCount,
  error,
  errorDescription,
}: AuthButtonProps) => {
  return (
    <>
      {!isAuthenticated && (
        <Grid item xs={12}>
          <Alert severity="warning">
            <AlertTitle>お知らせ</AlertTitle>
            アカウント登録に京都大学メールアドレスを必要とするようになりました。
            既に登録した方も再度、登録・投票をお願いいたします。
            {errorDescription}
          </Alert>
        </Grid>
      )}
      {isAuthenticated &&
        votedCount == 0 &&
        (
        <Grid item xs={12}>
          <Alert severity="info">
            <AlertTitle>投票方法</AlertTitle>
            1. プロフィール画面で所属と学年を選んでください
            <br />
            2. 投票画面で「選択」ボタンを押してください
            <br />
            3. 希望する研究室を選んでください
            <br />
            4.「投票」ボタンを押してください
          </Alert>
        </Grid>
      )}
      {error &&
        error == "unauthorized" &&
        errorDescription && (
        <>
          { errorDescription == "Please verify your email." && (
            <Grid item xs={12}>
              <Alert severity="error">
                <AlertTitle>ログインエラー</AlertTitle>
                メールアドレスの認証が完了していません。
                届いたメールのリンクをクリックしてご登録されたメールアドレスの認証を完了させてください。
                メールが見つからない場合はお手数ですが迷惑メールフォルダもご確認ください。
              </Alert>
            </Grid>
          )}
          { errorDescription == "your email domain is not allowed." && (
            <Grid item xs={12}>
              <Alert severity="error">
                <AlertTitle>登録エラー</AlertTitle>
                登録することができるメールアドレスは京都大学メールアドレスのみとなっております。
                もう一度ご確認の上、登録をお願いいたします。
              </Alert>
            </Grid>
          )}
          { errorDescription == "email does not exist." && (
            <Grid item xs={12}>
              <Alert severity="error">
                <AlertTitle>ログインエラー</AlertTitle>
                emailが存在しません。再度、登録をお願いいたします。
              </Alert>
            </Grid>
          )}
        </>
      )}
    </>
  )
};
