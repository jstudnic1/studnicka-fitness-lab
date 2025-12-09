import React, { useState } from "react";
import { CONTACT_INFO, SOCIAL_LINKS } from "../data/constants";
import { Mail, Phone, Instagram, Facebook, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  email: z.string().email("Neplatný formát e-mailu"),
  phone: z.string().optional(),
  message: z.string().min(10, "Zpráva musí mít alespoň 10 znaků"),
  consent: z.boolean().refine((val) => val === true, "Musíte souhlasit se zpracováním osobních údajů"),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      // You can get this by creating a form at https://formspree.io/
      const response = await fetch("https://formspree.io/f/mnnebkor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Zpráva byla úspěšně odeslána. Brzy se vám ozvu!");
        reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Formspree error:", errorData);
        toast.error("Odeslání selhalo. Zkuste to prosím později nebo mi napište přímo na e-mail.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Došlo k chybě při odesílání. Zkuste to prosím později.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="container">
      <h2 className="section-title reveal">Kontakt</h2>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 reveal">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Marek Studnička</h3>
            <p className="text-gray-600 mb-6">Osobní trenér & Online kouč v Mladé Boleslavi</p>

            <div className="space-y-3">
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="flex items-center text-lg hover:text-marek-cta">
                <Phone className="mr-3" size={20} />
                {CONTACT_INFO.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center text-lg hover:text-marek-cta">
                <Mail className="mr-3" size={20} />
                {CONTACT_INFO.email}
              </a>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-marek-cta text-white flex items-center justify-center hover:bg-primary-hover transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-marek-cta text-white flex items-center justify-center hover:bg-primary-hover transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 reveal">
          <form className="card" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-xl font-semibold mb-4">Napiš mi</h3>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Jméno <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-marek-cta/30`}
                placeholder="Jan Novák"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-marek-cta/30`}
                placeholder="jan@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Telefon (volitelné)
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-marek-cta/30"
                placeholder="+420 777 123 456"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Zpráva <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                {...register("message")}
                className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-marek-cta/30 min-h-[120px]`}
                placeholder="Ahoj, měl bych zájem o trénink..."
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <div className="mb-4">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("consent")}
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">
                  Odesláním souhlasím se zpracováním osobních údajů dle GDPR pro účely odpovědi na můj dotaz. <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Odesílám...
                </>
              ) : (
                "Odeslat zprávu"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
