const Footer = () => {
    return (
      <footer className="py-8 text-gray-300 bg-gray-800">
        <div className="container px-4 mx-auto">
          {/* Tentang Aplikasi */}
          <div className="mb-6 text-center">
            <h2 className="text-lg font-semibold text-gray-100">Pulmo</h2>
            <p className="text-sm">
              Aplikasi yang membantu dokter dan pasien
              dengan teknologi berbasis AI dan machine learning.
            </p>
          </div>

          {/* Navigasi */}
          <div className="flex justify-center mb-6 space-x-6">
            <a href="/" className="hover:text-gray-100">home</a>
            <a href="/features" className="hover:text-gray-100">riwayat</a>
            <a href="/about" className="hover:text-gray-100">jadwal</a>
          </div>

          {/* Kontak */}
          <div className="mb-6 text-center">
            <p>Email: <a href="mailto:support@lungaid.com" className="hover:text-gray-100">support@lungaid.com</a></p>
            <p>Telepon: +62 123 4567 890</p>
            <p>Alamat: Jl. Sehat No. 10, Jakarta, Indonesia</p>
          </div>

          {/* Hak Cipta & Disclaimer */}
          <div className="pt-6 text-sm text-center text-gray-500 border-t border-gray-700">
            <p>© 2024 Pulmo. Semua Hak Dilindungi.</p>
            <p className="mt-2">
              Informasi di aplikasi ini hanya untuk tujuan edukasi dan tidak menggantikan konsultasi medis profesional.
            </p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
