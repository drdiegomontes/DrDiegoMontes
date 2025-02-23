import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-light mb-8">Privacy Policy</h1>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          Dr. Diego Montes Chiropractic ("we", "us", or "our") operates the website https://www.drdiegomontes.com (the
          "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal
          data when you use our Service and the choices you have associated with that data.
        </p>
        <h2 className="text-2xl font-light mt-8 mb-4">Information Collection and Use</h2>
        <p className="mb-4">
          We collect several different types of information for various purposes to provide and improve our Service to
          you.
        </p>
        <h3 className="text-xl font-light mt-6 mb-2">Types of Data Collected</h3>
        <h4 className="text-lg font-medium mt-4 mb-2">Personal Data</h4>
        <p className="mb-4">
          While using our Service, we may ask you to provide us with certain personally identifiable information that
          can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but
          is not limited to:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Cookies and Usage Data</li>
        </ul>
        <h2 className="text-2xl font-light mt-8 mb-4">Use of Data</h2>
        <p className="mb-4">Dr. Diego Montes Chiropractic uses the collected data for various purposes:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our Service</li>
          <li>To monitor the usage of our Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
        <h2 className="text-2xl font-light mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page.
        </p>
        <p className="mb-4">
          We will let you know via email and/or a prominent notice on our Service, prior to the change becoming
          effective and update the "effective date" at the top of this Privacy Policy.
        </p>
        <p className="mb-4">
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
          effective when they are posted on this page.
        </p>
        <h2 className="text-2xl font-light mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>By email: privacy@drdiegomontes.com</li>
          <li>
            By visiting this page on our website:{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              https://www.drdiegomontes.com/contact
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}

