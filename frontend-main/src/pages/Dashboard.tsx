// src/pages/Dashboard.tsx
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">🔐 Auth App</h1>
        <button 
          onClick={handleLogout}
          className="text-red-600 hover:text-red-800 text-sm font-medium"
        >
          Sair
        </button>
      </nav>
      
      <main className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Bem-vindo, {user?.name}! 👋
          </h2>
          
          <div className="space-y-3 text-gray-600">
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>ID:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">{user?.id}</code></p>
            {user?.createdAt && (
              <p><strong>Registado em:</strong> {new Date(user.createdAt).toLocaleDateString('pt-PT')}</p>
            )}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm text-blue-800">
              ✅ Esta é uma área protegida. Só utilizadores autenticados podem ver isto.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}