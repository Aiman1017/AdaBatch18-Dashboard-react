import React from 'react';
import {Link} from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function ListTable(props){
    return <Table size='small' className="tableContent">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Orders</TableCell>
          <TableCell>Sale Amounts</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
          {
          props.restaurants.map(val => {
            return <TableRow>
            <TableCell>{val.name} <Link to='/edit' className='editButton'>Edit</Link> </TableCell>
            <TableCell> {val.address} <Link to='/edit' className='editButton'>Edit</Link> </TableCell>
            <TableCell>{val.email} <Link to='/edit' className='editButton'>Edit</Link> </TableCell>

            </TableRow>
          })}
      </TableBody>
    </Table>
}

export default ListTable;
