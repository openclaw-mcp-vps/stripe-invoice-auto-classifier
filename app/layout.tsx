import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceSort — Auto-categorize Stripe invoices for freelancer taxes',
  description: 'Automatically categorize your Stripe transactions into tax deduction categories. Export to CSV or QuickBooks. Built for freelancers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="12b9908e-12dc-464e-989b-74c3ecd76cde"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
