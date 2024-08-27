/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const TipsItem = ({ number, title, description }) => (
  <>
    <li className="font-bold">
      {number}. {title}
    </li>
    <p className="mb-4">{description}</p>
  </>
);

TipsItem.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};

const Card = ({ title, to, img }) => {
  return (
    <a href={to} className="w-full bg-white rounded-[25px] shadow flex-col justify-start items-start">
      <div className="self-stretch p-4 flex-col justify-start items-start gap-2.5 flex">
        <img className="self-stretch grow shrink basis-0 rounded-[25px]" src={img} />
      </div>
      <div className="self-stretch  px-4 flex-col justify-center items-start gap-2.5 flex">
        <div className="self-stretch text-black text-lg font-bold font-['Poppins'] tracking-tight">{title}</div>
      </div>
      <div className="px-4 pt-2 pb-4 flex-col justify-start items-start gap-2.5 flex">
        <div className="px-4 py-2 bg-sky-400 rounded-xl justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-base font-bold font-['Open Sans'] tracking-tight">Baca Selengkapnya</div>
        </div>
      </div>
    </a>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  img: PropTypes.string,
};

function TipsTrik1() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f2f2f2] flex items-center justify-center">
      <div className="md:p-2 p-2 max-w-7xl bg-[#f2f2f2] w-full">
        <Link to={`/beranda`} className="flex flex-row cursor-pointer md:mt-4 mt-2 px-4 h-9 items-center w-fit">
          <img src="/back.svg" alt="back" className="h-4 mr-4" />
          <div className="text-black text-2xl font-bold font-['Poppins']">Kembali</div>
        </Link>
        <div className="flex flex-col md:flex-row min-h-0 gap-[2%] mt-2">
          <div className="flex flex-col md:w-[67%] h-full w-[100%] py-4 md:px-8 px-4 md:mb-0 mb-12 gap-[10px]">
            <div className="relative w-full h-72 rounded-[25px] shadow">
              <img className="w-full h-full rounded-[25px]" src="/bgtips1.png" alt="Placeholder" />
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <span className="text-white md:text-[2rem] text-[1.5rem] md:p-0 p-2 text-center  font-bold">Tips dan Trik Agar Semua Tugas Dapat Selesai Tepat Waktu</span>
              </div>
            </div>
            <div className="separator h-[2px] my-3 shadow-lg w-full rounded-[1px] bg-black transform "></div>
            <div className="w-full h-fit">
              <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                Membuat Daftar Tugas <br />
              </span>
              <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                Untuk mengelola waktu Anda dengan efektif, mulailah dengan membuat daftar tugas yang perlu diselesaikan. Tuliskan semua tugas yang harus Anda lakukan, mulai dari tugas besar hingga yang kecil. Setelah itu, prioritaskan
                tugas-tugas tersebut berdasarkan urgensi dan pentingnya. Anda bisa menggunakan matriks Eisenhower untuk membantu mengelompokkan tugas: tugas yang penting dan mendesak harus dikerjakan segera, tugas yang penting tapi tidak
                mendesak perlu dijadwalkan, tugas yang tidak penting tapi mendesak dapat didelegasikan jika memungkinkan, dan tugas yang tidak penting serta tidak mendesak bisa dihindari atau dikerjakan nanti di waktu luang..
                <br />
              </span>
            </div>
            <div className="flex flex-row justify-between relative h-full mt-6">
              <div className="flex flex-col md:w-[49%]  w-[100%] h-full  gap-3 justify-beetwen items-center ">
                <img className="w-full h-full rounded-[4px]" src="/image1.png" alt="Placeholder" />
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Hindari Prokrastinasi <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Prokrastinasi adalah musuh produktivitas. Untuk menghindarinya, mulailah mengerjakan tugas segera setelah Anda menetapkannya. Jangan menunda pekerjaan yang bisa dilakukan hari ini. Biasakan diri untuk mengambil tindakan
                    langsung dan menyelesaikan tugas sebelum tenggat waktu. Jika Anda merasa sulit untuk memulai, cobalah membagi tugas besar menjadi bagian-bagian kecil yang lebih mudah dikelola. Dengan begitu, Anda bisa mulai dengan
                    langkah-langkah kecil dan perlahan-lahan menyelesaikan seluruh tugas tanpa merasa terbebani. Mengembangkan kebiasaan untuk segera mengerjakan tugas akan membantu Anda menjadi lebih produktif dan mengurangi stres akibat
                    pekerjaan yang menumpuk.
                    <br />
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:w-[49%] w-[100%] h-full md:px-3 px-2 gap-3 justify-center items-center">
                <div className="w-full h-fit">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Gunakan Kalender atau Aplikasi Manajemen Waktu <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Setelah Anda memiliki daftar tugas yang terprioritaskan, masukkan tugas-tugas tersebut ke dalam kalender atau aplikasi manajemen waktu. Tetapkan jadwal yang realistis untuk menyelesaikan setiap tugas dan pastikan untuk
                    memasukkan batas waktu yang masuk akal. Dengan menjadwalkan tugas-tugas Anda, Anda dapat mengelola waktu dengan lebih efektif dan memastikan bahwa setiap tugas mendapatkan perhatian yang cukup. Aplikasi seperti Google
                    Calendar, Microsoft Outlook, atau aplikasi manajemen tugas seperti Todoist dan Trello dapat sangat membantu dalam mengatur dan mengingatkan Anda tentang tenggat waktu.
                    <br />
                  </span>
                </div>
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Membuat Daftar Tugas <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Teknik Pomodoro adalah metode manajemen waktu yang melibatkan bekerja selama 25 menit, diikuti dengan istirahat selama 5 menit. Setelah menyelesaikan empat sesi kerja, Anda bisa mengambil istirahat lebih lama selama
                    15-30 menit. Teknik ini membantu meningkatkan fokus dan produktivitas dengan memberikan waktu istirahat yang teratur untuk menghindari kelelahan. Selama sesi kerja (disebut "pomodoro"), pastikan untuk menghindari
                    gangguan dan benar-benar fokus pada tugas yang sedang Anda kerjakan. Setelah sesi selesai, gunakan waktu istirahat untuk meregangkan tubuh, minum air, atau melakukan aktivitas ringan lainnya.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-[30%] w-[100%] max-h-screen md:px-3 px-2 gap-6 items-center overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-6">
              <Card title="Tips dan Trik Menyelesaikan Tugas Tepat Waktu" img="/tumb1.png" to="/tips/1" />
              <Card title="Tips dan Trik Tidak Terganggu Dalam Belajar dan Aktivitas" img="/tumb2.png" to="/tips/2" />
              <Card title="Tips dan Trik Meningkatkan Produktivitas" img="/tumb3.png" to="/tips/3" />
              <Card title="Tips dan Trik Meningkatkan Fokus dan Konsentrasi" img="/tumb4.png" to="/tips/4" />
              <Card title="Tips dan Trik Dalam Menentapkan Produktivitas" img="/tumb5.png" to="/tips/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TipsTrik2() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f2f2f2] flex items-center justify-center">
      <div className="md:p-2 p-2 max-w-7xl bg-[#f2f2f2] w-full">
        <Link to={`/beranda`} className="flex flex-row cursor-pointer md:mt-4 mt-2 px-4 h-9 items-center w-fit">
          <img src="/back.svg" alt="back" className="h-4 mr-4" />
          <div className="text-black text-2xl font-bold font-['Poppins']">Kembali</div>
        </Link>
        <div className="flex flex-col md:flex-row min-h-0 gap-[2%] mt-2">
          <div className="flex flex-col md:w-[67%] h-full w-[100%] py-4 md:px-8 px-4 md:mb-0 mb-12 gap-[10px]">
            <div className="relative w-full h-72 rounded-[25px] ">
              <img className="w-full h-full rounded-[25px]" src="/bgtips2.png" alt="Placeholder" />
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <span className="text-white md:text-[2rem] text-[1.5rem] md:p-0  text-center  font-bold">Tips dan Trik Agar Tidak Terganggu Saat Belajar & Beraktivitas</span>
              </div>
            </div>
            <div className="separator h-[2px] my-3 shadow-lg w-full rounded-[1px] bg-black transform "></div>

            <div className="flex flex-row justify-between relative h-full mt-6">
              <div className="flex flex-col md:w-[49%]  w-[100%] h-full  gap-3 justify-beetwen items-center ">
                <img className="w-full h-full rounded-[4px]" src="/image2.png" alt="Placeholder" />
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Gunakan Teknik Pomodoro <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Membuat batasan yang jelas untuk gangguan adalah penting agar Anda bisa tetap fokus pada pekerjaan. Beri tahu orang di sekitar Anda kapan Anda membutuhkan waktu tanpa gangguan. Misalnya, Anda bisa menggunakan tanda
                    seperti menempatkan headphone di kepala atau memasang tanda "Jangan Diganggu" di pintu ruang kerja. Jika bekerja di lingkungan kantor, komunikasikan dengan rekan kerja tentang waktu-waktu tertentu di mana Anda tidak
                    boleh diganggu kecuali dalam keadaan darurat. Dengan menetapkan batasan yang jelas, Anda bisa menciptakan waktu fokus yang lebih produktif dan mengurangi interupsi yang tidak perlu.
                    <br />
                  </span>
                </div>
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Pahami Prioritas dan Jadwal Anda <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Memahami prioritas dan jadwal Anda adalah kunci untuk mengelola gangguan secara efektif. Jangan biarkan gangguan mengubah prioritas atau jadwal yang telah Anda tetapkan. Tetaplah fokus pada tugas yang paling penting dan
                    mendesak. Buatlah jadwal harian atau mingguan yang jelas, dan sesuaikan jadwal tersebut sesuai dengan kebutuhan Anda. Jika ada gangguan yang tidak dapat dihindari, coba untuk menyesuaikan jadwal Anda tanpa mengabaikan
                    tugas-tugas penting. <br />
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:w-[49%] w-[100%] h-full md:px-3 px-2 gap-3 justify-center items-center">
                <div className="w-full h-fit">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Identifikasi Sumber Gangguan <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    untuk mengurangi gangguan adalah mengidentifikasi apa yang menjadi sumbernya. Gangguan bisa berasal dari lingkungan sekitar, seperti suara bising atau aktivitas orang lain, dari gadget seperti ponsel dan komputer, atau
                    dari faktor internal seperti kurangnya fokus atau pikiran yang terus melayang. Dengan mengetahui sumber gangguan, Anda bisa mengambil tindakan yang tepat untuk mengatasinya. Buatlah catatan harian untuk melacak kapan dan
                    di mana gangguan terjadi, serta bagaimana perasaan Anda saat itu. Dengan memahami pola gangguan ini, Anda dapat membuat strategi yang lebih efektif untuk mengurangi atau menghilangkannya.
                    <br />
                  </span>
                </div>
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Buatlah Lingkungan Kerja Yang Tenang <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Menciptakan lingkungan kerja yang bebas dari gangguan adalah langkah penting untuk meningkatkan produktivitas. Pilihlah tempat yang tenang dan jauh dari sumber kebisingan. Matikan pemberitahuan pada ponsel atau komputer
                    yang tidak penting selama Anda bekerja. Jika memungkinkan, gunakan ruang yang terisolasi atau pintu yang dapat ditutup untuk mengurangi interupsi dari orang lain. Jika bekerja dari rumah, komunikasikan dengan anggota
                    keluarga atau teman serumah tentang waktu kerja Anda sehingga mereka tahu kapan tidak boleh mengganggu. Investasikan pada peralatan yang membantu meredam suara, seperti earphone noise-canceling, untuk menciptakan
                    lingkungan yang lebih kondusif.
                  </span>
                </div>
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Tetapkan Batas untuk Gangguan <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Membuat batasan yang jelas untuk gangguan adalah penting agar Anda bisa tetap fokus pada pekerjaan. Beri tahu orang di sekitar Anda kapan Anda membutuhkan waktu tanpa gangguan. Misalnya, Anda bisa menggunakan tanda
                    seperti menempatkan headphone di kepala atau memasang tanda "Jangan Diganggu" di pintu ruang kerja. Jika bekerja di lingkungan kantor, komunikasikan dengan rekan kerja tentang waktu-waktu tertentu di mana Anda tidak
                    boleh diganggu kecuali dalam keadaan darurat. Dengan menetapkan batasan yang jelas, Anda bisa menciptakan waktu fokus yang lebih produktif dan mengurangi interupsi yang tidak perlu.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-[30%] w-[100%] max-h-screen md:px-3 px-2 gap-6 items-center overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-6">
              <Card title="Tips dan Trik Menyelesaikan Tugas Tepat Waktu" img="/tumb1.png" to="/tips/1" />
              <Card title="Tips dan Trik Tidak Terganggu Dalam Belajar dan Aktivitas" img="/tumb2.png" to="/tips/2" />
              <Card title="Tips dan Trik Meningkatkan Produktivitas" img="/tumb3.png" to="/tips/3" />
              <Card title="Tips dan Trik Meningkatkan Fokus dan Konsentrasi" img="/tumb4.png" to="/tips/4" />
              <Card title="Tips dan Trik Dalam Menentapkan Produktivitas" img="/tumb5.png" to="/tips/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TipsTrik3() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f2f2f2] flex items-center justify-center">
      <div className="md:p-2 p-2 max-w-7xl bg-[#f2f2f2] w-full">
        <Link to={`/beranda`} className="flex flex-row cursor-pointer md:mt-4 mt-2 px-4 h-9 items-center w-fit">
          <img src="/back.svg" alt="back" className="h-4 mr-4" />
          <div className="text-black text-2xl font-bold font-['Poppins']">Kembali</div>
        </Link>
        <div className="flex flex-col md:flex-row min-h-0 gap-[2%] mt-2">
          <div className="flex flex-col md:w-[67%] h-full w-[100%] py-4 md:px-8 px-4 md:mb-0 mb-12 gap-[10px]">
            <div className="relative w-full h-72 rounded-[25px] shadow">
              <img className="w-full h-full rounded-[25px]" src="/bgtips3.png" alt="Placeholder" />
              <div className="absolute inset-0 flex items-center px-8 justify-center">
                <span className="text-white md:text-[2rem] text-[1.5rem] md:p-0 p-2 text-center  font-bold">Tips dan Trik Meningkatkan Produktivitas</span>
              </div>
            </div>
            <div className="separator h-[2px] my-3 shadow-lg w-full rounded-[1px] bg-black transform "></div>

            <div className="flex flex-row justify-between relative h-full mt-6">
              <div className="flex flex-col md:w-[49%]  w-[100%] h-full  gap-3 justify-beetwen items-center ">
                <div className="w-full h-fit">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Membuat Rencana dan Jadwal
                    <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Membuat Rencana dan Jadwal Setelah mengatur waktu dan menetapkan prioritas, langkah berikutnya adalah membuat rencana dan jadwal. Tuliskan semua aktivitas yang akan Anda lakukan dari pagi hingga malam hari. Membuat
                    jadwal yang terperinci membantu Anda mengingat apa saja yang harus dikerjakan dan kapan harus dikerjakan. Jadwal ini bisa berupa daftar tugas harian yang dimulai dari saat Anda bangun tidur hingga menjelang tidur malam.
                    Menyusun jadwal secara kronologis membantu Anda mengelola waktu dengan lebih efektif dan mengurangi kemungkinan melewatkan tugas penting. Dengan jadwal yang teratur, Anda dapat lebih mudah mengatur waktu istirahat dan
                    memastikan bahwa Anda tidak bekerja berlebihan, yang bisa menyebabkan kelelahan.
                  </span>
                </div>
                <img className="w-full h-full rounded-[4px]" src="/image3.png" alt="Placeholder" />
              </div>
              <div className="flex flex-col md:w-[49%] w-[100%] h-full md:px-3 px-2 gap-3 justify-center items-center">
                <div className="w-full h-fit">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Mengatur Waktu dengan Baik
                    <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Untuk meningkatkan produktivitas, sangat penting bagi Anda untuk mulai mengatur waktu dengan baik. Mengelola waktu dengan efektif adalah dasar dari produktivitas yang tinggi. Mulailah dengan membuat skala prioritas untuk
                    semua tugas yang harus Anda selesaikan. Tentukan hal-hal yang harus Anda kerjakan terlebih dahulu dan kegiatan apa saja yang harus diselesaikan pada hari itu. Buat daftar tugas yang perlu dilakukan dan urutkan
                    berdasarkan prioritas. Tugas-tugas yang paling mendesak dan penting harus berada di puncak daftar Anda. Mengatur waktu dengan baik membantu Anda fokus pada tugas-tugas yang benar-benar penting, menghindari pekerjaan yang
                    kurang produktif, dan mengurangi stress akibat pekerjaan yang menumpuk. Dengan memiliki skala prioritas, Anda dapat mengalokasikan waktu dengan lebih bijaksana dan memastikan bahwa setiap tugas mendapat perhatian yang
                    layak.
                  </span>
                </div>
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Menemukan “Golden Moment” <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Salah satu cara untuk menjadi lebih produktif adalah dengan menemukan “golden moment” Anda. Golden moment adalah saat di mana Anda merasa memiliki kondisi terbaik untuk melakukan sesuatu. Ketika Anda berada pada kondisi
                    terbaik dan melakukan sebuah aktivitas, hasilnya akan menjadi lebih optimal. Golden moment setiap orang bisa berbeda-beda, sehingga penting bagi Anda untuk mengenali waktu tersebut pada diri sendiri. Beberapa orang
                    mungkin merasa paling produktif di pagi hari, sementara yang lain lebih efektif di siang atau malam hari. Identifikasi waktu di mana Anda merasa paling energik dan fokus, dan usahakan untuk menjadwalkan tugas-tugas
                    penting dan menantang pada waktu tersebut untuk memaksimalkan produktivitas. Anda dapat mulai dengan mencatat kapan Anda merasa paling bersemangat dan produktif selama beberapa hari atau minggu. Dari catatan tersebut,
                    Anda akan bisa melihat pola dan menentukan kapan golden moment Anda terjadi. Manfaatkan waktu tersebut untuk mengerjakan tugas-tugas yang membutuhkan konsentrasi tinggi dan energi yang optimal. Dengan mengenali dan
                    memanfaatkan golden moment, Anda dapat meningkatkan kualitas pekerjaan Anda dan menyelesaikan tugas dengan lebih efisien.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-[30%] w-[100%] max-h-screen md:px-3 px-2 gap-6 items-center overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-6">
              <Card title="Tips dan Trik Menyelesaikan Tugas Tepat Waktu" img="/tumb1.png" to="/tips/1" />
              <Card title="Tips dan Trik Tidak Terganggu Dalam Belajar dan Aktivitas" img="/tumb2.png" to="/tips/2" />
              <Card title="Tips dan Trik Meningkatkan Produktivitas" img="/tumb3.png" to="/tips/3" />
              <Card title="Tips dan Trik Meningkatkan Fokus dan Konsentrasi" img="/tumb4.png" to="/tips/4" />
              <Card title="Tips dan Trik Dalam Menentapkan Produktivitas" img="/tumb5.png" to="/tips/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TipsTrik4() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f2f2f2] flex items-center justify-center">
      <div className="md:p-2 p-2 max-w-7xl bg-[#f2f2f2] w-full">
        <Link to={`/beranda`} className="flex flex-row cursor-pointer md:mt-4 mt-2 px-4 h-9 items-center w-fit">
          <img src="/back.svg" alt="back" className="h-4 mr-4" />
          <div className="text-black text-2xl font-bold font-['Poppins']">Kembali</div>
        </Link>
        <div className="flex flex-col md:flex-row min-h-0 gap-[2%] mt-2">
          <div className="flex flex-col md:w-[67%] h-full w-[100%] py-4 md:px-8 px-4 md:mb-0 mb-12 gap-[10px]">
            <div className="relative w-full h-72 rounded-[25px] shadow">
              <img className="w-full h-full rounded-[25px]" src="/bgtips4.png" alt="Placeholder" />
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <span className="text-white md:text-[2rem] text-[1.5rem] md:p-0 p-2 text-center  font-bold">Tips dan Trik Meningkatkan Fokus dan Kosentrasi Belajar & Aktivitas</span>
              </div>
            </div>
            <div className="separator h-[2px] my-3 shadow-lg w-full rounded-[1px] bg-black transform "></div>
            <div className="w-full h-fit">
              <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                Berlatih Mindfulness <br />
              </span>
              <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                Mempraktikkan mindfulness adalah cara yang efektif untuk meningkatkan fokus dan produktivitas. Mindfulness adalah kondisi di mana Anda benar-benar hadir dan fokus pada saat ini, tanpa terganggu oleh pikiran yang
                melayang-layang atau kecemasan tentang masa depan. Saat bekerja atau belajar, cobalah untuk sepenuhnya memperhatikan apa yang Anda lakukan, rasakan, dan pikirkan. Misalnya, jika Anda sedang membaca, fokuslah pada kata-kata
                dan makna yang disampaikan tanpa memikirkan hal lain. Teknik pernapasan yang dalam dan perlahan juga dapat membantu Anda tetap tenang dan fokus. Dengan berlatih mindfulness secara teratur, Anda dapat mengurangi stres,
                meningkatkan konsentrasi, dan menjadi lebih efisien dalam menyelesaikan tugas.
              </span>
            </div>
            <div className="w-full h-fit">
              <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                Gunakan Musik yang Cocok <br />
              </span>
              <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                Mendengarkan musik yang tepat dapat meningkatkan fokus dan konsentrasi Anda saat bekerja atau belajar. Musik instrumental atau musik yang menenangkan, seperti musik klasik, ambient, atau suara alam, sering kali lebih efektif
                daripada musik dengan lirik yang bisa mengganggu pikiran Anda. Musik tanpa lirik membantu menciptakan latar belakang yang harmonis dan menenangkan, yang dapat meningkatkan kemampuan Anda untuk berkonsentrasi pada tugas yang
                sedang dihadapi. Bereksperimenlah dengan berbagai jenis musik untuk menemukan apa yang paling membantu Anda. Buat playlist khusus untuk bekerja atau belajar.{" "}
              </span>
            </div>
            <div className="flex flex-row justify-between relative h-full mt-6">
              <div className="flex flex-col md:w-[49%]  w-[100%] h-full  gap-3 justify-beetwen items-center ">
                <img className="w-full h-full rounded-[4px]" src="/image4.png" alt="Placeholder" />
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Hindari Multitasking <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Meskipun terdengar efisien, multitasking sebenarnya dapat mengurangi kualitas kerja dan membuat Anda lebih rentan terhadap gangguan. Fokus pada satu tugas pada satu waktu memungkinkan Anda untuk menyelesaikan tugas
                    tersebut dengan lebih cepat dan lebih baik. Ketika Anda beralih antara tugas-tugas, otak Anda membutuhkan waktu untuk menyesuaikan, yang dapat mengurangi produktivitas secara keseluruhan.
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:w-[49%] w-[100%] h-full md:px-3 px-2 gap-3 justify-center items-center">
                <div className="w-full h-fit">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Berikan Reward pada Diri Sendiri <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Memberikan hadiah kecil pada diri sendiri setelah menyelesaikan tugas yang sulit bisa menjadi motivasi yang kuat untuk meningkatkan fokus dan produktivitas. Hadiah ini tidak perlu mahal atau rumit; bisa berupa camilan
                    favorit, waktu istirahat tambahan, atau menonton episode dari acara TV yang Anda suka. Dengan memberikan reward, Anda menciptakan asosiasi positif antara menyelesaikan tugas dan mendapatkan sesuatu yang menyenangkan. Hal
                    ini dapat meningkatkan motivasi Anda untuk menyelesaikan tugas-tugas berikutnya dengan lebih cepat dan efisien. Pastikan reward yang Anda pilih sesuai dengan upaya yang Anda lakukan, sehingga memberikan perasaan
                    pencapaian yang nyata.
                    <br />
                  </span>
                </div>
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Jadwalkan Istirahat yang Teratur <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Menyusun jadwal istirahat yang teratur sangat penting untuk menjaga produktivitas dan kesehatan mental. Istirahat yang cukup membantu otak Anda untuk beristirahat, mengurangi stres, dan meningkatkan kemampuan untuk fokus
                    kembali pada tugas. Teknik Pomodoro adalah salah satu metode yang efektif, di mana Anda bekerja selama 25 menit dan kemudian beristirahat selama 5 menit. Setelah empat sesi, ambil istirahat yang lebih panjang, sekitar
                    15-30 menit. Selama istirahat, lakukan aktivitas ringan seperti berjalan-jalan, meregangkan tubuh, atau minum air. Dengan memberikan waktu istirahat yang cukup, Anda dapat menjaga energi dan konsentrasi sepanjang hari.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-[30%] w-[100%] max-h-screen md:px-3 px-2 gap-6 items-center overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-6">
              <Card title="Tips dan Trik Menyelesaikan Tugas Tepat Waktu" img="/tumb1.png" to="/tips/1" />
              <Card title="Tips dan Trik Tidak Terganggu Dalam Belajar dan Aktivitas" img="/tumb2.png" to="/tips/2" />
              <Card title="Tips dan Trik Meningkatkan Produktivitas" img="/tumb3.png" to="/tips/3" />
              <Card title="Tips dan Trik Meningkatkan Fokus dan Konsentrasi" img="/tumb4.png" to="/tips/4" />
              <Card title="Tips dan Trik Dalam Menentapkan Produktivitas" img="/tumb5.png" to="/tips/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TipsTrik5() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f2f2f2] flex items-center justify-center">
      <div className="md:p-2 p-2 max-w-7xl bg-[#f2f2f2] w-full">
        <Link to={`/beranda`} className="flex flex-row cursor-pointer md:mt-4 mt-2 px-4 h-9 items-center w-fit">
          <img src="/back.svg" alt="back" className="h-4 mr-4" />
          <div className="text-black text-2xl font-bold font-['Poppins']">Kembali</div>
        </Link>
        <div className="flex flex-col md:flex-row min-h-0 gap-[2%] mt-2">
          <div className="flex flex-col md:w-[67%] h-full w-[100%] py-4 md:px-8 px-4 md:mb-0 mb-12 gap-[10px]">
            <div className="relative w-full h-72 rounded-[25px] ">
              <img className="w-full h-full rounded-[25px]" src="/bgtips5.png" alt="Placeholder" />
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <span className="text-white md:text-[2rem] text-[1.5rem] md:p-0  text-center  font-bold">Tips dan Trik Menetapkan Prioritas Dalam Menyelesaikan Tugas</span>
              </div>
            </div>
            <div className="separator h-[2px] my-3 shadow-lg w-full rounded-[1px] bg-black transform "></div>

            <div className="flex flex-row justify-between relative h-full mt-6">
              <div className="flex flex-col md:w-[49%]  w-[100%] h-full  gap-3 justify-beetwen items-center ">
                <img className="w-full h-full rounded-[4px]" src="/image5.png" alt="Placeholder" />
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Mengelola Waktu dengan Lebih Baik <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Menetapkan prioritas membantu Anda mengelola waktu dengan lebih baik. Dengan daftar tugas yang diurutkan berdasarkan kepentingan dan urgensi, Anda dapat mengalokasikan waktu Anda dengan cara yang paling efektif. Ini
                    memungkinkan Anda untuk memanfaatkan setiap jam dalam sehari dengan optimal. Anda bisa menghindari membuang waktu pada kegiatan yang kurang penting dan fokus pada apa yang benar-benar membutuhkan perhatian Anda. Dengan
                    demikian, Anda bisa mencapai keseimbangan yang lebih baik antara pekerjaan dan waktu luang, menjaga produktivitas tanpa mengorbankan kesehatan dan kesejahteraan.
                    <br />
                  </span>
                </div>
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Menghindari Penundaan <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Menetapkan prioritas adalah kunci untuk menghindari kebiasaan menunda-nunda pekerjaan. Ketika Anda memiliki daftar tugas yang jelas dan tahu mana yang harus dilakukan terlebih dahulu, Anda lebih cenderung untuk segera
                    memulai dan menyelesaikan pekerjaan tersebut. Menunda pekerjaan sering kali terjadi karena kebingungan atau ketidakpastian tentang apa yang harus dilakukan selanjutnya. Dengan prioritas yang jelas, Anda bisa langsung
                    fokus pada tugas yang paling mendesak, sehingga menghindari penundaan yang bisa menghambat kemajuan Anda. Ini membantu Anda menjaga momentum dan terus bergerak maju dalam pekerjaan Anda.
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:w-[49%] w-[100%] h-full md:px-3 px-2 gap-3 justify-center items-center">
                <div className="w-full h-fit">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Efisiensi Waktu <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Menetapkan prioritas adalah langkah penting untuk meningkatkan efisiensi waktu Anda. Dengan memfokuskan energi pada tugas yang paling penting dan mendesak terlebih dahulu, Anda dapat menghemat waktu dan tenaga. Alih-alih
                    terjebak dalam tugas-tugas yang kurang signifikan, Anda bisa langsung menyelesaikan pekerjaan yang memiliki dampak besar pada proyek atau tujuan Anda. Ini berarti Anda tidak hanya bekerja lebih cepat tetapi juga lebih
                    cerdas. Dengan demikian, Anda dapat menyelesaikan lebih banyak tugas dalam waktu yang lebih singkat, mengurangi waktu yang terbuang untuk aktivitas yang kurang produktif.
                  </span>
                </div>
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Menghindari Kecemasan <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Menetapkan prioritas dapat membantu Anda mengurangi rasa cemas dan kekhawatiran tentang tugas-tugas yang belum selesai. Ketika Anda mengetahui dengan jelas tugas mana yang harus diselesaikan terlebih dahulu, Anda bisa
                    fokus pada satu tugas pada satu waktu tanpa merasa kewalahan oleh daftar tugas yang panjang. Mengatasi tugas-tugas penting terlebih dahulu memberi Anda perasaan pencapaian dan mengurangi tekanan mental. Ini juga membantu
                    mencegah situasi di mana pekerjaan menumpuk dan menyebabkan stres yang berlebihan. Dengan perencanaan yang baik dan prioritas yang tepat.
                  </span>
                </div>
                <div className="w-full h-fit mt-6">
                  <span className="text-black text-xl font-bold font-['Poppins'] leading-[30px]">
                    Meningkatkan Produktivitas <br />
                  </span>
                  <span className="text-black text-[17px] font-normal font-['Poppins'] leading-relaxed tracking-wide">
                    Dengan fokus pada tugas yang paling penting, Anda dapat meningkatkan produktivitas dan efektivitas dalam menyelesaikan pekerjaan. Prioritas yang jelas memungkinkan Anda untuk mengarahkan upaya dan sumber daya ke
                    aktivitas yang memberikan hasil terbaik. Ini memastikan bahwa waktu dan energi Anda digunakan dengan cara yang paling efisien, yang pada gilirannya meningkatkan output kerja Anda. Dengan strategi ini, Anda tidak hanya
                    menyelesaikan lebih banyak tugas
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-[30%] w-[100%] max-h-screen md:px-3 px-2 gap-6 items-center overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-6">
              <Card title="Tips dan Trik Menyelesaikan Tugas Tepat Waktu" img="/tumb1.png" to="/tips/1" />
              <Card title="Tips dan Trik Tidak Terganggu Dalam Belajar dan Aktivitas" img="/tumb2.png" to="/tips/2" />
              <Card title="Tips dan Trik Meningkatkan Produktivitas" img="/tumb3.png" to="/tips/3" />
              <Card title="Tips dan Trik Meningkatkan Fokus dan Konsentrasi" img="/tumb4.png" to="/tips/4" />
              <Card title="Tips dan Trik Dalam Menentapkan Produktivitas" img="/tumb5.png" to="/tips/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TipsTrik1, TipsTrik2, TipsTrik3, TipsTrik4, TipsTrik5 };
