// import { Table, TableBody, TableContainer } from '@mui/material';
// import { Paper } from '@mui/material';
// import { StyledTableRow, StyledTableCell } from '';
// import React from 'react'

// const CustomizedTables = ({ rows }) => {
//     return (
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <tr>
//                   <th
//                     scope="col"
//                     className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercasetracking-wider"
//                   >
//                     #
//                    </th>
//                  <th
//                      scope="col"
//                      className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
//                  >
//                      Property Image
//                    </th>
//                   <th
//                     scope="col"
//                     className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
//                   >
//                      Property Title
//                   </th>
//                  <th
//                     scope="col"
//                     className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
//                    >
//                      Location
//                    </th>
//                   <th
//                      scope="col"
//                      className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
//                    >
//                      Agent
//                    </th>
//                    <th
//                     scope="col"
//                     className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
//                    >
//                     Agent Image
//                   </th>
//                   <th
//                      scope="col"
//                     className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
//                    >
//                     Status
//                    </th>
//                   <th
//                     scope="col"
//                      className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
//                   >
//                     Price
//                   </th>
//                    <th
//                      scope="col"
//                      className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
//                    >
//                      Offer
//                   </th>
//                    <th
//                    scope="col"
//                     className="px-5 py-3 bg-white text-right text-xs font-semibold text-gray-600 uppercase tracking-wider"
//                   >
//                     Actions
//                    </th>
//                 </tr>
    
//             <TableBody>
//               {rows.map((row) => (
//                 <StyledTableRow key={row.id}>
//                   <StyledTableCell component="th" scope="row">
//                     {row.id}
//                   </StyledTableCell>
                  
//                   {wishList.map((property, index) => (
//                               <tr key={property._id}>
//                                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//                                       {index + 1}
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap">
//                                       <img
//                                           src={property.imageUrl}
//                                           alt={property.title}
//                                           className="w-10 h-10 rounded-full"
//                                       />
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//                                       {property.title}
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//                                       {property.location}
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//                                   <img
//                                           src={property.agentImg}
//                                           alt={property.agentName}
//                                           className="w-10 h-10 rounded-full"
//                                       />
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//                                       {property.agentName}
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//                                   <span className={`${property.verified ? 'text-green-500' : 'text-red-500'}`}>
//                                      {property.Unverified ? 'Verified' : 'Unverified'}
//                                 </span>
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
//                                       ${property.price}
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
//                                       <Button variant="outlined">
//                                          Make Offer
//                                       </Button>
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
//                                       <Button onClick={() => handleDelete(property._id)} variant="outlined">
//                                           <FaTrash className="text-xl text-red-500" /> Delete
//                                       </Button>
//                                   </td>
//                               </tr>
//                           ))}
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       );
//     };


// export default CustomizedTables
