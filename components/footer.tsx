'use client'

import { Mail, MapPin, Phone, Code2, Eye, Share2 } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              APEX
            </h3>
            <p className="text-muted-foreground">
              Creating digital experiences that inspire and transform brands.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition">Web Development</a></li>
              <li><a href="#services" className="hover:text-primary transition">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-primary transition">Brand Design</a></li>
              <li><a href="#services" className="hover:text-primary transition">Strategy</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#portfolio" className="hover:text-primary transition">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-primary transition">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:apexcreativehub12@gmail.com" className="hover:text-primary transition block">apexcreativehub12@gmail.com</a>
                  <a href="mailto:danielerdataw84@gmail.com" className="hover:text-primary transition block">danielerdataw84@gmail.com</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+251906078429" className="hover:text-primary transition">+251 906 078 429</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Apex Creative Agency. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full hover:bg-primary/20 text-muted-foreground hover:text-primary transition">
              <Code2 size={20} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-primary/20 text-muted-foreground hover:text-primary transition">
              <Eye size={20} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-primary/20 text-muted-foreground hover:text-primary transition">
              <Share2 size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
