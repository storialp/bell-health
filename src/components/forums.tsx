import React from 'react';

// This is a placeholder type for your community card
type CommunityCardProps = {
  title: string;
  location: string;
  membersCount: number;
  backgroundImage: string; // This will be the URL or path to the image
};

const CommunityCard: React.FC<CommunityCardProps> = ({ title, location, membersCount, backgroundImage }) => {
  return (
    <div className="relative text-black font-semibold rounded-lg overflow-hidden shadow-lg">
      <img src={backgroundImage} alt={`${title}`} className="w-full h-40 object-cover" />
      <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-70 w-full">
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm">{location}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3">
          Join
        </button>
        <span className="absolute right-4 bottom-4">
          👥 {membersCount}
        </span>
      </div>
    </div>
  );
};

const ForumsPage: React.FC = () => {
  // Mock data for the communities
  const communities: CommunityCardProps[] = [
    { title: 'Running Club', location: 'Zürich, Switzerland', membersCount: 120, backgroundImage: 'path-to-running-club-image.jpg' },
    { title: 'Food Group', location: 'Global', membersCount: 836, backgroundImage: 'path-to-food-group-image.jpg' },
    // Add more communities as needed
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-extrabold text-center">Forums</h1>
      <div className="my-4 p-4">
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search for communities" />
          <div className="p-4">
            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
              🔍
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended</h2>
      <div>
        {communities.map((community, index) => (
          <CommunityCard key={index} {...community} />
        ))}
      </div>
    </div>
  );
};

export default ForumsPage;
