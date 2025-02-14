// app/terms/page.jsx

const TermsAndPolicies = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms and Policies</h1>
      <p className="mb-4">
        Welcome to our platform. By using our services, you agree to the following terms and conditions...
      </p>
      <h2 className="text-xl font-semibold mb-2">1. User Agreement</h2>
      <p className="mb-4">You must be at least 18 years old to use our platform...</p>
      <h2 className="text-xl font-semibold mb-2">2. Privacy Policy</h2>
      <p className="mb-4">We collect and use your data in accordance with our privacy policy...</p>
      <h2 className="text-xl font-semibold mb-2">3. Payment Terms</h2>
      <p className="mb-4">All transactions are secure and processed through our payment gateway...</p>
      <h2 className="text-xl font-semibold mb-2">4. Cancellation Policy</h2>
      <p className="mb-4">Cancellations made within 24 hours of booking are fully refundable...</p>
      <h2 className="text-xl font-semibold mb-2">5. Contact Information</h2>
      <p>If you have any questions, please contact us at support@example.com.</p>
    </div>
  );
};

export default TermsAndPolicies;
