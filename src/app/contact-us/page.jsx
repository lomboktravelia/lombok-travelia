import Link from 'next/link';
import { FaFacebook, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div>
      <section className="text-center py-20 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Hubungi Kami</h2>
          <h3 className="text-2xl mb-4">Sistem Pemesanan Dan Pembayaran</h3>
          <ul className="text-left list-decimal list-inside mb-8 mx-auto max-w-2xl">
            <li>Pemesanan dapat dilakukan melalui situs web kami atau melalui WhatsApp.</li>
            <li>Pastikan untuk memberikan informasi yang akurat saat melakukan pemesanan.</li>
            <li>Pembayaran dapat dilakukan melalui transfer bank atau metode lain yang tersedia.</li>
            <li>Anda akan menerima konfirmasi pemesanan melalui email atau WhatsApp.</li>
            <li>Jika ada pertanyaan, silakan hubungi layanan pelanggan kami.</li>
            <li>Kebijakan pembatalan dan pengembalian dana berlaku sesuai dengan syarat dan ketentuan.</li>
          </ul>
          <p className="text-left mb-4 mx-auto max-w-2xl">Catatan Penting: Mohon pastikan informasi yang diberikan sudah benar sebelum melakukan pembayaran.</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded mb-8 transition-colors hover:bg-green-700">Hubungi Kami</button>
          <h3 className="text-2xl mb-4">Alamat</h3>
          <p className="text-left mb-4 mx-auto max-w-2xl">Gg. Alor No.2, Rembiga, Kec. Selaparang, Kota Mataram, Nusa Tenggara Barat. 83123</p>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Link href="https://www.facebook.com/lomboktravelia" legacyBehavior>
              <a className="text-blue-600 text-2xl hover:text-blue-700 transition-colors"><FaFacebook /></a>
            </Link>
            <Link href="https://wa.me/83143052787" legacyBehavior>
              <a className="text-green-600 text-2xl hover:text-green-700 transition-colors"><FaWhatsapp /></a>
            </Link>
            <Link href="https://www.instagram.com/syahrul11_amri" legacyBehavior>
              <a className="text-pink-600 text-2xl hover:text-pink-700 transition-colors"><FaInstagram /></a>
            </Link>
            <Link href="mailto:lomboktravelial@gmail.com" legacyBehavior>
              <a className="text-red-600 text-2xl hover:text-red-700 transition-colors"><FaEnvelope /></a>
            </Link>
          </div>
          <div className="flex justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1403199132234!2d116.04899767454628!3d-8.48822688792971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbf91bfe041f1%3A0xe4aa7e5313b6b672!2sJl.%20Raya%20Senggigi%2C%20Senggigi%2C%20Batu%20Layar%2C%20Kabupaten%20Lombok%20Barat%2C%20Nusa%20Tenggara%20Barat%2083355!5e0!3m2!1sen!2sid!4v1658827479567!5m2!1sen!2sid"
              width="600"
              height="450"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
