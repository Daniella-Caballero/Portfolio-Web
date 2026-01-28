"use client"

import type React from "react"

import { useState } from "react"
import { sendContactEmail } from "@/app/actions/contact"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { Send } from "lucide-react"

export function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("message", message);
      const res = await sendContactEmail(formData);
      if (res.success) {
        setSubmitted(true);
        setEmail("");
        setMessage("");
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        // Manejar error si lo deseas
      }
    } catch (err) {
      // Manejar error si lo deseas
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold  mb-4">{t.title}</h2>
        <p className=" mb-8">{t.subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder={t.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-6 py-4 bg-secondary text-foreground placeholder-gray-500 rounded-xl border-none outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <textarea
            placeholder={t.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="w-full px-6 py-4 bg-secondary text-foreground placeholder-gray-500 rounded-xl border-none outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-y"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-[#2a2c42] text-white rounded-full transition-all disabled:opacity-50"
          >
            {isSubmitting ? t.submitting : submitted ? t.submitted : t.submit}
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  )
}
