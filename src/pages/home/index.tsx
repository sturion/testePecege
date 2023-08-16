import { useState } from 'react';
import {
  useQuery,
} from 'react-query'
import { ButtonCell, InformationCell, InformationsContainer, PageContainer,TableButton,Table, ToolsContainer,CreateButton,SearchInput, OrderUsers,Card, CardContainer, CardInfoCont, CardInformation, EditDiv } from './style.tsx';
import Modal from '../../components/modal';
import { PersonData } from '../../interfaces/personData.tsx';
import { getUsers } from '../../services/api/endpoints/user.tsx';
import {Icon,EditIcon}  from "../../assets/svg/boxArrow.tsx"
import { Checkbox } from '../../components/checkbox';
import LoadingSpinner from '../../components/loading';
const Home: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [allInfo, setAllInfo] = useState({});
    const [searchInput, setSearchInput] = useState('');
    const [sort, setSort] = useState(false);
    const [edition,setEdition] = useState(true)
    const [creation,setCreation] = useState(false)
    const [filteredResults, setFilteredResults] = useState([]);
    const isMobile = () => window.innerWidth <= 768;
    
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
      setEdition(false);
      setCreation(false);
    };
    const onModalOpenRequest = (modalData:PersonData,editProp:boolean,createProp:boolean): void => {
      setAllInfo(modalData);
      setCreation(createProp);
      setEdition(editProp);
      setIsModalOpen(true);
    };
  
    const dataHelp = data;
    const rawData = sort ? data.sort((a:PersonData, b:PersonData) => (a.name > b.name) ? 1 : -1) : dataHelp;
    const dataRender = searchInput.length > 1 ? filteredResults : rawData;
  
    if (isLoading) return(<LoadingSpinner />) 
  
    return (
        
      <PageContainer>
        <Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest} data={allInfo} edit={edition} create={creation}/>
        {isMobile() ? 
        <CardContainer>
          {dataRender.map((contato:PersonData)=>
          <Card>
            <CardInfoCont onClick={() => onModalOpenRequest(contato,true,false)}>
          <CardInformation>{contato.name}</CardInformation>
          <CardInformation>{contato.phone}</CardInformation>
          <CardInformation>{contato.email}</CardInformation>
          </CardInfoCont>
          <EditDiv onClick={() => onModalOpenRequest(contato,false,false)}><EditIcon/></EditDiv>
          </Card>)}
        </CardContainer> : <Table> 
        {dataRender.map((contato:PersonData) =>
        <InformationsContainer>
        <InformationCell>{contato.name}</InformationCell>
        <InformationCell>{contato.phone}</InformationCell>
        <InformationCell>{contato.email}</InformationCell>
        <ButtonCell><TableButton onClick={() => onModalOpenRequest(contato,true,false)}><Icon/></TableButton></ButtonCell>
        <ButtonCell><TableButton onClick={() => onModalOpenRequest(contato,false,false)}><EditIcon/></TableButton></ButtonCell>
        </InformationsContainer>
        )}</Table>}
        
        <ToolsContainer>
        <SearchInput
                  placeholder='Insira o nome'
                  onChange={(e) => searchItems(e.target.value)}
              />
        <CreateButton onClick={() => onModalOpenRequest(data,false,true)}>Adicionar</CreateButton>
        <OrderUsers>
        <Checkbox
                  onChange={() => setSort(true)}
                  checked={sort}
                /><label>Ordenar Usuarios</label>
              </OrderUsers>
        </ToolsContainer>
      </PageContainer>
    )
  }
  export default Home