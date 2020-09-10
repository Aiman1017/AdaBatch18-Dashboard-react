import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function ListTable(props){
    return <Table size='small'>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Orders</TableCell>
          <TableCell>Sale Amounts</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
          {
          props.restaurants.map((val) => {
            return <TableRow>
            <TableCell>
              {val.name}
            </TableCell>
            <TableCell>
            {val.orders}
            </TableCell>
            <TableCell>
            {val.revenues}
            </TableCell>

            </TableRow>
          })}
      </TableBody>
    </Table>
}

export default ListTable;
