import './App.css';
import { useState, useEffect } from 'react';
import { AppHeader } from './components/AppHeader';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { EntryCard } from './components/EntryCard';
const API_KEY = process.env.REACT_APP_API_KEY;
const mockData = [
  {
    ticket_id: '#34076',
    content: 'Design something...',
    assigned_to: 'Hunter Garza',
    category: 'Wireframe',
    status: 'open',
    supervisor: 'J.J. Jameson',
  },
  {
    ticket_id: '#34976',
    content: 'Design something...',
    assigned_to: 'Peter Parker',
    category: 'Concept',
    status: 'open',
    supervisor: 'Dubravka Silvia',
  },
  {
    ticket_id: '#33076',
    content: 'Design something...',
    assigned_to: 'Bruce Banner',
    category: 'Debugging',
    status: 'pending',
    supervisor: 'Meino Agnija',
  },
  {
    ticket_id: '#36076',
    content: 'Design something...',
    assigned_to: 'Frank Castle',
    category: 'Upgrade',
    status: 'closed',
    supervisor: 'Æthelric Ester',
  },
  {
    ticket_id: '#38076',
    content: 'Design something...',
    assigned_to: 'Mister T.',
    category: 'Wireframe',
    status: 'pending',
    supervisor: 'Mari Stéphanie',
  },
];

function App() {
  const [data, setData] = useState(mockData);
  /*<useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append('apikey', 'F1E1shR5G7nrmnOisTn92jyIFAa2paUC');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://odin.planblick.com/get_queue_entries/f7fe28bc-f0e8-479a-8e0d-7338725a9a6c',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const queue = Object.entries(result);
        console.log(queue);
        const queueArray = queue[0][1];
        const dataArray = Object.entries(queueArray);
        console.log(dataArray);

        setData(dataArray);
      })
      .catch((error) => console.log('error', error));
  }, []);*/

  return (
    <div className="App">
      <AppHeader />
      <div className="app-wrapper">
        <div className="body-wrapper">
          <Header />
          <NavBar />
          <h4>Tuesday, 21 May 2019</h4>
          <EntryCard title={'#34556'} description={'Create test'} />
          <EntryCard title={'#23332'} description={'React prop'} />
          <h4>Tuesday, 20 Apr,2019</h4>
          {data.length > 0 &&
            data.map((item) => {
              return (
                <EntryCard
                  key={item.ticket_id}
                  title={item.ticket_id}
                  description={item.content}
                  assigned_to={item.assigned_to}
                  category={item.category}
                  status={item.status}
                  supervisor={item.supervisor}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
