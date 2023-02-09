import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Grid from "@mui/material/Grid";

export type AuthButtonProps = {
  isAuthenticated: boolean;
  error: string | null;
  errorDescription: string | null;
};

export const TopAlert = ({
  isAuthenticated,
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
            既に登録済みの方も、再度登録をお願いいたします。
            {errorDescription}
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
