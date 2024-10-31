import React, { useState } from 'react';
import { Bell, Lock, User } from 'lucide-react';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

      <div className="space-y-6 bg-white shadow rounded-lg p-6">
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center">
            <User className="h-6 w-6 text-gray-400" />
            <h2 className="ml-3 text-lg font-medium text-gray-900">Profile Settings</h2>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue="john@example.com"
              />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center">
            <Bell className="h-6 w-6 text-gray-400" />
            <h2 className="ml-3 text-lg font-medium text-gray-900">Notifications</h2>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <input
                id="notifications"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
              <label htmlFor="notifications" className="ml-3">
                <span className="text-sm font-medium text-gray-900">Enable notifications</span>
                <p className="text-sm text-gray-500">Receive updates about your account activity</p>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <Lock className="h-6 w-6 text-gray-400" />
            <h2 className="ml-3 text-lg font-medium text-gray-900">Security</h2>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <input
                id="2fa"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                checked={twoFactor}
                onChange={(e) => setTwoFactor(e.target.checked)}
              />
              <label htmlFor="2fa" className="ml-3">
                <span className="text-sm font-medium text-gray-900">Two-factor authentication</span>
                <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}