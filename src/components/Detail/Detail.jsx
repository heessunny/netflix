import React from 'react';
import {Table, Title} from './Detail.style';

function Detail({ props }) {
    return (
      <div>
          <Table>
          <thead>
              <tr>
                 <td>
                    <Title>{props.title}</Title>
              </td>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td >
                    <div> {props.overview}</div>
                  </td>
              </tr>
              </tbody>
          </Table>
      </div>
    );
  }

  
export default Detail