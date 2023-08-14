/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query'
import { PageContainer,PersonContainer,Table } from './AppStyle.tsx';
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
  const [edition,setEdition] = useState(false)
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
  const onModalOpenRequest = (modalData:PersonData,editProp:boolean): void => {
    setAllInfo(modalData);
    setEdition(editProp);
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
      <Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest} data={allInfo} edit={edition}/>
      {searchInput.length > 1 ? <div>{filteredResults.map((contato:PersonData) =>
      <PersonContainer>
      <div>{contato.name}</div>
      <div>{contato.phone}</div>
      <div>{contato.email}</div>
      <button onClick={() => onModalOpenRequest(contato,false)}>
        Open modal
      </button>
      <button onClick={() => onModalOpenRequest(contato,true)}>
        Edit
      </button>
      <br />
      </PersonContainer>
      )}</div>: <Table> {data.map((contato:PersonData) =>
      <PersonContainer>
      <div>{contato.name}</div>
      <div>{contato.phone}</div>
      <div>{contato.email}</div>
      <button onClick={() => onModalOpenRequest(contato,true)}>
        Open modal
      </button>
      <button onClick={() => onModalOpenRequest(contato,false)}>
        Edit
      </button>
      <br />
      </PersonContainer>
      )}</Table>}
    </PageContainer>
  )
}