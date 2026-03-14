'use client'

import { useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

function getMessageText(message: any): string {
  if (!message.parts || !Array.isArray(message.parts)) return ''
  return message.parts
    .filter((p: any) => p.type === 'text')
    .map((p: any) => p.text)
    .join('')
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  })

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      sendMessage({ text: inputValue })
      setInputValue('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-6 right-6 z-50 p-4 rounded-full transition-all duration-300',
          'bg-gradient-to-br from-[#00D4FF] to-[#4A9EFF] text-white shadow-lg hover:shadow-xl',
          'dark:from-[#00D4FF] dark:to-[#4A9EFF]',
          'light:from-[#0084FF] light:to-[#3B82F6] light:text-white'
        )}
        title="AI Assistant"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'fixed bottom-24 right-6 z-50 w-96 h-[500px] rounded-2xl shadow-2xl overflow-hidden',
              'bg-card text-foreground border border-border',
              'dark:bg-[#0A1628] dark:text-white dark:border-[#1A3A5C]',
              'light:bg-white light:text-[#0F172A] light:border-[#E2E8F0]',
              'flex flex-col'
            )}
          >
            {/* Header */}
            <div className={cn(
              'flex items-center justify-between p-4 border-b',
              'dark:border-[#1A3A5C]',
              'light:border-[#E2E8F0]'
            )}>
              <div>
                <h3 className="font-semibold text-lg">CB Assistant</h3>
                <p className={cn(
                  'text-xs',
                  'dark:text-[#7BC8FF]',
                  'light:text-[#475569]'
                )}>
                  Ask me anything about our services
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={cn(
                  'p-2 rounded hover:bg-opacity-80 transition-colors',
                  'dark:hover:bg-[#00D4FF]/10',
                  'light:hover:bg-[#E2E8F0]'
                )}
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className={cn(
              'flex-1 overflow-y-auto p-4 space-y-4',
              'dark:bg-[#0A1628]',
              'light:bg-[#F8FAFC]'
            )}>
              {messages.length === 0 && (
                <div className={cn(
                  'text-center text-sm',
                  'dark:text-[#7BC8FF]',
                  'light:text-[#475569]'
                )}>
                  <p className="mb-2">👋 Hey there!</p>
                  <p>I'm here to help answer any questions about CB InfoTech's services, pricing, and capabilities.</p>
                </div>
              )}
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    'flex gap-3',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-xs px-4 py-2 rounded-lg break-words text-sm',
                      message.role === 'user'
                        ? 'dark:bg-[#00D4FF]/20 dark:text-white light:bg-[#0084FF]/10 light:text-[#0F172A]'
                        : 'dark:bg-[#0D2137] dark:text-[#E8F4FF] light:bg-[#E2E8F0] light:text-[#0F172A]'
                    )}
                  >
                    {getMessageText(message)}
                  </div>
                </motion.div>
              ))}
              {status === 'streaming' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={cn(
                    'flex gap-2',
                    'dark:text-[#7BC8FF]',
                    'light:text-[#475569]'
                  )}
                >
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className={cn(
              'p-4 border-t',
              'dark:border-[#1A3A5C]',
              'light:border-[#E2E8F0]'
            )}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask a question..."
                  disabled={status === 'streaming'}
                  className={cn(
                    'flex-1 px-3 py-2 rounded border outline-none transition-colors',
                    'dark:bg-[#0D2137] dark:border-[#1A3A5C] dark:text-white dark:placeholder-[#7BC8FF]/50',
                    'dark:focus:border-[#00D4FF]',
                    'light:bg-white light:border-[#E2E8F0] light:text-[#0F172A] light:placeholder-[#475569]/50',
                    'light:focus:border-[#0084FF]',
                    'disabled:opacity-50 disabled:cursor-not-allowed'
                  )}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={status === 'streaming' || !inputValue.trim()}
                  className={cn(
                    'p-2 rounded transition-all duration-200',
                    'dark:bg-[#00D4FF]/20 dark:text-[#00D4FF] dark:hover:bg-[#00D4FF]/30',
                    'light:bg-[#0084FF]/20 light:text-[#0084FF] light:hover:bg-[#0084FF]/30',
                    'disabled:opacity-50 disabled:cursor-not-allowed'
                  )}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
