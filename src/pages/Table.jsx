import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'
import './Table.css'
import Header from '../components/Header'
import '../components/Header.css'
const Table = () => {
  const handlePrint = () => {
    window.print()
  }
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])
  const tableInstance = useTable({
    columns,
    data,
  })
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance
  return (
    <div>
      <Header />
      <div className="All-table">
        <h1 style={{ color: 'black' }}>Here is your Diet Plan:</h1>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} class="tbl-content">
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div>
          <button onClick={handlePrint} className="another-button">
            Print your plan
          </button>
        </div>
      </div>
    </div>
  )
}

export default Table
