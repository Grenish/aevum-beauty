"use client";

import { useState, useEffect } from "react";

type CookiePreferences = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsent() {
  const [showPopup, setShowPopup] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    functional: false,
    analytics: false,
    marketing: false,
  });

  // Check if consent was given previously
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const acceptAllCookies = () => {
    setPreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
    saveCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
    setShowPopup(false);
  };

  const rejectAllCookies = () => {
    setPreferences({
      necessary: true, // Always required
      functional: false,
      analytics: false,
      marketing: false,
    });
    saveCookiePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
    setShowPopup(false);
  };

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookieConsent", "true");
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    // Here you would also implement the actual cookie handling based on preferences
  };

  const handleCustomizeSubmit = () => {
    saveCookiePreferences(preferences);
    setShowCustomize(false);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-rose-50 shadow-xl z-50 p-6 md:p-8 rounded-t-2xl">
      {!showCustomize ? (
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-neutral-800">
                Cookie Consent
              </h2>
              <p className="text-gray-700 mt-2">
                We use cookies to enhance your browsing experience and analyze
                our traffic. Please select your cookie preferences.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowCustomize(true)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Customize Cookies
              </button>
              <button
                onClick={rejectAllCookies}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Reject All
              </button>
              <button
                onClick={acceptAllCookies}
                className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-neutral-800">
            Customize Cookie Preferences
          </h2>
          <p className="text-gray-700 mt-2 mb-4">
            Select which cookies you want to accept. Necessary cookies are
            required for the website to function properly.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-neutral-800">
                  Necessary Cookies
                </h3>
                <p className="text-sm text-gray-600">
                  Required for the website to function properly. Cannot be
                  disabled.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.necessary}
                disabled
                className="h-5 w-5 accent-pink-600"
              />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-neutral-800">
                  Functional Cookies
                </h3>
                <p className="text-sm text-gray-600">
                  Enable personalized features and remember your preferences.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    functional: e.target.checked,
                  })
                }
                className="h-5 w-5 accent-pink-600"
              />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-neutral-800">
                  Analytics Cookies
                </h3>
                <p className="text-sm text-gray-600">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    analytics: e.target.checked,
                  })
                }
                className="h-5 w-5 accent-pink-600"
              />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-neutral-800">
                  Marketing Cookies
                </h3>
                <p className="text-sm text-gray-600">
                  Used to track visitors across websites for advertising
                  purposes.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    marketing: e.target.checked,
                  })
                }
                className="h-5 w-5 accent-pink-600"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowCustomize(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={handleCustomizeSubmit}
              className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
