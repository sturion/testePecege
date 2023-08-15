/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation
} from 'react-query'
import { ButtonCell, InformationCell, InformationsContainer, PageContainer,TableButton,Table, ToolsContainer,CreateButton,SearchInput } from './AppStyle.tsx';
import Modal from './components/modal';
import { PersonData } from './interfaces/personData.tsx';
import { getUsers,createUser } from './services/api/endpoints/user.tsx';
import {Icon,EditIcon}  from "./assets/svg/boxArrow.tsx"

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

  const mutationCreate = useMutation((newTodo:PersonData) => {
    return createUser(newTodo)
  })

  function create(data:PersonData){
    mutationCreate.mutate(data)
  }
  

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

  const dataRender = searchInput.length > 1 ? filteredResults : data

  if (isLoading) return 'Loading...'

  return (
    <PageContainer>
      <Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest} data={allInfo} edit={edition}/>
      <Table> 
      {dataRender.map((contato:PersonData) =>
      <InformationsContainer>
      <InformationCell>{contato.name}</InformationCell>
      <InformationCell>{contato.phone}</InformationCell>
      <InformationCell>{contato.email}</InformationCell>
      <ButtonCell><TableButton onClick={() => onModalOpenRequest(contato,true)}><Icon/></TableButton></ButtonCell>
      <ButtonCell><TableButton onClick={() => onModalOpenRequest(contato,false)}>
        <EditIcon/>
        </TableButton></ButtonCell>
      </InformationsContainer>
      )}</Table>
      <ToolsContainer>
      <SearchInput
                placeholder='Insira o nome'
                onChange={(e) => searchItems(e.target.value)}
            />
      <CreateButton onClick={() => onModalOpenRequest(data,false)}>Create user</CreateButton>
      </ToolsContainer>
    </PageContainer>
  )
}