import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: "400"
});

export default function Footer() {
  return (
    <div className="bg-black text-white py-8">
      <div className="flex flex-wrap justify-center gap-8 md:gap-20 max-w-[1170px] mx-auto">
        
        <div className="w-full md:w-[312px] h-auto text-center md:text-left">
          <h2 className="text-[20px] md:text-[24px] font-bold mb-4">About Us</h2>
          <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] mb-4">
          Corporate clients and leisure travelers has
been relying on Groundlink for dependab
safe, and professional chauffeured car
service in major cities across World.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
            <img
              src="/assets/f1.svg"
              alt=" Support Icon"
              width={40}
              height={40}
              className="mr-0 md:mr-4 mb-4 md:mb-0"
            />
            <div className="w-[149px]">
              <p className={`${inter.className}flex flex-row text-[14px] md:text-[16px]`}>
              Opening Hours
              <br />
              Mon - Sat(8.00 - 6.00)
              <br />
              Sunday - Closed
              </p>
            </div>
          </div>
        </div>

      
        <div className="w-full md:w-[143px] h-auto text-center md:text-left">
          <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            {['About', 'News', 'Partner', 'Team', 'Menu', 'Contact'].map((link, index) => (
              <li
                key={index}
                className="text-[18px] md:text-[20px] cursor-pointer hover:text-[#FF9F0D]"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        
        <div className="w-full md:w-[170px] h-auto text-center md:text-left">
          <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Help?</h2>
          <ul className="space-y-2">
            {[
              'Terms and Conditions',
              'FAQ',
              'Reporting',
              'Documentation',
              'Support Policy',
              'Privacy',
            ].map((item, index) => (
              <li
                key={index}
                className="text-[18px] md:text-[20px] cursor-pointer hover:text-[#FF9F0D]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Recent Posts */}
        <div className="w-full md:w-[244px] h-auto text-center md:text-left">
          <h2 className="text-[20px] md:text-[24px] font-bold mb-4">Recent Posts</h2>
          {[
            { date: '10 February 2022', text: 'Keep your business growing', src: '/assets/f2.svg' },
            { date: '12 March 2022', text: 'Expand your horizons', src: '/assets/f3.svg' },
            { date: '15 April 2022', text: 'Achieve your dreams', src: '/assets/f4.svg' },
          ].map((post, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:w-[244px] h-auto mb-4 pb-2"
            >
              <img
                src={post.src}
                alt={post.text}
                width={59}
                height={48}
                className="mr-0 md:mr-4 mb-4 md:mb-0"
              />
              <div>
                <p className="text-[12px] md:text-[14px] text-gray-400">{post.date}</p>
                <p className="text-[14px] md:text-[16px]">{post.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
