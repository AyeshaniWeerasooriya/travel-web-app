/* eslint-disable prefer-const */
"use client";
import React, { useState, useEffect } from "react";
import {
  X,
  Menu,
  DollarSign,
  ShoppingCart,
  Languages,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import clsx from "clsx";

const menuItems = [
  { name: "Tours", href: "#tours" },
  { name: "About Us", href: "#about-us" },
  { name: "Contact Us", href: "#contact-us" },
  { name: "Blogs", href: "#blogs" },
  { name: "FAQ", href: "#faq" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#tours");

  const linkClasses =
    "text-sm font-medium hover:text-gray-900 transition-colors";

  const renderMenuItems = (isMobile = false) =>
    menuItems.map((item) => {
      const isActive = activeSection === item.href;

      return (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => isMobile && setIsMenuOpen(false)}
          className={cn(
            linkClasses,
            clsx({
              "text-gray-900 font-semibold": isActive,
              "text-gray-600": !isActive,
              "block text-xl font-semibold p-4 text-left border-b border-gray-200":
                isMobile,
              "px-4 py-2 border-l border-gray-300 first:border-l-0": !isMobile,
            })
          )}
        >
          {item.name}
        </Link>
      );
    });

  return (
    <div className="font-sans">
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="w-full px-4 lg:px-12 flex justify-between items-center h-10 bg-gray-50 text-xs text-gray-700 border-b border-gray-300">
          <span className="text-xs">Trusted by 10000+ travelers worldwide</span>

          <div className="flex items-center space-x-0 h-full divide-x divide-gray-300">
            <button
              className="px-3 hover:bg-gray-200 h-full transition-colors font-semibold"
              aria-label="Close/Search"
            >
              <Languages size={16} />
            </button>

            <div className="flex items-center px-3 hover:bg-gray-200 h-full transition-colors">
              <DollarSign size={16} className="mr-1" />
              <span className="font-semibold">USD</span>
            </div>

            <button
              className="px-3 hover:bg-gray-200 h-full transition-colors font-semibold"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={16} />
            </button>

            <Link
              href="#login"
              className="px-3 hover:bg-gray-200 h-full flex items-center transition-colors"
            >
              <div className="flex items-center px-3 hover:bg-gray-200 h-full transition-colors">
                <User size={16} className="mr-1" />
                <span className="font-semibold">Log In</span>
              </div>
            </Link>

            <Link
              href="#signup"
              className="px-3 hover:bg-gray-200 h-full flex items-center transition-colors font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="w-full px-4 lg:px-12 flex justify-between items-center h-20 bg-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white border border-gray-400 flex items-center justify-center">
              <X size={24} className="text-gray-400" />
            </div>
            <div className="text-xl font-bold text-gray-800">Logo</div>
          </div>
          <div className="hidden md:flex items-center space-x-0 h-full text-gray-700">
            {renderMenuItems()}
          </div>
          <button
            className={cn(
              "md:hidden p-2 rounded-lg focus:outline-none transition-transform duration-300",
              "text-gray-800"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={28} />}
          </button>
        </div>
        <div
          className={cn(
            "md:hidden bg-gray-50 flex flex-col items-stretch transition-all duration-300",
            isMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          )}
          style={{ overflow: "hidden" }}
        >
          {renderMenuItems(true)}
        </div>
      </nav>
      <div className="pt-[160px] md:pt-[140px] lg:pt-[130px]"></div>
    </div>
  );
};

export default NavBar;
