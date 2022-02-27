import axios from "axios";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function index({data}) {
      // console.log(data);
  return (
    <Layout>
        <h1>Lista de Posts</h1>
        {
          data.map(({id, title, body}) => (
            <div key={id}>
              <h3>
                <Link href={`/blog/${id}`}>
                  <a>{id} - {title}</a>
                </Link>
              </h3>
              <p>{body}</p>
            </div>
          ))
        }
    </Layout>
  )
};


export async function getStaticProps () {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = res.data;
    return{
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error);
  }
};
