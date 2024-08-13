import React, { useState, useEffect } from 'react';

function DataTable() {
	const [data, setData] = useState([]); // State to store the data from the API

	useEffect(() => {
		// Fetch data from the API we need useEffect hook
		// Fetch data from the API
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:5000/api/employees');
				const result = await response.json();
                console.log(result);
				setData(result);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className='container mt-4 '>
			<h2>Data Table</h2>
			<table className='table table-striped'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Age</th>
						<th>Experience</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item._id}>
							<td>{item._id}</td>
							<td>{item.name}</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
							<td>{item.age}</td>
							<td>{item.experience}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default DataTable;
