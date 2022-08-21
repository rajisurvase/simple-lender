import React from 'react'
import { requireAuthentication } from '../../HOC/RequireAuthentication/requireAuthentication';

function index() {
  return (
    <div>about</div>
  )
}

export default index
export const getServerSideProps = requireAuthentication(async () => {
    return {
      props: {},
    };
  });