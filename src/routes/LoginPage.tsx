import type { FC } from "react";
import { useState } from "react";
import { auth } from "../lib/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const LoginPage: FC = () => {
  // 状態を管理する変数たち（React Hooks）
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // true=ログイン / false=新規登録
  const [error, setError] = useState("");

  // メール＋パスワードでログイン or 登録
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        //ログイン処理
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        //新規登録
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Googleログイン
  const handleGoogleLogin = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      // 特定のエラーコードは無視
      if (err.code !== "auth/cancelled-popup-request") {
        setError(err.message);
      }
    }
  };

  // GitHubログイン
  const handleGithubLogin = async () => {
    setError("");
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      // 特定のエラーコードは無視
      if (err.code !== "auth/cancelled-popup-request") {
        setError(err.message);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">
        {isLogin ? "ログイン" : "新規登録"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isLogin ? "ログイン" : "登録"}
        </button>
      </form>

      {/* SNSログイン */}
      <div className="mt-6 space-y-3">
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50 transition"
        >
          <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
          <span className="text-sm font-medium">Googleでログイン</span>
        </button>

        <button
          onClick={handleGithubLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50 transition"
        >
          <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
          <span className="text-sm font-medium">GitHubでログイン</span>
        </button>
      </div>

      {/* モード切り替え */}
      <p className="mt-4 text-sm text-center">
        {isLogin
          ? "アカウントを持っていませんか？"
          : "アカウントを持っていますか？"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 hover:underline"
        >
          {isLogin ? "新規登録へ" : "ログインへ"}
        </button>
      </p>
    </div>
  );
};
