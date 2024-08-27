import { Search, Calendar } from "@/components";
import CardPrioritas from "../components/CardPrioritas";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllNotes, getPriorityNotes } from "../../../services/notesService";
import { getAllTips } from "../../../services/tipsService";
import { getProfile } from "../../../services/userService";

function Beranda() {
  const [profile, setProfile] = useState([]);

  const [notes, setNotes] = useState([]);
  const [priorityNotes, setPriorityNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getProfile();
        setProfile(fetchedData.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedNotes = await getAllNotes("");
        setNotes(fetchedNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPriorityData = async () => {
      try {
        const fetchedPriorityNotes = await getPriorityNotes();
        setPriorityNotes(fetchedPriorityNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchPriorityData();
  }, []);

  useEffect(() => {
    const fetchNotesWithSearch = async () => {
      try {
        const fetchedNotes = await getAllNotes(searchTerm);
        setNotes(fetchedNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotesWithSearch();
  }, [searchTerm]);

  const Card = ({ title, img, to }) => {
    return (
      <Link to={to} className="w-full bg-white rounded-[10px] shadow py-1 flex-col justify-start items-start">
        <div className="self-stretch p-2 flex-col justify-start items-start gap-2.5 flex">
          <img className="self-stretch grow shrink basis-0 rounded-[10px]" src={img} />
        </div>
        <div className="self-stretch  px-2 flex-col justify-center items-start text-center gap-2.5 flex">
          <div className="self-stretch text-black text-md font-bold font-['Poppins'] tracking-tight">{title}</div>
        </div>
      </Link>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const tips = [
    { title: "Tips dan trik agar semua tugas dapat selesai tepat waktu", img: "/tumb1.png", to: "/tips/1" },
    { title: "Tips dan Trik Agar Tidak Terganggu Saat Belajar & Beraktivitas", img: "/tumb2.png", to: "/tips/2" },
    { title: "Tips dan Trik Meningkatkan Produktivitas", img: "/tumb3.png", to: "/tips/3" },
    { title: "Tips dan Trik Meningkatkan Fokus dan Konsentrasi Belajar & Aktivitas", img: "/tumb4.png", to: "/tips/4" },
    { title: "Tips dan Trik Menetapkan Prioritas Dalam Menyelesaikan Tugas", img: "/tumb5.png", to: "/tips/5" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [tips.length]);

  Card.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    to: PropTypes.string,
  };

  const Item = ({ title, date, status }) => {
    let statusColor;

    switch (status) {
      case "Sedang Berjalan":
        statusColor = "bg-yellow-200 text-yellow-800";
        break;
      case "Belum Memulai":
        statusColor = "bg-gray-200 text-gray-800";
        break;
      case "Selesai":
        statusColor = "bg-green-200 text-green-800";
        break;
      default:
        statusColor = "bg-gray-200 text-gray-800";
        break;
    }

    return (
      <div className="grid grid-cols-3 gap-4 mt-4 items-center">
        <div className="font-medium text-start">{title}</div>
        <div className="text-center">
          <span className="px-4 py-2">{date}</span>
        </div>
        <div className={`text-center h-fit px-4 py-2 w-full rounded-[10px] ${statusColor}`}>
          <span className="">{status}</span>
        </div>
      </div>
    );
  };

  Item.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    status: PropTypes.string,
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("id", options); // Gunakan lokalisasi 'id' untuk bahasa Indonesia
  }

  return (
    <div className="md:p-2 p-2 max-w-5xl w-full ">
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:gap-0 gap-4">
        <Search onSearchChange={handleSearchChange} />
        <Link to="/profile" className="flex md:flex-row flex-row-reverse items-center gap-4">
          <div className="text-black text-base font-medium font-['Poppins']">{profile.name}</div>
          <img className="w-10 h-10 rounded-full" src={`http://localhost:3000${profile.image}`} />
        </Link>
      </div>

      <div className="flex flex-col-reverse md:flex-row min-h-0 gap-[5%] mt-12 ">
        <div className="flex flex-col  md:w-[67%] w-[100%] md:py-2 py-6 px-8 md:mt-0 mt-12 gap-[10px] rounded-[25px] shadow bg-white">
          <div className="text-sky-400 text-[25px] font-bold font-['Poppins'] leading-normal">Prioritas</div>
          <div className="flex flex-col md:flex-row gap-[10px] overflow-y-auto md:overflow-x-auto whitespace-nowrap no-scrollbar">
            {priorityNotes.data &&
              priorityNotes.data.length > 0 &&
              priorityNotes.data.map((priorityNote, index) => <CardPrioritas key={priorityNote.id || index} date={formatDate(priorityNote.date)} title={priorityNote.title} prioritas={priorityNote.priority} />)}
          </div>
        </div>
        <Link to="/kalender" className="flex flex-col md:w-[30%] w-[100%] h-fit md:p-3 p-2 gap-6 justify-center items-center rounded-[25px] shadow bg-white">
          <Calendar />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row min-h-0 gap-[5%] mt-12 ">
        <div className="flex flex-col md:w-[67%] h-fit w-[100%] py-4 px-8 md:mb-0 mb-12 gap-[10px] rounded-[25px] shadow bg-white">
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-xl font-semibold mb-4 text-sky-400">Seluruh Catatan</div>
            <div className="text-center">
              <span className="px-4 py-2 text-xl font-semibold mb-4">Tanggal</span>
            </div>
            <div className="text-center">
              <span className="px-4 py-2 text-xl font-semibold mb-4">Status</span>
            </div>
          </div>
          {notes.data && notes.data.length > 0 && notes.data.map((note, index) => <Item key={note.id || index} date={formatDate(note.date)} title={note.title} status={note.status} />)}
        </div>
        <div className="flex flex-col md:w-[30%] w-[100%] h-fit justify-center items-center rounded-[25px]  ">
          <div className="text-xl font-semibold mb-2 text-sky-400">Tips dan Trik</div>
          <div className="relative w-full overflow-hidden shadow rounded-[25px] bg-white p-2">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {tips.map((tip, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card title={tip.title} img={tip.img} to={tip.to} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
