import { useId, useState } from 'react'
import { MessageCircle, Mail, CircleAlert, CircleCheck } from 'lucide-react'
import PrimaryButton from './PrimaryButton'
import { buildMailtoLink, buildWhatsAppLink, formatInquiryMessage } from '../utils/contact'

const INITIAL = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false,
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_PATTERN = /^\+?[0-9\s\-()]{8,20}$/

function validate(values) {
  const errors = {}
  if (values.fullName.trim().length < 2) errors.fullName = 'Mohon isi nama lengkap Anda.'
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Mohon isi alamat email yang valid.'
  if (!PHONE_PATTERN.test(values.phone.trim()))
    errors.phone = 'Mohon isi nomor telepon yang valid (8–20 digit).'
  if (values.subject.trim().length < 3) errors.subject = 'Mohon isi subjek pesan.'
  if (values.message.trim().length < 10) errors.message = 'Pesan minimal 10 karakter.'
  if (!values.consent) errors.consent = 'Mohon setujui penggunaan data untuk menindaklanjuti pesan Anda.'
  return errors
}

function Field({ id, label, optional, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between text-[0.8125rem] font-medium text-charcoal">
        {label}
        {optional && <span className="text-xs font-normal text-muted">Opsional</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9b3b2f]">
          <CircleAlert className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

/**
 * Form kemitraan — TANPA backend.
 * Setelah valid, isi form disusun menjadi pesan WhatsApp yang dibuka
 * di tab baru. Pesan baru terkirim setelah pengguna menekan "kirim"
 * di WhatsApp — website tidak menyimpan atau mengirim data apa pun.
 */
export default function ContactForm() {
  const uid = useId()
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState(false)
  const [handedOff, setHandedOff] = useState(false)

  const fieldId = (name) => `${uid}-${name}`

  const update = (name) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const next = { ...values, [name]: value }
    setValues(next)
    setHandedOff(false)
    if (touched) setErrors(validate(next))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched(true)
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      const firstKey = Object.keys(found)[0]
      document.getElementById(fieldId(firstKey))?.focus()
      return
    }
    window.open(buildWhatsAppLink(formatInquiryMessage(values)), '_blank', 'noopener,noreferrer')
    setHandedOff(true)
  }

  const inputProps = (name) => ({
    id: fieldId(name),
    name,
    value: values[name],
    onChange: update(name),
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${fieldId(name)}-error` : undefined,
    className: `block w-full rounded-sm border bg-cream/60 px-4 py-3 text-[0.9375rem] text-charcoal placeholder:text-charcoal/35 transition-colors focus:border-forest focus:bg-white focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-forest/15 ${
      errors[name] ? 'border-[#9b3b2f]/60' : 'border-line'
    }`,
  })

  const mailtoHref = buildMailtoLink(
    values.subject || 'Partnership Inquiry',
    values.fullName ? formatInquiryMessage(values) : '',
  )

  return (
    <form noValidate onSubmit={handleSubmit} aria-labelledby={`${uid}-title`} className="bg-white p-6 ring-1 ring-line sm:p-10 rounded-sm">
      <h3 id={`${uid}-title`} className="font-serif text-3xl text-forest">
        Partnership Inquiry
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Isi formulir berikut, pesan Anda akan disusun otomatis dan dibuka di WhatsApp untuk dikirim ke tim kami.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id={fieldId('fullName')} label="Full Name" error={errors.fullName}>
          <input type="text" autoComplete="name" placeholder="Nama lengkap" {...inputProps('fullName')} />
        </Field>
        <Field id={fieldId('company')} label="Company Name" optional error={errors.company}>
          <input type="text" autoComplete="organization" placeholder="Nama perusahaan" {...inputProps('company')} />
        </Field>
        <Field id={fieldId('email')} label="Email" error={errors.email}>
          <input type="email" autoComplete="email" inputMode="email" placeholder="nama@perusahaan.com" {...inputProps('email')} />
        </Field>
        <Field id={fieldId('phone')} label="Phone Number" error={errors.phone}>
          <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+62 8xx xxxx xxxx" {...inputProps('phone')} />
        </Field>
        <div className="sm:col-span-2">
          <Field id={fieldId('subject')} label="Subject" error={errors.subject}>
            <input type="text" placeholder="Contoh: Peluang kerja sama pasokan" {...inputProps('subject')} />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id={fieldId('message')} label="Message" error={errors.message}>
            <textarea rows={5} placeholder="Ceritakan kebutuhan atau rencana kerja sama Anda" {...inputProps('message')} className={`${inputProps('message').className} resize-y`} />
          </Field>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor={fieldId('consent')} className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted">
          <input
            id={fieldId('consent')}
            type="checkbox"
            checked={values.consent}
            onChange={update('consent')}
            aria-invalid={errors.consent ? 'true' : undefined}
            aria-describedby={errors.consent ? `${fieldId('consent')}-error` : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 accent-forest"
          />
          Saya setuju data yang saya isi digunakan oleh Hans Sustainable Farming untuk menindaklanjuti pesan ini.
        </label>
        {errors.consent && (
          <p id={`${fieldId('consent')}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9b3b2f]">
            <CircleAlert className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {errors.consent}
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PrimaryButton type="submit" icon={MessageCircle} iconPosition="left">
          Send via WhatsApp
        </PrimaryButton>
        <a
          href={mailtoHref}
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-forest"
        >
          <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          <span className="border-b border-current/30">atau kirim lewat email</span>
        </a>
      </div>

      <div aria-live="polite">
        {handedOff && (
          <p className="mt-6 flex items-start gap-2.5 rounded-sm bg-sage-light/40 p-4 text-sm leading-relaxed text-forest">
            <CircleCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            WhatsApp telah dibuka di tab baru dengan pesan Anda. Pesan baru terkirim setelah Anda menekan tombol
            kirim di WhatsApp.
          </p>
        )}
      </div>
    </form>
  )
}
