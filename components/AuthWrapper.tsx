import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ProtectedRoute from './ProtectedRoute';

// 次のページへアクセスする場合は認証が必要。今回はマイページと記事詳細ページ
const authRoutes = ['/mypage', '/articles/[id]'];

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const router = useRouter();

  // 認証情報取得中はコンポーネントを非表示にする
  if (session.status === 'loading') return null;

  return (
    <>
      {authRoutes.includes(router.pathname) ? (
        <ProtectedRoute>{children}</ProtectedRoute>
      ) : (
        children
      )}
    </>
  );
};

export default AuthWrapper;
