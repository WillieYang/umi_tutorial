import router from 'umi/router';
// import styles from './user.css';
import DataTable from '../components/DataTable';
import withData from '../components/withData';

const WrappedDataTable = withData(DataTable);

export default function() {
  return (
    <div  >
      <h1>Page user</h1>
      <button onClick={() => { router.goBack(); }}>go back</button>
      <WrappedDataTable api={"http://httpbin.org/ip"} />
      <div>
      {/* <Wrapper>
    {(data) =>{
      return  <h1>lalalal { data.origin } xxx</h1>
    }}
    </Wrapper> */}
    </div>
    </div>
  );
}
