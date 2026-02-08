'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">AISO Hub</h3>
            <p className="text-gray-400">
              AI search optimization agency based in Lisbon, Portugal.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Method
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-6">Follow us</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  X / Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 AISO Hub. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
