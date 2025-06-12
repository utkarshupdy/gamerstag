import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollText, Shield, User, AlertCircle } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding hero-gradient pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-6">
              <ScrollText className="w-4 h-4" />
              <span>Legal Information</span>
            </div>
            <h1 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Terms & <span className="text-white">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Please read these terms and conditions carefully before using GAMERS TAG platform and services.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Quick Summary */}
            <div className="professional-card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-space font-bold text-2xl mb-4">Quick Summary</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By using GAMERS TAG, you agree to these terms. We provide a gaming platform that connects gamers, creators, and businesses. 
                    You're responsible for your content and account security. We respect your privacy and follow applicable data protection laws.
                  </p>
                </div>
              </div>
            </div>

            {/* 1. Agreement to Terms */}
            <div className="professional-card p-8">
              <h2 className="font-space font-bold text-2xl mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-primary" />
                1. Agreement to Terms
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  By accessing and using GAMERS TAG ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These terms apply to all users of the platform, including gamers, content creators, businesses, and any other participants in our ecosystem.
                </p>
              </div>
            </div>

            {/* 2. Use License */}
            <div className="professional-card p-8">
              <h2 className="font-space font-bold text-2xl mb-6">2. Use License</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Permission is granted to temporarily download one copy of GAMERS TAG mobile application per device for personal, non-commercial transitory viewing only.
                </p>
                <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained in the platform</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </div>

            {/* 3. User Accounts */}
            <div className="professional-card p-8">
              <h2 className="font-space font-bold text-2xl mb-6">3. User Accounts</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times.
                </p>
                <p>
                  You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <p>
                  You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.
                </p>
              </div>
            </div>

            {/* 4. Gaming Content and Profiles */}
            <div className="professional-card p-8">
              <h2 className="font-space font-bold text-2xl mb-6">4. Gaming Content and Profiles</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Users may create gaming profiles, connect social accounts, and share gaming-related content through our platform.
                </p>
                <p>
                  You retain ownership of any content you submit, post, or display on or through the platform.
                </p>
                <p>
                  By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content.
                </p>
              </div>
            </div>

            {/* 5. Privacy and Data Protection */}
            <div className="professional-card p-8">
              <h2 className="font-space font-bold text-2xl mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-primary" />
                5. Privacy and Data Protection
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our platform.
                </p>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  We comply with applicable data protection regulations, including GDPR where applicable.
                </p>
              </div>
            </div>

            {/* 6. Prohibited Uses */}
            <div className="professional-card p-8">
              <h2 className="font-space font-bold text-2xl mb-6">6. Prohibited Uses</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>You may not use our platform:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </div>
            </div>

            {/* 7. Termination */}
            <div className="professional-card p-8">
              <h2 className="font-space font-bold text-2xl mb-6">7. Termination</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We may terminate or suspend your account and bar access to the platform immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.
                </p>
                <p>
                  If you wish to terminate your account, you may simply discontinue using the platform or contact our support team.
                </p>
              </div>
            </div>

            {/* 8. Disclaimer */}
            <div className="professional-card p-8">
              <h2 className="font-space font-bold text-2xl mb-6">8. Disclaimer</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The information on this platform is provided on an 'as is' basis. To the fullest extent permitted by law, GAMERS TAG excludes all representations, warranties, conditions, and terms.
                </p>
                <p>
                  GAMERS TAG shall not be liable for any damages arising out of or in connection with your use of the platform.
                </p>
              </div>
            </div>

            {/* 9. Changes to Terms */}
            <div className="professional-card p-8">
              <h2 className="font-space font-bold text-2xl mb-6">9. Changes to Terms</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the platform.
                </p>
                <p>
                  Your continued use of the platform after any such changes constitutes your acceptance of the new terms.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="professional-card p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h2 className="font-space font-bold text-2xl mb-6">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@gamerstag.com</p>
                  <p><strong>Address:</strong> Kerala, India</p>
                  <p><strong>Company:</strong> GAMERS TAG</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}