const Footer = () => {
  return (
    <div className="bg-gray-950">
      <div className="text-white container">
        <div className="grid grid-rows-1 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 pt-6 gap-5 ">
            <div className="flex flex-col">
              <div className="font-semibold text-lg">Company</div>
              <div>
                <ul>
                  <li className="text-md font-light hover:font-bold hover:underline hover:cursor-pointer">
                    About
                  </li>
                  <li className="text-md font-light hover:font-bold hover:underline hover:cursor-pointer">
                    Portfolio
                  </li>
                  <li className="text-md font-light hover:font-bold hover:underline hover:cursor-pointer">
                    Contact
                  </li>
                  <li className="text-md font-light hover:font-bold hover:underline hover:cursor-pointer">
                    News
                  </li>
                  <li className="text-md font-light hover:font-bold hover:underline hover:cursor-pointer">
                    Blog
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg">Services</div>
              <ul>
                <li className="text-md font-light hover:font-bold hover:underline hover:cursor-pointer">
                  Web development
                </li>
                <li className="text-md font-light hover:font-bold hover:underline hover:cursor-pointer">
                  IT Admin Services
                </li>
                <li className="text-md font-light hover:font-bold hover:underline hover:cursor-pointer">
                  Business Development
                </li>
                <li className="text-md font-light hover:font-bold hover:underline hover:cursor-pointer">
                  Cyber Security
                </li>
              </ul>
            </div>
            <div className="font-semibold">
              <div className="text-lg">Solcials</div>
              <div className="flex gap-5 text-md">
                <div>Facebook</div>
                <div>Instagram</div>
                <div>Youtube</div>
              </div>
            </div>
          </div>
          <div className="pb-3 flex items-end justify-end h-[70px]">
            Company Registeration Number and copy right. Test
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
