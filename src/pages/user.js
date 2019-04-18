import router from 'umi/router';
// import styles from './user.css';
import DataTable from '../components/DataTable';
import Wrapper from '../components/withData';

// const WrappedDataTable = withData(DataTable);

export default function() {
  return (
    <div  >
      <h1>Page user</h1>
      <button onClick={() => { router.goBack(); }}>go back</button>
      {/* <WrappedDataTable api={"https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty"} /> */}
      <div>
      <Wrapper>
    {(data) =>{
      return  <h1>lalalal { data.origin } xxx</h1>
    }}
    </Wrapper>
    </div>
    </div>
  );
}
