import './App.css';
import TopNav from './components/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from './components/datatable';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<TopNav />
				<DataTable />
			</header>
		</div>
	);
}

export default App;
