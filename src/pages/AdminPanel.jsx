import React, { useState } from 'react';
import UploadItem from '../components/forms/UploadItem';
import UploadUser from '../components/forms/UploadUser';
import EditUser from '../components/forms/EditUser';

const AdminPanel = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="text-black bg-[#f0ebe3] p-5 mt-10 w-full md:flex gap-5 lg:justify-around">
      <div className="filterbox rounded-md border-2 mb-2 border-[#053b50] p-4 gap-3 flex flex-col items-center justify-center md:w-[25vw] md:h-80 md:py-10 md:sticky top-10 md:gap-5 bg-[#0e4355b2]">
        <h1 className="text-white text-2xl font-semibold">Admin Panel</h1>
        <div className="flex md:flex-col gap-5 text-center">
          <p
            className="text-white font-semibold cursor-pointer hover:scale-110"
            onClick={() => handleTabClick('UploadItem')}
          >
            Upload Item
          </p>
          <p
            className="text-white font-semibold cursor-pointer hover:scale-110"
            onClick={() => handleTabClick('UploadUser')}
          >
            Upload User
          </p>
          <p
            className="text-white font-semibold cursor-pointer hover:scale-110"
            onClick={() => handleTabClick('EditUser')}
          >
            Edit User
          </p>
        </div>
      </div>

      <div className="flex flex-col md:w-[75vw] lg:w-[50vw]">
        {selectedTab === 'UploadItem' && <UploadItem />}
        {selectedTab === 'UploadUser' && <UploadUser />}
        {selectedTab === 'EditUser' && <EditUser />}
      </div>
    </div>
  );
};

export default AdminPanel;