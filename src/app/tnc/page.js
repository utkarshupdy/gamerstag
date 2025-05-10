'use client'
import React from 'react';

const TermsAndConditionsPage = () => {
  // Gradients from the requirements
  const redGradient = 'linear-gradient(to bottom, #DE2234, #BB0130)';
  const whiteGradient = 'linear-gradient(to bottom, #FFFFFF, #999999)';
  
  // Text gradient style for all text elements
  const textGradientStyle = {
    background: whiteGradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'white', // Fallback
    display: 'inline-block'
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Header with dark background */}
      <header className="text-center w-full h-80 flex flex-col items-center justify-center py-12 bg-[#1A1A1A]">
        <h1 className="text-5xl font-meduim mb-2" style={{ letterSpacing: '0.05em', ...textGradientStyle }}>
          Terms and Conditions
        </h1>
        <p className="text-sm mx-auto" style={{ letterSpacing: '0.10em', maxWidth: '80%', margin: '0 auto' }}>
          Our best features tailored for you from our platform
        </p>
      </header>
      
      {/* Red divider */}
      <div className=" border-b border-red-800 w-full"></div>
      
      {/* Content Section */}
      <div className="container mx-auto px-16 py-12">
        <h2 className="text-2xl font-medium mb-6" style={{ ...textGradientStyle }}>
          Terms and Conditions for GAMERS TAG
        </h2>
        
        <p className="mb-6 text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
          Welcome to Gamers Tag! These Terms and Conditions govern your use of our mobile
          application. By accessing or using the Gamers Tag app, you agree to comply with and
          be bound by these terms. If you do not agree with any part of these terms, please do
          not use our app.
        </p>
        
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>1. Acceptance of Terms</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              By downloading, installing, or using the Gamers Tag app, you acknowledge that you
              have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>2. User Accounts</h3>
            <p className="mb-1 text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>a. You may need to create an account to access certain features of the app.</p>
            <p className="mb-1 text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>b. You are responsible for maintaining the confidentiality of your account information.</p>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>c. You agree to notify us immediately of any unauthorized use of your account.</p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>3. User Conduct</h3>
            <p className="mb-2 text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              You agree not to use the app for any unlawful purpose or in a way that could damage, disable, overburden,
              or impair the app. Prohibited activities include but are not limited to:
            </p>
            <p className="mb-1 text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>a. Harassment or abuse of any kind.</p>
            <p className="mb-1 text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>b. Impersonating any person or entity.</p>
            <p className="mb-1 text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>c. Distributing spam or unsolicited communications.</p>
            <p className="mb-1 text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>d. Engaging in fraudulent activities.</p>
            <p className="mb-3 text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>e. Any form of hacking or unethical behavior.</p>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              Gamers Tag reserves the right to monitor user activity and take appropriate action against users who violate
              these terms, including suspension or termination of accounts.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>4. Intellectual Property Rights</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              All content within the Gamers Tag app, including text, graphics, logos, and software, is owned by or
              licensed to Gamers Tag and is protected by intellectual property laws. You may not reproduce, distribute,
              or create derivative works from any content without our express written permission.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>5. Privacy Policy</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              Your privacy is important to us. We do not collect personal information such as location data, contacts,
              or storage access. Our Privacy Policy outlines how we handle your information and can be found within the app.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>6. Third-Party Links</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              The app may contain links to third-party websites or services that are not owned or controlled by Gamers Tag.
              We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>7. Limitations of Liability</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              To the fullest extent permitted by law, Gamers Tag shall not be liable for any indirect, incidental, special,
              consequential damages arising out of or in connection with your use of the app.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>8. Indemnification</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              You agree to indemnify and hold harmless Gamers Tag and its affiliates from any claims, losses, liabilities,
              damages, costs, or expenses arising from your violation of these Terms and Conditions.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>9. Modification of Terms</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              Gamers Tag reserves the right to modify these Terms and Conditions at any time. Changes will be effective
              immediately upon posting on this page. Your continued use of the app after changes constitutes acceptance of those changes.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>10. Governing Law</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
              Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Kochi, Kerala.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>11. Contact Information</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              For any questions about these Terms and Conditions or our services, please contact us at:
              Email: contactus@gamerstag.in, Website: www.gamerstag.in
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>12. User Content</h3>
            <p className="mb-1 text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>a. Users may submit content (e.g., comments, feedback) through the app.</p>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>c. By submitting content, you grant Gamers Tag a non-exclusive, worldwide license to use, reproduce, modify, publish, and distribute such content.</p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>13. Termination</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              Gamers Tag reserves the right to suspend or terminate your access to the app at our discretion without notice if you violate these terms.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>14. Disclaimer of Warranties</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              The app is provided on an &quot;as-is&quot; basis without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>15. Payment Terms</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
              If applicable, all fees for services provided through the app will be clearly stated prior to payment processing.
              Users are responsible for ensuring that their payment information is accurate.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-medium mb-2" style={{ ...textGradientStyle }}>16. Community Guidelines</h3>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>Users must adhere to community guidelines while using the app:</p>
            <p className="mb-1 text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>a. Respect other users.</p>
            <p className="mb-1 text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>b. Engage in fair play during gaming activities.</p>
            <p className="text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>c. Report any misconduct through designated channels within the app.</p>
          </section>
        </div>
        
        <div className="mt-12 pt-8">
          <p className="text-center text-[#A6A6A6]" style={{ letterSpacing: '0.07em' }}>
            By using Gamers Tag, you acknowledge that you have read these terms carefully and agree to abide by them.
            Thank you for being a part of our gaming community!
          </p>
        </div>
      </div>
      
      {/* Footer with red gradient */}
      <footer 
        style={{ background: redGradient }} 
        className="mt-auto py-4 text-center"
      >
        <p style={{ ...textGradientStyle }}>© 2025 Gamers Tag. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsAndConditionsPage;