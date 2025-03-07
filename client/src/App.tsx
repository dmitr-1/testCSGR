import { 
  MainContainer, 
  Header, 
  HeaderTitle, 
  ContentContainer, 
  CardTitle, 
  CardForm,
  CardList
} from './App.styles';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <MainContainer>
      <Header>
        <HeaderTitle>Планировщик задач</HeaderTitle>
      </Header>
      <ContentContainer>
        <CardForm>
          <CardTitle>Добавить задачу</CardTitle>
          <TaskForm />
        </CardForm>
        <CardList>
          <CardTitle>Список задач</CardTitle>
          <TaskList />
        </CardList>
      </ContentContainer>
    </MainContainer>
  );
}

export default App;