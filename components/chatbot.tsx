'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const initialMessages = [
  {
    id: 1,
    text: 'Hi! 👋 Welcome to Apex Creative Hub. How can I assist you today?',
    sender: 'bot',
    timestamp: new Date()
  }
]

// Rule-based response system for intelligent chatbot
const getBotResponse = (userInput: string): string => {
  const input = userInput.toLowerCase().trim()

  // Keywords for "About Apex / Who we are / Services"
  if (
    input.includes('apex') ||
    input.includes('who are you') ||
    input.includes('who is') ||
    input.includes('what do you do') ||
    input.includes('services') ||
    input.includes('what do you offer') ||
    input.includes('capabilities')
  ) {
    return 'Apex Creative Hub is a premier Digital Marketing & Creative Agency. We specialize in Graphic Design, Brand Identity Development, High-Impact Video Production, Social Media Management, and Modern Website Development.'
  }

  // Keywords for "Packages / Pricing / Costs / Tiers"
  if (
    input.includes('package') ||
    input.includes('pricing') ||
    input.includes('cost') ||
    input.includes('price') ||
    input.includes('tier') ||
    input.includes('plan') ||
    input.includes('how much') ||
    input.includes('rate')
  ) {
    return 'We offer 4 flexible packages:\n• Level 1: Essential Branding (5,000 ETB)\n• Level 2: Start-Up Monthly Marketing (10,500 ETB/mo)\n• Level 3: Corporate Branding & Website (13,000 ETB)\n• Level 4: Corporate Monthly & Web Management (17,500 ETB/mo)\n\nClick on any package card to Get Started or Request a Custom Quote!'
  }

  // Keywords for "Contact / Phone / Email / Location"
  if (
    input.includes('contact') ||
    input.includes('phone') ||
    input.includes('email') ||
    input.includes('location') ||
    input.includes('address') ||
    input.includes('how to reach') ||
    input.includes('get in touch')
  ) {
    return 'You can reach us directly via the Get Started form on any package, or request a custom quote. Our team will contact you instantly via Phone or Email!'
  }

  // Default fallback response
  return 'Thank you for reaching out to Apex Creative Hub! How can we assist your brand today? You can ask about our Branding, Video Production, Website Development, or Monthly Marketing packages.'
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, userMessage])
    setInputValue('')

    // Get intelligent rule-based response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue)

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages((prev) => [...prev, botMessage])
    }, 600)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-96 h-96 rounded-2xl backdrop-blur-xl border border-border bg-card/95 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border bg-gradient-to-r from-primary/20 to-accent/20 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-foreground">Apex Support</h3>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-background/50 rounded-full transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background border border-border text-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-white flex items-center justify-center transition shadow-lg"
      >
        <MessageCircle size={28} />
      </motion.button>
    </div>
  )
}
