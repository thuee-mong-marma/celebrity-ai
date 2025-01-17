import Link from 'next/link';

const footerData = [
  {
    title: 'Github',
    link: 'https://github.com/thuee-mong-marma',
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/thuee-mong-sing-520127220/',
  },
];

const Footer = () => {
  return (
    <footer className="py-6 space-y-4 text-purple">
      <div className="text-xl text-center">Made with &#10084; by Mong</div>
      <ul className="flex items-center justify-center gap-8">
        {footerData.map((item, index) => (
          <li key={index}>
            <Link href={item.link} target="_blank" className="hover:underline">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
