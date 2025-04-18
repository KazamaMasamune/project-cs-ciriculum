import React, { useState } from 'react';
import { User, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { AuthModal } from './AuthModal';

interface NavbarProps {
  user: any;
}

export function Navbar({ user }: NavbarProps) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const openAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-red-900">CS Curriculum</div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <a href="/profile" className="flex items-center text-gray-700 hover:text-red-900">
                  <User className="w-5 h-5 mr-1" />
                  Profile
                </a>
                <button
                  onClick={handleSignOut}
                  className="flex items-center text-gray-700 hover:text-red-900"
                >
                  <LogOut className="w-5 h-5 mr-1" />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="space-x-4">
                <button
                  onClick={() => openAuth('signin')}
                  className="text-red-900 hover:text-red-800"
                >
                  Sign In
                </button>
                <button
                  onClick={() => openAuth('signup')}
                  className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
      />
    </nav>
  );
}