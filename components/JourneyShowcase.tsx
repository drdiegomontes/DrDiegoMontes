const JourneyShowcase = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="flex items-start gap-24">
          <div className="w-1/3 pt-12 pr-8">
            <h2 className="text-3xl font-bold mb-6">Embark on a Transformative Journey</h2>
            <p className="text-gray-700 mb-8">
              Discover a curated collection of experiences designed to inspire, challenge, and empower you. From
              breathtaking landscapes to immersive cultural encounters, each journey is crafted to leave a lasting
              impact.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Explore Journeys
            </button>
          </div>
          <div className="w-2/3 grid grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://source.unsplash.com/random/600x400?mountain"
                alt="Mountain Journey"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Mountain Adventure</h3>
                <p className="text-gray-600">Conquer peaks and discover breathtaking vistas.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://source.unsplash.com/random/600x400?beach"
                alt="Beach Getaway"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Beach Getaway</h3>
                <p className="text-gray-600">Relax and unwind on pristine shores.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://source.unsplash.com/random/600x400?city"
                alt="City Exploration"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">City Exploration</h3>
                <p className="text-gray-600">Immerse yourself in vibrant urban cultures.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://source.unsplash.com/random/600x400?forest"
                alt="Forest Retreat"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Forest Retreat</h3>
                <p className="text-gray-600">Reconnect with nature in serene woodlands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JourneyShowcase

