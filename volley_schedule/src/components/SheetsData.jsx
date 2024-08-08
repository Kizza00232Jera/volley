import React, { useEffect, useState } from 'react';

export default function SheetsData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch("https://sheets.googleapis.com/v4/spreadsheets/1lVeFC9IF_KqjjohOYC-RHljFtx4HY2N_1D8M1pUb5VY/values/GroupResults?alt=json&key=AIzaSyAi_EfMOlMu-xYfRPRpvczYoVKNBRDLiQA")
            .then((response) => response.json())
            .then((data) => {
                const rows = data.values;
                setData(rows);
            })
            .catch((error) => console.error('Error fetching data:', error));
    };


    return (
        <div>
            <h2>Sheets Data</h2>
            <table border="1">
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row[0]}</td>
                            <td>{row[1]}</td>
                            <td>{row[2]}</td>
                            <td>{row[3]}</td>
                            <td>{row[4]}</td>
                            <td>{row[5]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
