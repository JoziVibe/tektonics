"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Cpu, ChevronRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/Footer";

const sections = [
  { id: "services", title: "1. OUR SERVICES" },
  { id: "intellectual-property", title: "2. INTELLECTUAL PROPERTY RIGHTS" },
  { id: "user-representations", title: "3. USER REPRESENTATIONS" },
  { id: "products", title: "4. PRODUCTS" },
  { id: "purchases-payment", title: "5. PURCHASES AND PAYMENT" },
  { id: "returns-refunds", title: "6. RETURN/REFUNDS POLICY" },
  { id: "software", title: "7. SOFTWARE" },
  { id: "prohibited-activities", title: "8. PROHIBITED ACTIVITIES" },
  { id: "user-contributions", title: "9. USER GENERATED CONTRIBUTIONS" },
  { id: "contribution-licence", title: "10. CONTRIBUTION LICENCE" },
  { id: "third-party", title: "11. THIRD-PARTY WEBSITES AND CONTENT" },
  { id: "management", title: "12. SERVICES MANAGEMENT" },
  { id: "privacy", title: "13. PRIVACY POLICY" },
  { id: "termination", title: "14. TERM AND TERMINATION" },
  { id: "modifications", title: "15. MODIFICATIONS AND INTERRUPTIONS" },
  { id: "governing-law", title: "16. GOVERNING LAW" },
  { id: "dispute-resolution", title: "17. DISPUTE RESOLUTION" },
  { id: "corrections", title: "18. CORRECTIONS" },
  { id: "disclaimer", title: "19. DISCLAIMER" },
  { id: "liability", title: "20. LIMITATIONS OF LIABILITY" },
  { id: "indemnification", title: "21. INDEMNIFICATION" },
  { id: "user-data", title: "22. USER DATA" },
  { id: "electronic-comms", title: "23. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES" },
  { id: "miscellaneous", title: "24. MISCELLANEOUS" },
  { id: "contact-us", title: "25. CONTACT US" },
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-background text-white font-body selection:bg-accent/30 overflow-x-hidden">
      <Header stickyMode="immediate" />
      <div className="grow">
      {/* Header Overlap Fix: Padding for fixed header */}
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="size-4" />
            <span className="text-white/60">Terms of Service</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-white/40 mb-12">Last updated March 23, 2023</p>

          <div className="flex flex-col lg:flex-row gap-16 relative">
            {/* Sidebar TOC */}
            <aside className="lg:w-84 shrink-0 hidden lg:block">
              <div className="sticky top-32 max-h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide py-2 border-l border-white/5">
                <h2 className="text-xs font-headline font-bold uppercase tracking-widest text-accent mb-6 px-4">Contents</h2>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={cn(
                        "block px-4 py-2 text-sm transition-all border-l-2 -ml-[2px]",
                        activeSection === section.id
                          ? "text-accent border-accent bg-accent/5 font-medium"
                          : "text-white/40 border-transparent hover:text-white/70 hover:border-white/20"
                      )}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 max-w-3xl space-y-12 prose prose-invert prose-p:text-white/70 prose-p:leading-relaxed prose-headings:font-headline prose-headings:font-bold">
              <section className="space-y-6">
                <h2 className="text-2xl text-white">AGREEMENT TO OUR LEGAL TERMS</h2>
                <p>
                  We are Neol Interactive (Pty) Ltd. T/A Tektonics Systems, doing business as Tektonics Systems (&apos;Company&apos;, &apos;we&apos;, &apos;us&apos;, or &apos;our&apos;), a company registered in South Africa at Unit 4, 92 Willem Botha Drive, Eldoraigne, Centurion, Gauteng 0157.
                </p>
                <p>
                  We operate the website tektonics.africa (the &apos;Site&apos;), as well as any other related products and services that refer or link to these legal terms (the &apos;Legal Terms&apos;) (collectively, the &apos;Services&apos;).
                </p>
                <p>
                  You can contact us by phone at +27-12-743-5757, email at info@tektonics.africa, or by mail to Unit 4, 92 Willem Botha Drive, Eldoraigne, Centurion, Gauteng 0157, South Africa.
                </p>
                <p>
                  These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&apos;you&apos;), and Neol Interactive (Pty) Ltd. T/A Tektonics Systems, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                </p>
                <p>
                  Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the &apos;Last updated&apos; date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
                </p>
                <p>
                  The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
                </p>
                <p>
                  We recommend that you print a copy of these Legal Terms for your records.
                </p>
              </section>

              <div id="services" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">1. OUR SERVICES</h2>
                <p>
                  The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                </p>
              </div>

              <div id="intellectual-property" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">2. INTELLECTUAL PROPERTY RIGHTS</h2>
                <div className="space-y-4">
                  <h3 className="text-lg text-white font-headline">Our intellectual property</h3>
                  <p>
                    We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &apos;Content&apos;), as well as the trademarks, service marks, and logos contained therein (the &apos;Marks&apos;).
                  </p>
                  <p>
                    Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
                  </p>
                  <p>
                    The Content and Marks are provided in or through the Services &apos;AS IS&apos; for your internal business purpose only.
                  </p>
                  <h3 className="text-lg text-white font-headline">Your use of our Services</h3>
                  <p>
                    Subject to your compliance with these Legal Terms, including the &apos;PROHIBITED ACTIVITIES&apos; section below, we grant you a non-exclusive, non-transferable, revocable licence to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-white/70">
                    <li>access the Services; and</li>
                    <li>download or print a copy of any portion of the Content to which you have properly gained access.</li>
                  </ul>
                  <p>solely for your internal business purpose.</p>
                  <p>
                    Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                  </p>
                </div>
              </div>

              <div id="user-representations" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">3. USER REPRESENTATIONS</h2>
                <p>
                  By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not under the age of 13; (3) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (4) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (5) you will not use the Services for any illegal or unauthorised purpose; and (6) your use of the Services will not violate any applicable law or regulation.
                </p>
              </div>

              <div id="products" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">4. PRODUCTS</h2>
                <p>
                  We make every effort to display as accurately as possible the colours, features, specifications, and details of the products available on the Services. However, we do not guarantee that the colours, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colours and details of the products. All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
                </p>
              </div>

              <div id="purchases-payment" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">5. PURCHASES AND PAYMENT</h2>
                <div className="space-y-4">
                  <p>We accept the following forms of payment:</p>
                  <ul className="list-disc pl-5 text-white/70">
                    <li>Bank Transfer</li>
                  </ul>
                  <p>
                    You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in Rands.
                  </p>
                </div>
              </div>

              <div id="returns-refunds" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">6. RETURN/REFUNDS POLICY</h2>
                <p>All sales are final and no refund will be issued.</p>
              </div>

              <div id="software" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">7. SOFTWARE</h2>
                <p>
                  We may include software for use in connection with our Services. If such software is accompanied by an end user licence agreement (&apos;EULA&apos;), the terms of the EULA will govern your use of the software. If such software is not accompanied by a EULA, then we grant to you a non-exclusive, revocable, personal, and non-transferable licence to use such software solely in connection with our services and in accordance with these Legal Terms.
                </p>
              </div>

              <div id="prohibited-activities" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">8. PROHIBITED ACTIVITIES</h2>
                <p>
                  You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.
                </p>
              </div>

              <div id="user-contributions" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">9. USER GENERATED CONTRIBUTIONS</h2>
                <p>
                  The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services.
                </p>
              </div>

              <div id="contribution-licence" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">10. CONTRIBUTION LICENCE</h2>
                <p>
                  You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
                </p>
              </div>

              <div id="third-party" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">11. THIRD-PARTY WEBSITES AND CONTENT</h2>
                <p>
                  The Services may contain (or you may be sent via the Site) links to other websites (&apos;Third-Party Websites&apos;) as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties.
                </p>
              </div>

              <div id="management" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">12. SERVICES MANAGEMENT</h2>
                <p>
                  We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms.
                </p>
              </div>

              <div id="privacy" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">13. PRIVACY POLICY</h2>
                <p>
                  We care about data privacy and security. Please review our Privacy Policy: https://tektonics.africa/privacy_policy. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.
                </p>
              </div>

              <div id="termination" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">14. TERM AND TERMINATION</h2>
                <p>
                  These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES.
                </p>
              </div>

              <div id="modifications" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">15. MODIFICATIONS AND INTERRUPTIONS</h2>
                <p>
                  We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice.
                </p>
              </div>

              <div id="governing-law" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">16. GOVERNING LAW</h2>
                <p>
                  These Legal Terms shall be governed by and defined following the laws of South Africa. Neol interactive (Pty) Ltd. T/A Tektonics Systems and yourself irrevocably consent that the courts of South Africa shall have exclusive jurisdiction to resolve any dispute.
                </p>
              </div>

              <div id="dispute-resolution" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">17. DISPUTE RESOLUTION</h2>
                <div className="space-y-4">
                  <h3 className="text-lg text-white font-headline">Informal Negotiations</h3>
                  <p>To expedite resolution and control the cost of any dispute, the Parties agree to first attempt to negotiate any Dispute informally for at least thirty (30) days.</p>
                  <h3 className="text-lg text-white font-headline">Binding Arbitration</h3>
                  <p>Any dispute arising out of or in connection with these Legal Terms shall be referred to and finally resolved by the International Commercial Arbitration Court.</p>
                </div>
              </div>

              <div id="corrections" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">18. CORRECTIONS</h2>
                <p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors.</p>
              </div>

              <div id="disclaimer" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">19. DISCLAIMER</h2>
                <p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK.</p>
              </div>

              <div id="liability" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">20. LIMITATIONS OF LIABILITY</h2>
                <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, OR INCIDENTAL DAMAGES.</p>
              </div>

              <div id="indemnification" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">21. INDEMNIFICATION</h2>
                <p>You agree to defend, indemnify, and hold us harmless from and against any loss, damage, liability, claim, or demand.</p>
              </div>

              <div id="user-data" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">22. USER DATA</h2>
                <p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services.</p>
              </div>

              <div id="electronic-comms" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">23. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
                <p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications.</p>
              </div>

              <div id="miscellaneous" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">24. MISCELLANEOUS</h2>
                <p>These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire agreement and understanding between you and us.</p>
              </div>

              <div id="contact-us" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">25. CONTACT US</h2>
                <div className="bg-card/30 border border-white/5 p-8 rounded-2xl">
                  <p className="font-bold text-white mb-4">Neol Interactive (Pty) Ltd. T/A Tektonics Systems</p>
                  <p className="text-white/70">Unit 4, 92 Willem Botha Drive</p>
                  <p className="text-white/70">Eldoraigne</p>
                  <p className="text-white/70">Centurion, Gauteng 0157</p>
                  <p className="text-white/70">South Africa</p>
                  <div className="mt-6 space-y-2">
                    <p className="text-white/70"><span className="text-accent font-bold">Phone:</span> +27-12-743-5757</p>
                    <p className="text-white/70"><span className="text-accent font-bold">Email:</span> info@tektonics.africa</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  );
}
