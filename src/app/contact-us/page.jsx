"use client";
import Link from 'next/link';
import { useRef } from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaEnvelope, FaExclamationCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_umt41mo', 'template_3l8e47h', form.current, 'Jt-PMfVUvKZZU6Jde')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Pesan berhasil dikirim!',
            showConfirmButton: false,
            timer: 1500
          });
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Terjadi kesalahan',
            text: 'Silakan coba lagi.',
            showConfirmButton: false,
            timer: 1500
          });
      });
  };

  return (
    <div>
      <section className="text-center py-20 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-green-600">Hubungi Kami</h2>
          
          <p className="text-left mb-8 mx-auto max-w-2xl">
            <strong>Lombok Travelia</strong> adalah agen wisata dari Lombok yang berfokus pada Tour dan Travel yang dirancang untuk mendukung keinginan wisatawan yang berkunjung ke Lombok. Lombok Travelia berada di bawah naungan CV. Lombok Travelia yang berpusat di kota Mataram yang beralamat di Gg. Alor No.2, Rembiga, Kec. Selaparang, Kota Mataram, Nusa Tenggara Barat.
          </p>
          <p className="text-left mb-8 mx-auto max-w-2xl">
            Untuk mendukung Transportasi dan Perjalanan Wisata anda, Lombok Travelia dengan cermat membentuk tim yang handal, enerjik, kreatif, dan bertanggung jawab pada profesi. Kami menjamin perjalanan Anda akan Aman dan nyaman agar memberikan pengalaman wisata yang berkesan selama di Lombok.
          </p>
          <p className="text-left mb-8 mx-auto max-w-2xl italic">
            Salam Pariwisata,
            <br />
            Lombok Travelia
          </p>

          <h3 className="text-2xl mb-4">Sistem Pemesanan Dan Pembayaran</h3>
          <ul className="text-left list-decimal list-inside mb-8 mx-auto max-w-2xl">
            <li className="mb-2">Pemesanan dapat dilakukan melalui situs web kami atau melalui WhatsApp.</li>
            <li className="mb-2">Pastikan untuk memberikan informasi yang akurat saat melakukan pemesanan.</li>
            <li className="mb-2">Pembayaran dapat dilakukan melalui transfer bank atau metode lain yang tersedia.</li>
            <li className="mb-2">Anda akan menerima konfirmasi pemesanan melalui email atau WhatsApp.</li>
            <li className="mb-2">Jika ada pertanyaan, silakan hubungi layanan pelanggan kami.</li>
            <li>Kebijakan pembatalan dan pengembalian dana berlaku sesuai dengan syarat dan ketentuan.</li>
          </ul>

          <div className="flex items-center text-left mb-4 mx-auto max-w-2xl text-yellow-600">
            <FaExclamationCircle className="mr-2" size={24} />
            <p>Catatan Penting: Mohon pastikan informasi yang diberikan sudah benar sebelum melakukan pembayaran.</p>
          </div>

          <button className="bg-green-600 text-white px-6 py-3 rounded mb-8 transition-colors hover:bg-green-700 hover:scale-105 transform">Hubungi Kami</button>
          
          <h3 className="text-2xl mb-4">Alamat</h3>
          <p className="text-left mb-4 mx-auto max-w-2xl">Gg. Alor No.2, Rembiga, Kec. Selaparang, Kota Mataram, Nusa Tenggara Barat. 83123</p>
          
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Link href="https://www.facebook.com/lomboktravelia" legacyBehavior>
              <a className="text-blue-600 text-3xl hover:text-blue-700 transition-colors transform hover:scale-110"><FaFacebook /></a>
            </Link>
            <Link href="https://wa.me/83143052787" legacyBehavior>
              <a className="text-green-600 text-3xl hover:text-green-700 transition-colors transform hover:scale-110"><FaWhatsapp /></a>
            </Link>
            <Link href="https://www.instagram.com/syahrul11_amri" legacyBehavior>
              <a className="text-pink-600 text-3xl hover:text-pink-700 transition-colors transform hover:scale-110"><FaInstagram /></a>
            </Link>
            <Link href="mailto:lomboktravelial@gmail.com" legacyBehavior>
              <a className="text-red-600 text-3xl hover:text-red-700 transition-colors transform hover:scale-110"><FaEnvelope /></a>
            </Link>
          </div>
          
          <div className="flex justify-center mb-8">
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
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4 text-green-600">Formulir Kritik & Saran</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nama</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" id="name" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="email" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Pesan</label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" id="message" rows="4" required></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Kirim</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}