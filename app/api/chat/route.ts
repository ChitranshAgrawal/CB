const systemPrompt = `You are CB InfoTech's intelligent assistant, a friendly and knowledgeable guide for all things web development, design, and digital solutions.

About CB InfoTech:
- We specialize in building fast, modern websites and web applications
- Our expertise includes MERN stack, Next.js, React, Node.js, and cloud deployment
- We serve businesses of all sizes, from startups to enterprises
- Our pricing tiers:
  * Starter: ₹12,999 - Perfect for small businesses and portfolios (5-8 page websites)
  * Professional: ₹35,999 - For growing businesses (e-commerce stores, CMS, 6 months support)
  * Enterprise: ₹75,000+ - Custom applications, CRM, portals, with 24/7 support
- We provide ongoing support and maintenance for all projects
- Our team focuses on performance, user experience, and cutting-edge technology

Your role:
1. Answer questions about our services (web development, e-commerce, CMS, CRM, etc.)
2. Explain our pricing tiers and help clients choose the right plan
3. Discuss technology stacks and why we use them
4. Help with general web development questions
5. Guide visitors through the project process
6. Be enthusiastic about technology and design

Be conversational, helpful, and always try to understand the customer's specific needs. If they ask about pricing or services, provide accurate information about our offerings. Encourage them to contact our team for custom quotes or specific project discussions.`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Build messages array with proper format
    const messagesForAPI = [
      { role: 'system', content: systemPrompt },
      ...messages,
    ]

    // Simple mock response for now - can be replaced with actual API call
    // This prevents dependency on external packages during development
    const userMessage = messages[messages.length - 1]?.content || ''
    
    let responseText = generateMockResponse(userMessage)

    return Response.json({ text: responseText })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
}

// Generate intelligent mock responses based on keywords
function generateMockResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()

  if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
    return `Great question! Our pricing is designed to be competitive and scalable:\n\n• **Starter (₹12,999)**: Perfect for small businesses. Includes 5-8 page responsive websites with mobile-first design, contact forms, basic SEO, SSL certificate, and 2 months of support.\n\n• **Professional (₹35,999)**: Our most popular tier. Everything in Starter plus e-commerce functionality (up to 100 products), payment gateway integration, advanced CMS, custom animations, and 6 months of support.\n\n• **Enterprise (₹75,000+)**: For complex needs. Fully custom applications, unlimited e-commerce, CRM/ERP portals, DevOps setup, and 1 year of support with 24/7 availability.\n\nWhich package interests you most?`
  }

  if (lowerMessage.includes('service') || lowerMessage.includes('what do you')) {
    return `We offer comprehensive web development services:\n\n✓ Custom Website Design & Development\n✓ E-commerce Solutions\n✓ CMS & Admin Panels\n✓ Web Applications\n✓ CRM/ERP Systems\n✓ API Integration\n✓ Cloud Deployment\n✓ Performance Optimization\n\nWe specialize in modern tech stacks like MERN, Next.js, React, and Node.js. What type of project are you interested in?`
  }

  if (lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
    return `Our technology stack includes:\n\n**Frontend**: React, Next.js, TypeScript, Tailwind CSS, Framer Motion\n**Backend**: Node.js, Express, Python, PostgreSQL\n**DevOps**: Docker, AWS, Vercel, GitHub Actions\n**Tools**: Git, VS Code, Figma, Jest\n\nWe choose technologies based on project needs to ensure performance, scalability, and maintainability. All our projects are built with modern, production-ready standards!`
  }

  if (lowerMessage.includes('timeline') || lowerMessage.includes('how long')) {
    return `Project timelines vary based on complexity:\n\n• **Starter websites**: 2-3 weeks\n• **E-commerce stores**: 3-4 weeks\n• **Custom applications**: 4-12 weeks (depends on scope)\n• **Enterprise solutions**: Custom timeline\n\nWe break projects into milestones so you see progress regularly. Would you like to discuss your specific project timeline?`
  }

  if (lowerMessage.includes('contact') || lowerMessage.includes('how to reach')) {
    return `You can reach our team at:\n\n📧 Email: hello@cbinfotech.in\n📱 Phone: +91 98765 43210\n📍 Location: India\n\nWe're available for consultations and would love to discuss your project. You can also continue chatting with me to learn more!`
  }

  if (lowerMessage.includes('support') || lowerMessage.includes('maintenance')) {
    return `We provide comprehensive support:\n\n✓ All packages include dedicated support periods\n✓ Starter: 2 months of free support\n✓ Professional: 6 months of support & maintenance\n✓ Enterprise: 1 year support + Annual Maintenance Contract (AMC)\n✓ Priority 24/7 support available\n\nWe handle updates, bug fixes, and optimizations to keep your site running smoothly!`
  }

  // Default friendly response
  return `That's a great question! I'm here to help answer anything about CB InfoTech's services, pricing, technology, or web development in general. Feel free to ask about:\n\n• Our service offerings\n• Pricing & packages\n• Technology we use\n• Project timelines\n• Support options\n\nWhat would you like to know more about?`
}
