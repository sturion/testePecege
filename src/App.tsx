/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query'
import { PageContainer } from './AppStyle.tsx';
import Modal from './components/modal';
import { PersonData } from './interfaces/personData.tsx';
import { getUsers } from './services/api/endpoints/user.tsx';
//import { apiInstance } from './services/api/axios.ts';


const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}



function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allInfo, setAllInfo] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const { isLoading, data } = useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      getUsers(),
  })

  const searchItems = (searchValue:string) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = data.filter((item:PersonData) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(data)
    }
}
  const onModalCloseRequest = (): void => {
    setIsModalOpen(false);
  };
  const onModalOpenRequest = (modalData:PersonData): void => {
    setAllInfo(modalData)
    setIsModalOpen(true);
  };

  if (isLoading) return 'Loading...'

  return (
    <PageContainer>
      <form>
      <input
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
      </form>
      <Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest} data={allInfo}/>
      {searchInput.length > 1 ? filteredResults.map((contato:PersonData) =>
      <div>
      <div>{contato.name}</div>
      <div>{contato.phone}</div>
      <div>{contato.email}</div>
      <button onClick={() => onModalOpenRequest(contato)}>
        Open modal
      </button>
      <br />
      </div>
      ):data.map((contato:PersonData) =>
      <div>
      <div>{contato.name}</div>
      <div>{contato.phone}</div>
      <div>{contato.email}</div>
      <button onClick={() => onModalOpenRequest(contato)}>
        Open modal
      </button>
      <br />
      </div>
      )}
    </PageContainer>
  )
}