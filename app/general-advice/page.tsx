import Navbar from '../components/Navbar/Navbar';
import GeneralAdvice from '../components/GeneralAdvice/GeneralAdvice';

export default function GeneralAdvicePage() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <GeneralAdvice />
      </div>
    </div>
  );
}
