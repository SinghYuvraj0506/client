import { footerData } from "../lib/constants";

const Footer = () => {
    return (
        <footer className="bg-primaryBlack text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerData?.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section.category}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Amazon Mock. All rights reserved.</p>
            <p>Terms of Service | Privacy Policy</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  