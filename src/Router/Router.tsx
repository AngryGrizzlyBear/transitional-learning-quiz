import {useContext} from 'react';
import {__RouterContext} from 'react-router';

export default function userRouter() {
  return useContext(__RouterContext);
}
