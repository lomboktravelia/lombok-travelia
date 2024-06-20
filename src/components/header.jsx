import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-green-600">Lombok Travelia</a>
        </Link>
        <nav className="space-x-4">
        <Link href="/home" legacyBehavior>
            <a className="text-gray-600 hover:text-green-600">Home</a>
          </Link>
          <Link href="/paket-tour" legacyBehavior>
            <a className="text-gray-600 hover:text-green-600">Paket Tour</a>
          </Link>
          <Link href="/destinasi" legacyBehavior>
            <a className="text-gray-600 hover:text-green-600">Destinasi</a>
          </Link>
          <Link href="/gallery" legacyBehavior>
            <a className="text-gray-600 hover:text-green-600">Gallery</a>
          </Link>
          <Link href="/contact-us" legacyBehavior>
            <a className="text-gray-600 hover:text-green-600">Contact Us</a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a className="bg-green-600 text-white px-4 py-2 rounded">Login</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
