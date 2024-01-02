import React, { Component } from 'react';
import { getDatabase, ref, get } from 'firebase/database';

class Idcard extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with id and cardData
    this.state = {
      id: null,
      cardData: null,
    };
  }

  componentDidMount() {
    // Fetch data when the component mounts
    this.fetchData();
  }

  fetchData = async () => {
    try {
      // Retrieve id from props
      const idd = this.props.id;
      console.log(this.props.id);
      // Access Firebase database
      const database = getDatabase();
      // Create a reference to the card data using the id
      const cardRef = ref(database, `card/${idd}`);
      // Fetch data from Firebase
      const snapshot = await get(cardRef);
      console.log(this.snapshot);


      if (snapshot.exists()) {
        // Update state with cardData if it exists
        this.setState({ cardData: snapshot.val() });
      } else {
        console.log('Card data not found');
      }
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };

  render() {
    // Destructure cardData from state
   
    const { cardData } = this.state;

    // If cardData is not available, show Loading...
    if (!cardData) {
      return <div>Loading...</div>;
    }

    // Display the card using cardData
    return (
      <div>
        <div className="bg-gray-200 flex justify-center items-center h-screen">
          <div className="bg-green-600 bg-opacity-50 w-3/12 h-4/6 p-1 rounded-lg">
            {/* Display card details using cardData */}
            <h2 className="font-bold text-center">{cardData.collage_name}</h2>
            <p className="text-center text-sm ">{cardData.collage_address}</p>
            <div className="bg-purple-400 font-bold text-center rounded-lg">Student Identity card</div>
            <div>
              <div className="w-28 m-auto mt-5 ">
                <img
                  className="rounded-full border-4 border-gray-600 border-opacity-50"
                  src={cardData.image}
                  alt=""
                />
              </div>
              <div className="text-center w-1/2 bg-purple-500  bg-opacity-40 m-auto my-1 rounded-lg font-bold">
                {' '}
                <h2>{cardData.person_name}</h2>{' '}
              </div>
            </div>

            <div className="px-3">
              <div>
                Level: <span className="mx-2 ">{cardData.university_name}</span>
              </div>
              <div>
                Faculty: <span className="mx-2">{cardData.faculty}</span>
              </div>
              <div>
                Guardian: <span className="mx-2">{cardData.guardient_name}</span>
              </div>
              <div>
                Contact: <span className="mx-2">{cardData.phone}</span>
              </div>
              <div>
                Address: <span className="mx-2">{cardData.person_address}</span>
              </div>
              <div className="flex justify-end text-sm font-semibold mt-4">Signature</div>
            </div>
            <div className="flex text-sm justify-between bg-red-100 mt-2 rounded-lg px-1 font-semibold">
              <div>
                Issued on:<span>{cardData.issue_date}</span>{' '}
              </div>
              <div>
                Expired on:<span>{cardData.expiry_date}</span>{' '}
              </div>
            </div>
            <button className="bg-blue-600 font-semibold rounded mt-4 px-2 text-white">
              Download card
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Idcard;
