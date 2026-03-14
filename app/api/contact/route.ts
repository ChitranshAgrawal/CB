import { NextResponse } from 'next/server'
import { z } from 'zod'
import { siteConfig } from '@/lib/site'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please provide your name.'),
  email: z.string().trim().email('Please provide a valid email address.'),
  phone: z
    .string()
    .trim()
    .max(30, 'Phone number is too long.')
    .optional()
    .or(z.literal('')),
  projectType: z.string().trim().max(100).optional().or(z.literal('')),
  budget: z.string().trim().max(100).optional().or(z.literal('')),
  message: z.string().trim().min(10, 'Please share at least a short project brief.'),
})

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Please review the highlighted fields.',
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    )
  }

  // TODO: Integrate your email/CRM provider (Resend, SendGrid, HubSpot, etc.)
  // For now, we only log in server runtime (not in client) to prove data reaches backend.
  console.info('Contact inquiry received', {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
  })

  return NextResponse.json({
    ok: true,
    message: `Thanks for reaching out to ${siteConfig.name}. We'll respond within 24 hours.`,
  })
}
